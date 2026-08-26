# Design System Basics — Project Canopy, Phase 1

Base: [`canopy-look-and-feel.html`](../canopy-look-and-feel.html), which already establishes the tone. This doc systematizes it into tokens and extends it where the brief requires something the mockup doesn't cover yet (dark mode).

## Color

| Token | Light | Usage |
|---|---|---|
| `--paper` | `#F1EFE2` | Page background |
| `--paper-deep` | `#ECE9D9` | Recessed surfaces |
| `--ink` | `#20281F` | Body text |
| `--moss` | `#4B6455` | Primary accent — links, kickers, active nav |
| `--bark` | `#8A7458` | Secondary text — nav, captions, marginalia body |
| `--gold` | `#B4884A` | Tertiary accent — marginalia labels, hero glow |
| `--mist` | `#DCDACB` | Hairlines, dividers |

All six read as forest-at-dusk: warm paper, not white; ink with a green undertone, not pure black. This is deliberate — it's the one place the forest metaphor touches the palette directly without becoming illustrative.

**Dark mode — proposed, not in the original mockup.** The brief requires dark mode; the look-and-feel file only defines light. Rather than inverting the palette mechanically, I moved the same hues to a night register — moss and gold both need to lighten to hold contrast on a dark ground:

| Token | Dark | Rationale |
|---|---|---|
| `--paper` | `#1B1F19` | Deep forest-night, not pure black |
| `--paper-deep` | `#14170F` | |
| `--ink` | `#EDE9DA` | Same warmth as light-mode paper, inverted role |
| `--moss` | `#7FA189` | Lightened ~15% for AA contrast on dark paper |
| `--bark` | `#A6957C` | |
| `--gold` | `#D2A768` | |
| `--mist` | `#333829` | |

Implementation: tokens as CSS custom properties on `:root`, redefined under `@media (prefers-color-scheme: dark)`, redefined again under explicit `[data-theme]` overrides so a manual toggle wins over OS preference in both directions. **Flag for review:** these dark values are a first proposal sized for contrast, not yet checked against real chapter content — treat as a Phase 2 pressure-test item alongside the three sample pages.

## Typography

| Role | Face | Weight/style | Where |
|---|---|---|---|
| Display | Fraunces (variable, optical sizing) | 500–600 | Wordmark, H1, chapter H2, marginalia title |
| Body | Source Serif 4 | 400 | Running text, 18px/1.7 (17px under 720px) |
| Utility | Space Mono | 400, uppercase, +0.08–0.14em tracking | Nav, kickers, marginalia labels, footer, folio |

Two serifs, one mono — Fraunces carries editorial personality at display sizes (it has real character in the ball terminals and optical-size axis), Source Serif 4 stays quiet and highly legible at paragraph sizes so it doesn't compete with Fraunces, and Space Mono marks anything that's *label* rather than *prose* — the same role a typesetter's marginal note plays in a printed book.

**Scale** (from the mockup, as the working type scale):

- Hero H1 — `clamp(2rem, 4.4vw, 3.1rem)`, Fraunces 500, line-height 1.15
- Chapter H2 — `1.9rem`, Fraunces 500
- Marginalia title — `1.02rem`, Fraunces 500, line-height 1.35
- Body — `18px` / line-height `1.7`, Source Serif 4 400
- Marginalia text — `0.88rem` / line-height `1.55`, Source Serif 4, color `--bark`
- Kicker / nav / label — `0.66–0.72rem`, Space Mono, uppercase, tracked

## Layout

- **Reading column:** `max-width: 46rem` (~736px) for all running prose — sized for the serif body copy at 18px, roughly a 75-character measure.
- **Shell width:** `max-width: 64rem` for header, hero, and footer, giving the page air on wide screens without widening the text column itself.
- **Marginalia grid:** body column + `15rem` side column, `3rem` gap, connected by a short horizontal rule (`::before`) rather than a border box — keeps the annotation feeling handwritten-in-the-margin rather than boxed-as-a-sidebar. Collapses to a single column under 720px, where the connecting rule is replaced by a top border.
- **Chapter dividers:** 1px hairline (`--mist`), generous margin (`3.6rem`) — the only structural device between sections; no cards, no boxes, no background-color blocks anywhere in the mockup, and that restraint should hold across the rest of the site.
- **Navigation:** small mono caps, underline only on hover/current, no pills or buttons — "almost invisible" per the brief, and the mockup already delivers this.
- **Motion:** a single restrained rise-in on hero load (`translateY(10px)` → `0`, opacity fade), disabled under `prefers-reduced-motion`. No other animation in the mockup — keep it that way; a book doesn't need scroll-triggered effects.

## Pages this system needs to cover beyond the mockup

The mockup only shows one Organizational Flow chapter view. Phase 2's three pressure-test pages (Preface, one chapter, one Insight-as-marginalia) will surface whichever of these need their own treatment, but at minimum the system will eventually need: Home, Blog index/post (inherits MkDocs-era structure, restyled), Organizational Flow landing (Preface + TOC — denser than a chapter page, closer to a table of contents), standalone Insight/Model page (currently only seen *inside* a chapter as marginalia — its own full-page layout hasn't been designed yet), About, Contact.
