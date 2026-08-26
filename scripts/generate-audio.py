#!/usr/bin/env python3
"""Generate one MP3 per chapter using edge-tts (Microsoft's neural voices,
free, no API key). Run manually when chapter text changes — not part of the
build, since edge-tts is an unofficial API and shouldn't be a build-time
dependency.

Usage:
    python3 scripts/generate-audio.py            # all chapters, skip existing
    python3 scripts/generate-audio.py --force     # regenerate everything
    python3 scripts/generate-audio.py purpose ownership   # just these slugs
"""
import asyncio
import re
import sys
from pathlib import Path

import edge_tts

VOICE = "en-US-ChristopherNeural"
RATE = "+2%"

ROOT = Path(__file__).resolve().parent.parent
CHAPTERS_DIR = ROOT / "src/content/chapters"
OUT_DIR = ROOT / "public/audio"

# Reading order — front matter first, then Parts I-IV. Mirrors
# src/data/book-structure.ts; kept as a plain list here since this script
# doesn't run inside the Astro/TS build.
# Derived from src/data/book-structure.ts rather than repeated here. This was
# a second hand-maintained copy of the reading order, and it had already
# drifted: a chapter added to the book was silently skipped by this script
# because nobody thought to add it in two places.
def _reading_order() -> list[str]:
    src = (ROOT / "src" / "data" / "book-structure.ts").read_text()
    order = ["preface"]
    for block in ("frontMatter", "parts"):
        i = src.find(f"export const {block}")
        if i == -1:
            continue
        j = src.find("export const", i + 10)
        seg = src[i:j if j != -1 else len(src)]
        for slug in re.findall(r"slug: '([^']+)'", seg):
            if slug not in order:
                order.append(slug)
    return order


READING_ORDER = _reading_order()


def strip_frontmatter(raw: str):
    m = re.match(r"^---\n(.*?)\n---\n(.*)$", raw, re.S)
    if not m:
        return {}, raw
    front, body = m.group(1), m.group(2)
    fm = {}
    for line in front.split("\n"):
        mm = re.match(r'^(\w+):\s*"?(.*?)"?\s*$', line)
        if mm and mm.group(1) not in ("indicator", "effect", "editorNotes"):
            fm[mm.group(1)] = mm.group(2)
    return fm, body


def strip_markdown(text: str) -> str:
    # Links: keep the visible text only.
    text = re.sub(r"\[([^\]]+)\]\([^)]+\)", r"\1", text)
    # Bold / italic / inline code markers.
    text = re.sub(r"\*\*([^*]+)\*\*", r"\1", text)
    text = re.sub(r"(?<!\*)\*([^*]+)\*(?!\*)", r"\1", text)
    text = re.sub(r"_([^_]+)_", r"\1", text)
    text = re.sub(r"`([^`]+)`", r"\1", text)
    # Headings become a spoken line with a pause after, via a trailing period.
    def heading(m):
        t = m.group(1).strip()
        if not t.endswith((".", "?", "!")):
            t += "."
        return t
    text = re.sub(r"^#{1,6}\s*(.+)$", heading, text, flags=re.M)
    # Blockquote / list markers.
    text = re.sub(r"^>\s?", "", text, flags=re.M)
    text = re.sub(r"^[-*]\s+", "", text, flags=re.M)
    text = re.sub(r"^\d+\.\s+", "", text, flags=re.M)
    text = re.sub(r"\n{3,}", "\n\n", text)
    return text.strip()


# Mirrors src/data/reader-note.ts. Read first, before "Preface" itself —
# the one exception to chapter audio being just title + dek + body, because
# a listener should hear this before anything else in the paper.
READER_NOTE = [
    "What follows is my own reading of what I have seen, shaped by years of working with organizations.",
    "Many of the examples and stories come from my own experience. They are how those situations looked to me at the time, and what I took from them. Other people who were there may well remember them differently, which is only to be expected.",
    "The thinking behind all of it has been shaped by conversations with colleagues, clients, mentors and friends, and by more books, courses and conferences than I could sensibly list. Anyone who has spent years in a profession knows how hard it is to say where one idea ends and someone else's begins.",
    "So if something here feels familiar, that is probably why. I am grateful to everyone who has contributed to it, knowingly or otherwise. Where I have got something wrong, that part is mine.",
]


def chapter_text(slug: str) -> str:
    path = CHAPTERS_DIR / f"{slug}.md"
    raw = path.read_text(encoding="utf-8")
    fm, body = strip_frontmatter(raw)
    parts = []
    if slug == "preface":
        parts.append("A Note to the Reader.")
        parts.extend(READER_NOTE)
    if fm.get("title"):
        parts.append(fm["title"].strip() + ".")
    # The dek is deliberately not read. It is a subtitle for the page — it
    # works set under a heading and sounds like throat-clearing spoken aloud.
    parts.append(strip_markdown(body))
    return "\n\n".join(p for p in parts if p)


async def synth(text: str, out_path: Path):
    communicate = edge_tts.Communicate(text, VOICE, rate=RATE)
    await communicate.save(str(out_path))


async def main():
    args = sys.argv[1:]
    force = "--force" in args
    only = [a for a in args if not a.startswith("--")]
    slugs = only if only else READING_ORDER

    OUT_DIR.mkdir(parents=True, exist_ok=True)
    for slug in slugs:
        if slug not in READING_ORDER:
            print(f"skip {slug}: not in reading order")
            continue
        out_path = OUT_DIR / f"{slug}.mp3"
        if out_path.exists() and not force:
            print(f"skip {slug}: already exists")
            continue
        text = chapter_text(slug)
        print(f"generating {slug} ({len(text)} chars)...")
        await synth(text, out_path)
        size_kb = out_path.stat().st_size / 1024
        print(f"  -> {out_path.name} ({size_kb:.0f} KB)")


if __name__ == "__main__":
    asyncio.run(main())
