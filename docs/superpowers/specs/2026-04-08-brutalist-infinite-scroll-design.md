# Brutalist Infinite Scroll Doomscrolling Feed

## Overview

Redesign `doomscrolling.html` as a brutalist-styled infinite scroll feed with randomly generated posts, escalating meta-commentary, and fake sponsored ads. Consolidate 7 CSS files into a single stylesheet (`styles/page1.css`).

## Goals

- True infinite scroll — posts auto-load as the user scrolls, no button needed
- Brutalist / anti-design aesthetic that looks distinct from any existing social media platform
- Escalating self-aware commentary that gets increasingly judgmental over time
- Fake realistic-looking sponsored posts appearing 10% of the time
- Simplify from 7 stylesheets down to 1

## File Changes

| File | Action |
|------|--------|
| `styles/page1.css` | Rewrite as brutalist theme |
| `styles/page2.css` — `styles/page7.css` | Delete |
| `doomscrolling.html` | Rewrite — simplified markup, single stylesheet link |
| `random.js` | Rewrite — infinite scroll, ads, commentary system |

## Visual Design — Brutalist Theme

- **Background:** `#0f0f0f` (near-black)
- **Post borders:** 2px solid `#fff` (hard white borders, no rounded corners)
- **Accent color:** `#ff3333` (red — used for avatars, engagement metrics, ad borders)
- **Typography:** Monospace for post text, timestamps, engagement. Uppercase + bold + letter-spacing for usernames.
- **Avatars:** 34x34px squares (no border-radius), red background with white initial
- **Engagement icons:** `▲` (likes), `■` (comments), `►` (share) in red monospace
- **Timestamps:** Monospace format like `00:03:22 ago`
- **Max width:** 900px centered
- **No rounded corners anywhere**

## Post Types

### Regular Post (Text Only)
- Square red avatar with first letter of username
- Username in uppercase + letter-spacing
- Monospace timestamp
- Post text from `sentencesArr` (2-4 random sentences combined)
- Engagement row: likes, comments, share

### Regular Post (Image)
- Same header as text post
- Image from existing `images/image1.png` through `images/image10.png` (cycled randomly)
- Caption text below image
- Engagement row

### Sponsored Post (10% chance)
- **Red border** instead of white to visually distinguish
- **"SPONSORED" badge** — red background, white text, positioned top-right of card
- **White square avatar** with brand initials (instead of red)
- **Brand name** in uppercase where username would be
- **"PROMOTED"** label in red where timestamp would be
- **Ad copy** in ALL CAPS monospace
- **Ad image placeholder** with dashed red border
- **Bottom row:** fake brand URL on left, "SHOP NOW ►" button on right (red border, red text, monospace)
- Ads are non-functional (no real links)

### Fake Brand Data

| Brand | Initials | Tagline | Category |
|-------|----------|---------|----------|
| NOVAVEX LABS | NVX | ENGINEERED FOR PEAK PERFORMANCE | supplements |
| DRIFT APPAREL | DFT | WEAR THE VOID | streetwear |
| ZYNCO | ZYN | EVERYTHING. DELIVERED. NOW. | delivery app |
| PULSEWAVE | PLW | SOUND BEYOND LIMITS | headphones |
| HEXACORE FITNESS | HXC | YOUR BODY IS SOFTWARE. UPDATE IT. | fitness app |
| LUMIVOX | LMV | SEE DIFFERENT | smart glasses |
| GRINDSET CO. | GRD | SLEEP IS OPTIONAL | energy drinks |
| VOIDBOX | VBX | SUBSCRIBE TO EVERYTHING | subscription box |

Each ad randomly selects a brand and uses its tagline as the ad copy.

## Escalating Commentary System

Commentary dividers appear between posts approximately every 5 posts. The tone escalates based on total posts seen and time on page.

### Phase 1: Subtle (posts 1–15)
Simple post counters:
- `━━━ POST 5 OF ∞ ━━━`
- `━━━ POST 12 OF ∞ ━━━`

Style: monospace, red text, centered, letter-spacing.

### Phase 2: Aware (posts 16–35)
Pointed observations:
- `━━━ YOU'VE SEEN 20 POSTS. NONE OF THEM MATTERED. ━━━`
- `━━━ POST 28. STILL HERE? ━━━`
- `━━━ YOU HAVE SCROLLED PAST 24 POSTS AND RETAINED NOTHING ━━━`

Style: same as Phase 1 but bolder.

### Phase 3: Aggressive (posts 36+)
Full call-outs with border treatment:
- `⚠ YOU HAVE BEEN HERE FOR 5 MINUTES. THIS IS THE PROBLEM. ⚠`
- `⚠ CLOSE THE TAB. GO OUTSIDE. DO LITERALLY ANYTHING ELSE. ⚠`
- `⚠ THIS IS POST 50. YOU WILL NOT REMEMBER A SINGLE ONE. ⚠`
- `⚠ THE ALGORITHM THANKS YOU FOR YOUR TIME. ⚠`
- `⚠ YOU JUST LOST ANOTHER MINUTE READING THIS WARNING AND KEPT SCROLLING ⚠`

Style: 2px red border, red bold text, centered. These are styled as distinct warning banners.

Time-based messages use `performance.now()` or a start timestamp to calculate actual minutes spent on page.

## Infinite Scroll Behavior

- A sentinel `<div>` sits at the bottom of the feed
- `IntersectionObserver` watches the sentinel
- When the sentinel enters the viewport, generate a batch of 5–8 new posts and append them to the feed
- Each post has a 10% chance of being a sponsored post instead of a regular post
- Commentary dividers are injected approximately every 5 posts (with some randomness: every 4–6 posts)
- Posts use existing data arrays: `sentencesArr`, `usernamesArr`, `imageArr`, `timeLabels`
- The style switching logic (previously cycling through 7 CSS files) is removed entirely
- No "keep scrolling" button — the bottom nav only has the "← back" link to `index.html`

## HTML Structure (doomscrolling.html)

```
<link rel="stylesheet" href="styles/page1.css">

<div class="feed" id="feed"></div>
<div class="sentinel" id="sentinel"></div>
<nav class="bottom-nav">
  <a href="index.html" class="btn-back">← BACK</a>
</nav>

<script src="random.js"></script>
```

## Data Arrays (retained from current random.js)

- `sentencesArr` — essay sentences used as post text/captions
- `usernamesArr` — fake usernames like @scrollqueen, @brainrot.exe
- `imageArr` — paths to images/image1.png through image10.png
- `timeLabels` — relative timestamps

New arrays added:
- `brandsArr` — fake brand objects (name, initials, tagline, url, category)
- `commentaryPhases` — arrays of messages for each escalation phase

## Testing

- Scroll through 50+ posts to verify infinite loading works
- Confirm commentary escalates through all 3 phases
- Verify ads appear at roughly 10% frequency
- Check that all 10 images cycle without errors
- Confirm page works with only `styles/page1.css` (no other stylesheets loaded)
- Verify "← back" link returns to index.html
