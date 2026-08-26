#!/usr/bin/env python3
"""Write src/data/audio-durations.json — {slug: seconds} for every MP3 in
public/audio/, via ffprobe. Run after scripts/generate-audio.py."""
import json
import subprocess
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
AUDIO_DIR = ROOT / "public/audio"
OUT_PATH = ROOT / "src/data/audio-durations.json"


def duration_of(path: Path) -> float:
    out = subprocess.run(
        ["ffprobe", "-v", "error", "-show_entries", "format=duration",
         "-of", "default=noprint_wrappers=1:nokey=1", str(path)],
        capture_output=True, text=True, check=True,
    )
    return round(float(out.stdout.strip()))


def main():
    durations = {}
    for mp3 in sorted(AUDIO_DIR.glob("*.mp3")):
        durations[mp3.stem] = duration_of(mp3)
    OUT_PATH.write_text(json.dumps(durations, indent=2) + "\n")
    print(f"wrote {len(durations)} durations to {OUT_PATH}")


if __name__ == "__main__":
    main()
