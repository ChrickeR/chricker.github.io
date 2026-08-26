#!/usr/bin/env python3
"""Build the two CVs in public/cv/ from one template, so the English and the
Swedish edition always share the same layout.

Usage:
    python3 scripts/make-cv.py            # both
    python3 scripts/make-cv.py sv         # one language

Edit the text in cv/content.json and the layout in cv/template.html.
"""
import html
import json
import os
import shutil
import subprocess
import sys
import tempfile
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "cv"
OUT = Path(os.environ.get("CV_OUT", ROOT / "public" / "cv"))

CHROME = next(
    (p for p in [
        "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
        "/Applications/Chromium.app/Contents/MacOS/Chromium",
        shutil.which("chromium") or "",
        shutil.which("google-chrome") or "",
    ] if p and Path(p).exists()),
    None,
)

e = html.escape


def entry(item, cls="job"):
    company = f' <span class="org">— {e(item["org"])}</span>' if item.get("org") else ""
    return (
        f'<div class="{cls}"><div class="role"><h3>{e(item["role"])}{company}</h3>'
        f'<span class="when">{e(item["when"])}</span></div>'
        f'<p>{e(item["text"])}</p></div>'
    )


def render(c):
    out = [f'<header><h1>{e(c["name"])}</h1>',
           f'<p class="title">{e(c["title"])}</p>',
           f'<p class="tagline">{e(c["tagline"])}</p>',
           '<p class="contact">' + "&nbsp;·&nbsp;".join(e(x).replace(" ", "&nbsp;") if x[:1] == "+" else e(x) for x in c["contact"]) + "</p></header>"]

    def section(key, body):
        out.append(f'<section><h2>{e(c["headings"][key])}</h2>{body}</section>')

    section("profile", "".join(f"<p>{e(p)}</p>" for p in c["profile"]))
    # Each competency stays on one line, so no item is split across a break.
    keep = lambda items: " · ".join(e(x).replace(" ", "&nbsp;") for x in items)
    section("competencies", f'<p class="list">{keep(c["competencies"])}</p>')
    section("results", "<ul>" + "".join(f"<li>{e(r)}</li>" for r in c["results"]) + "</ul>")

    exp = []
    for job in c["experience"]:
        block = entry(job, "job top")
        if job.get("engagements_label"):
            block += f'<p class="via">{e(job["engagements_label"])}</p>'
        if job.get("roles"):
            block += '<div class="nested">' + "".join(entry(r, "job") for r in job["roles"]) + "</div>"
        exp.append(block)
    section("experience", "".join(exp))

    pub = c["published"]
    section("published", f'<p class="pub"><b>{e(pub["name"])}</b> — {e(pub["text"])}</p>')
    section("industries", f'<p class="list">{keep(c["industries"])}</p>')
    section("flows", f'<p class="list">{keep(c["flows"])}</p>')
    section("education", "".join(f'<p class="edu"><b>{e(n)}</b> — {e(w)}</p>' for n, w in c["education"]))
    section("other", f'<p class="other">{keep(c["other"])}</p>')
    out.append(f'<footer><span>{e(c["footer"][0])}</span><span>{e(c["footer"][1])}</span></footer>')
    return "\n".join(out)


def build(lang):
    content = json.loads((SRC / "content.json").read_text(encoding="utf-8"))[lang]
    page = (SRC / "template.html").read_text(encoding="utf-8")
    page = page.replace("{{lang}}", lang).replace("{{title}}", e(content["doc_title"])).replace("{{body}}", render(content))
    with tempfile.TemporaryDirectory() as tmp:
        src = Path(tmp) / f"cv-{lang}.html"
        src.write_text(page, encoding="utf-8")
        dst = OUT / f"christoffer-rasten-cv-{lang}.pdf"
        subprocess.run(
            [CHROME, "--headless=new", "--disable-gpu", "--no-pdf-header-footer",
             f"--print-to-pdf={dst}", src.as_uri()],
            check=True, capture_output=True,
        )
    print("wrote", dst)


if __name__ == "__main__":
    if not CHROME:
        sys.exit("No Chrome or Chromium found.")
    for lang in sys.argv[1:] or ["en", "sv"]:
        build(lang)
