# End Goal Page Design

## Overview

A third page (`endgoal.html`) that serves as the conclusion of the doomscrolling project. After the user reads the opinion essay (index.html) and experiences the simulated infinite feed (doomscrolling.html), this page delivers the wake-up call: real stats, real research, and a reframe on what they could be doing instead.

## Visual Style

- Dark brutalist style, matching `doomscrolling.html`
- Uses the same design language: dark background (`#0f0f0f`), IBM Plex Mono font, red (`#ff3333`) accents, white (`#fff`) text, sharp borders
- CSS lives in `styles/endgoal.css` (separate file, same pattern as `styles/page1.css`)
- No JavaScript required — this is a static content page

## Navigation

- **Entry point:** A new button added to `doomscrolling.html`'s bottom nav bar, next to the existing "BACK" button. Label: `THE END GOAL →`. Links to `endgoal.html`.
- **Exit points on endgoal.html:** Bottom nav with two links:
  - `← BACK TO FEED` → `doomscrolling.html`
  - `← READ THE ESSAY` → `index.html`

## Page Structure

### Section 1: The Wake-Up Call (Hero)

Full-width hero section at the top with a large centerpiece stat:

> THE AVERAGE PERSON SPENDS 2 HOURS AND 23 MINUTES ON SOCIAL MEDIA EVERY DAY.

Subtitle below:

> THAT'S 36 FULL DAYS A YEAR. SCROLLING.

Source: DataReportal / GWI (Global Web Index) annual report.

Below the hero, 3 additional stats in stacked bordered blocks:

1. "Americans check their phones 96 times a day" — Source: Asurion (2019)
2. "50% of adults report feeling addicted to their phones" — Source: Common Sense Media
3. "Screen time increased 76% during the pandemic" — Source: JAMA Network Open (2021)

Each stat styled with red accent borders, similar to the feed's warning commentary blocks.

### Section 2: The Real Cost

Research-backed section on what doomscrolling does to your brain. Organized into three sub-topics, each with cited stats in bordered card-like blocks (red left-border accent):

**Mental Health:**
- "Passive social media use is linked to increased depression and loneliness" — Journal of Experimental Psychology (2019)
- "Limiting social media to 30 min/day led to significant reductions in anxiety and FOMO" — Journal of Social and Clinical Psychology (2018)

**Sleep:**
- "Blue light exposure before bed suppresses melatonin by up to 50%" — Harvard Health
- "People who doomscroll before sleep report worse sleep quality and more fatigue" — Health Communication (2021)

**Attention Span:**
- "The average human attention span has dropped from 12 seconds to 8 seconds" — Microsoft Canada (2015)
- "Heavy media multitaskers perform worse on task-switching tests" — Stanford / PNAS (2009)

Each block: large stat text, one-line explanation, clickable source link.

### Section 3: Take Back Your Time

Reframe section. Header:

> IN 2 HOURS AND 23 MINUTES YOU COULD:

Stacked list with red arrow/bullet markers:
- Learn a new song on an instrument
- Run a 5K
- Read 80+ pages of a book
- Cook a full meal from scratch
- Have an actual conversation with someone
- Start a side project
- Get a full workout in
- Write something that matters

**Closing statement** — large, bold, centered:

> THE FEED NEVER ENDS. BUT YOU CAN.

### Sources Section

Compact list at the very bottom of all cited sources with full titles and clickable links. Labeled "SOURCES" in a badge style matching the sponsored post badges from the feed.

Sources to cite (with links):
1. DataReportal — "Digital 2024: Global Overview Report" — https://datareportal.com/reports/digital-2024-global-overview-report
2. Asurion — "Americans Check Their Phones 96 Times a Day" (2019) — https://www.asurion.com/connect/tech-blog/tech-usage/
3. Common Sense Media — "Technology Addiction: Concern, Controversy, and Finding Balance" — https://www.commonsensemedia.org/research/technology-addiction-concern-controversy-and-finding-balance
4. JAMA Network Open — "Screen Time and Child and Adolescent Mental Health During the COVID-19 Pandemic" (2021) — https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2785493
5. Journal of Experimental Psychology — "Seeing Everyone Else's Highlight Reels: How Facebook Usage Is Linked to Depressive Symptoms" (2019) — https://doi.org/10.1037/xge0000600
6. Journal of Social and Clinical Psychology — "No More FOMO: Limiting Social Media Decreases Loneliness and Depression" (2018) — https://guilfordjournals.com/doi/10.1521/jscp.2018.37.10.751
7. Harvard Health — "Blue Light Has a Dark Side" — https://www.health.harvard.edu/staying-healthy/blue-light-has-a-dark-side
8. Health Communication — "Doomscrolling and Sleep Quality" (2021) — https://doi.org/10.1080/10410236.2021.1987612
9. Microsoft Canada — "Attention Spans" (2015) — https://www.microsoft.com/en-us/research/
10. Stanford / PNAS — "Cognitive Control in Media Multitaskers" (2009) — https://doi.org/10.1073/pnas.0903620106

## Files to Create/Modify

- **Create:** `endgoal.html` — the new page
- **Create:** `styles/endgoal.css` — styling for the new page
- **Modify:** `doomscrolling.html` — add "THE END GOAL →" button to the bottom nav
