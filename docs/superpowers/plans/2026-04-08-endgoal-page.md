# End Goal Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the third and final page of the doomscrolling project — a research-backed wake-up call with cited sources, mental health stats, and a time reframe.

**Architecture:** Static HTML page (`endgoal.html`) with a dedicated CSS file (`styles/endgoal.css`) matching the dark brutalist style of `doomscrolling.html`. No JavaScript needed. One small modification to `doomscrolling.html` to add a nav link.

**Tech Stack:** HTML, CSS (IBM Plex Mono font, CSS custom properties)

---

## File Structure

- **Create:** `styles/endgoal.css` — all styles for the end goal page, using the same CSS custom properties and design language as `styles/page1.css`
- **Create:** `endgoal.html` — the end goal page with three content sections plus sources
- **Modify:** `doomscrolling.html` — add "THE END GOAL →" button to bottom nav

---

### Task 1: Create the CSS file

**Files:**
- Create: `styles/endgoal.css`

- [ ] **Step 1: Create `styles/endgoal.css` with base styles and CSS variables**

```css
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;700;900&display=swap');

*,
*::before,
*::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

:root {
    --bg: #0f0f0f;
    --white: #fff;
    --red: #ff3333;
    --gray: #666;
    --dark: #1a1a1a;
    --font: 'IBM Plex Mono', monospace;
}

body {
    background: var(--bg);
    color: var(--white);
    font-family: var(--font);
    font-size: 0.9rem;
    line-height: 1.6;
}

.page-container {
    max-width: 550px;
    margin: 0 auto;
    padding: 0 14px 100px;
}
```

- [ ] **Step 2: Add hero section styles**

Append to `styles/endgoal.css`:

```css
/* Hero / Wake-Up Call */
.hero-section {
    padding: 60px 0 40px;
    border-bottom: 2px solid var(--white);
    margin-bottom: 40px;
}

.hero-stat {
    font-size: 1.6rem;
    font-weight: 900;
    line-height: 1.3;
    text-transform: uppercase;
    letter-spacing: 0.02em;
    color: var(--red);
    margin-bottom: 12px;
}

.hero-sub {
    font-size: 0.88rem;
    font-weight: 700;
    color: var(--gray);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 40px;
}

.stat-block {
    border: 2px solid var(--red);
    padding: 14px;
    margin-bottom: 4px;
}

.stat-text {
    font-size: 0.88rem;
    font-weight: 700;
    line-height: 1.5;
    color: var(--white);
}

.stat-source {
    font-size: 0.68rem;
    color: var(--gray);
    margin-top: 6px;
}

.stat-source a {
    color: var(--red);
    text-decoration: none;
}

.stat-source a:hover {
    text-decoration: underline;
}
```

- [ ] **Step 3: Add "The Real Cost" section styles**

Append to `styles/endgoal.css`:

```css
/* The Real Cost */
.section-title {
    font-size: 1.1rem;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--white);
    margin-bottom: 20px;
}

.sub-topic {
    font-size: 0.78rem;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    color: var(--red);
    margin-top: 28px;
    margin-bottom: 12px;
}

.research-block {
    border-left: 4px solid var(--red);
    padding: 12px 14px;
    margin-bottom: 8px;
    background: var(--dark);
}

.research-text {
    font-size: 0.84rem;
    font-weight: 700;
    line-height: 1.5;
    color: var(--white);
}

.research-detail {
    font-size: 0.76rem;
    color: var(--gray);
    margin-top: 4px;
    line-height: 1.5;
}

.research-source {
    font-size: 0.68rem;
    color: var(--gray);
    margin-top: 6px;
}

.research-source a {
    color: var(--red);
    text-decoration: none;
}

.research-source a:hover {
    text-decoration: underline;
}

.cost-section {
    border-bottom: 2px solid var(--white);
    padding-bottom: 40px;
    margin-bottom: 40px;
}
```

- [ ] **Step 4: Add "Take Back Your Time" section styles**

Append to `styles/endgoal.css`:

```css
/* Take Back Your Time */
.reframe-header {
    font-size: 1.1rem;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--white);
    margin-bottom: 20px;
}

.reframe-list {
    list-style: none;
    padding: 0;
}

.reframe-list li {
    font-size: 0.88rem;
    font-weight: 700;
    color: var(--white);
    padding: 8px 0;
    border-bottom: 1px solid #222;
}

.reframe-list li::before {
    content: "► ";
    color: var(--red);
}

.closing-statement {
    font-size: 1.4rem;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 0.02em;
    color: var(--red);
    text-align: center;
    margin-top: 48px;
    padding: 28px 0;
    border: 2px solid var(--red);
}
```

- [ ] **Step 5: Add sources section and bottom nav styles**

Append to `styles/endgoal.css`:

```css
/* Sources */
.sources-section {
    margin-top: 48px;
    padding-top: 28px;
    border-top: 2px solid var(--white);
}

.sources-badge {
    display: inline-block;
    background: var(--red);
    color: var(--white);
    font-size: 0.6rem;
    font-weight: 900;
    padding: 3px 8px;
    letter-spacing: 0.15em;
    margin-bottom: 16px;
}

.sources-list {
    list-style: none;
    padding: 0;
}

.sources-list li {
    font-size: 0.68rem;
    color: var(--gray);
    line-height: 1.6;
    margin-bottom: 8px;
}

.sources-list li a {
    color: var(--red);
    text-decoration: none;
}

.sources-list li a:hover {
    text-decoration: underline;
}

/* Bottom nav */
.bottom-nav {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px 20px;
    background: var(--bg);
    border-top: 2px solid var(--white);
}

.btn-nav {
    font-family: var(--font);
    font-size: 0.72rem;
    font-weight: 800;
    color: var(--gray);
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    border: 2px solid var(--gray);
    padding: 8px 14px;
}

.btn-nav:hover {
    color: var(--white);
    border-color: var(--white);
}
```

- [ ] **Step 6: Commit**

```bash
git add styles/endgoal.css
git commit -m "Add CSS for end goal page"
```

---

### Task 2: Create the HTML page

**Files:**
- Create: `endgoal.html`

- [ ] **Step 1: Create `endgoal.html` with the full page content**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>the end goal</title>
    <link rel="stylesheet" href="styles/endgoal.css">
</head>
<body>
    <div class="page-container">

        <!-- Section 1: The Wake-Up Call -->
        <div class="hero-section">
            <div class="hero-stat">The average person spends 2 hours and 23 minutes on social media every day.</div>
            <div class="hero-sub">That's 36 full days a year. Scrolling.</div>

            <div class="stat-block">
                <div class="stat-text">Americans check their phones 96 times a day.</div>
                <div class="stat-source"><a href="https://www.asurion.com/connect/tech-blog/tech-usage/" target="_blank" rel="noopener">Asurion (2019)</a></div>
            </div>
            <div class="stat-block">
                <div class="stat-text">50% of adults report feeling addicted to their phones.</div>
                <div class="stat-source"><a href="https://www.commonsensemedia.org/research/technology-addiction-concern-controversy-and-finding-balance" target="_blank" rel="noopener">Common Sense Media</a></div>
            </div>
            <div class="stat-block">
                <div class="stat-text">Screen time increased 76% during the pandemic.</div>
                <div class="stat-source"><a href="https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2785493" target="_blank" rel="noopener">JAMA Network Open (2021)</a></div>
            </div>
        </div>

        <!-- Section 2: The Real Cost -->
        <div class="cost-section">
            <div class="section-title">The Real Cost</div>

            <div class="sub-topic">Mental Health</div>
            <div class="research-block">
                <div class="research-text">"Passive social media use is linked to increased depression and loneliness."</div>
                <div class="research-detail">Scrolling without interacting makes you feel worse, not better.</div>
                <div class="research-source"><a href="https://doi.org/10.1037/xge0000600" target="_blank" rel="noopener">Journal of Experimental Psychology (2019)</a></div>
            </div>
            <div class="research-block">
                <div class="research-text">"Limiting social media to 30 min/day led to significant reductions in anxiety and FOMO."</div>
                <div class="research-detail">Less time on feeds = measurably less stress.</div>
                <div class="research-source"><a href="https://guilfordjournals.com/doi/10.1521/jscp.2018.37.10.751" target="_blank" rel="noopener">Journal of Social and Clinical Psychology (2018)</a></div>
            </div>

            <div class="sub-topic">Sleep</div>
            <div class="research-block">
                <div class="research-text">"Blue light exposure before bed suppresses melatonin by up to 50%."</div>
                <div class="research-detail">Your phone is literally keeping you awake.</div>
                <div class="research-source"><a href="https://www.health.harvard.edu/staying-healthy/blue-light-has-a-dark-side" target="_blank" rel="noopener">Harvard Health</a></div>
            </div>
            <div class="research-block">
                <div class="research-text">"People who doomscroll before sleep report worse sleep quality and more fatigue."</div>
                <div class="research-detail">The last thing you see before bed shapes how you rest.</div>
                <div class="research-source"><a href="https://doi.org/10.1080/10410236.2021.1987612" target="_blank" rel="noopener">Health Communication (2021)</a></div>
            </div>

            <div class="sub-topic">Attention Span</div>
            <div class="research-block">
                <div class="research-text">"The average human attention span has dropped from 12 seconds to 8 seconds."</div>
                <div class="research-detail">That is less than a goldfish.</div>
                <div class="research-source"><a href="https://www.microsoft.com/en-us/research/" target="_blank" rel="noopener">Microsoft Canada (2015)</a></div>
            </div>
            <div class="research-block">
                <div class="research-text">"Heavy media multitaskers perform worse on task-switching tests."</div>
                <div class="research-detail">More tabs open does not mean more getting done.</div>
                <div class="research-source"><a href="https://doi.org/10.1073/pnas.0903620106" target="_blank" rel="noopener">Stanford / PNAS (2009)</a></div>
            </div>
        </div>

        <!-- Section 3: Take Back Your Time -->
        <div class="reframe-header">In 2 hours and 23 minutes you could:</div>
        <ul class="reframe-list">
            <li>Learn a new song on an instrument</li>
            <li>Run a 5K</li>
            <li>Read 80+ pages of a book</li>
            <li>Cook a full meal from scratch</li>
            <li>Have an actual conversation with someone</li>
            <li>Start a side project</li>
            <li>Get a full workout in</li>
            <li>Write something that matters</li>
        </ul>

        <div class="closing-statement">The feed never ends. But you can.</div>

        <!-- Sources -->
        <div class="sources-section">
            <div class="sources-badge">SOURCES</div>
            <ol class="sources-list">
                <li><a href="https://datareportal.com/reports/digital-2024-global-overview-report" target="_blank" rel="noopener">DataReportal — "Digital 2024: Global Overview Report"</a></li>
                <li><a href="https://www.asurion.com/connect/tech-blog/tech-usage/" target="_blank" rel="noopener">Asurion — "Americans Check Their Phones 96 Times a Day" (2019)</a></li>
                <li><a href="https://www.commonsensemedia.org/research/technology-addiction-concern-controversy-and-finding-balance" target="_blank" rel="noopener">Common Sense Media — "Technology Addiction: Concern, Controversy, and Finding Balance"</a></li>
                <li><a href="https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2785493" target="_blank" rel="noopener">JAMA Network Open — "Screen Time During COVID-19" (2021)</a></li>
                <li><a href="https://doi.org/10.1037/xge0000600" target="_blank" rel="noopener">Journal of Experimental Psychology — "Facebook Usage and Depressive Symptoms" (2019)</a></li>
                <li><a href="https://guilfordjournals.com/doi/10.1521/jscp.2018.37.10.751" target="_blank" rel="noopener">Journal of Social and Clinical Psychology — "No More FOMO" (2018)</a></li>
                <li><a href="https://www.health.harvard.edu/staying-healthy/blue-light-has-a-dark-side" target="_blank" rel="noopener">Harvard Health — "Blue Light Has a Dark Side"</a></li>
                <li><a href="https://doi.org/10.1080/10410236.2021.1987612" target="_blank" rel="noopener">Health Communication — "Doomscrolling and Sleep Quality" (2021)</a></li>
                <li><a href="https://www.microsoft.com/en-us/research/" target="_blank" rel="noopener">Microsoft Canada — "Attention Spans" (2015)</a></li>
                <li><a href="https://doi.org/10.1073/pnas.0903620106" target="_blank" rel="noopener">Stanford / PNAS — "Cognitive Control in Media Multitaskers" (2009)</a></li>
            </ol>
        </div>

    </div>

    <nav class="bottom-nav">
        <a href="doomscrolling.html" class="btn-nav">← back to feed</a>
        <a href="index.html" class="btn-nav">← read the essay</a>
    </nav>
</body>
</html>
```

- [ ] **Step 2: Commit**

```bash
git add endgoal.html
git commit -m "Add end goal page with stats, research, and sources"
```

---

### Task 3: Add navigation link to doomscrolling page

**Files:**
- Modify: `doomscrolling.html:13-15`

- [ ] **Step 1: Update the bottom nav in `doomscrolling.html`**

Replace the existing `<nav>` block:

```html
<nav class="bottom-nav">
    <a href="index.html" class="btn-back">← BACK</a>
</nav>
```

With:

```html
<nav class="bottom-nav">
    <a href="index.html" class="btn-back">← BACK</a>
    <a href="endgoal.html" class="btn-back" style="margin-left: auto;">THE END GOAL →</a>
</nav>
```

- [ ] **Step 2: Commit**

```bash
git add doomscrolling.html
git commit -m "Add end goal link to doomscrolling page nav"
```

---

### Task 4: Visual verification

- [ ] **Step 1: Open `endgoal.html` in a browser and verify:**
- All three sections render correctly
- Red accent borders and text appear
- Source links are clickable and open in new tabs
- Bottom nav links work (back to feed, read the essay)
- The new "THE END GOAL →" button appears on `doomscrolling.html`
- Page feels consistent with the doomscrolling feed page style

- [ ] **Step 2: Fix any visual issues found**

- [ ] **Step 3: Final commit if any fixes were made**

```bash
git add -A
git commit -m "Fix visual issues on end goal page"
```
