# Brutalist Infinite Scroll Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the doomscrolling page as a brutalist-themed infinite scroll feed with escalating meta-commentary and fake sponsored ads, consolidated to a single stylesheet.

**Architecture:** Single-page app with one HTML file, one CSS file, one JS file. JS uses IntersectionObserver for infinite scroll, generates posts from data arrays, injects commentary dividers that escalate over time, and randomly inserts fake sponsored posts at 10% frequency.

**Tech Stack:** Vanilla HTML, CSS, JavaScript (no frameworks)

**Spec:** `docs/superpowers/specs/2026-04-08-brutalist-infinite-scroll-design.md`

**Note:** All post content is generated from hardcoded local arrays — no user input is involved, so innerHTML usage is safe here.

---

## File Structure

| File | Role |
|------|------|
| `styles/page1.css` | Rewrite — brutalist theme (the only stylesheet) |
| `doomscrolling.html` | Rewrite — simplified markup with single stylesheet link |
| `random.js` | Rewrite — infinite scroll engine, post generation, ads, commentary |
| `styles/page2.css` | Delete |
| `styles/page3.css` | Delete |
| `styles/page4.css` | Delete |
| `styles/page5.css` | Delete |
| `styles/page6.css` | Delete |
| `styles/page7.css` | Delete |

---

### Task 1: Delete unused stylesheets

**Files:**
- Delete: `styles/page2.css`
- Delete: `styles/page3.css`
- Delete: `styles/page4.css`
- Delete: `styles/page5.css`
- Delete: `styles/page6.css`
- Delete: `styles/page7.css`

- [ ] **Step 1: Delete the 6 extra stylesheets**

```bash
rm styles/page2.css styles/page3.css styles/page4.css styles/page5.css styles/page6.css styles/page7.css
```

- [ ] **Step 2: Verify only page1.css remains**

```bash
ls styles/
```

Expected output: `page1.css`

- [ ] **Step 3: Commit**

```bash
git add -u styles/
git commit -m "Remove unused stylesheets page2-page7"
```

---

### Task 2: Rewrite the brutalist CSS theme

**Files:**
- Rewrite: `styles/page1.css`

- [ ] **Step 1: Rewrite `styles/page1.css` with the brutalist theme**

```css
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;700&display=swap');

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

/* Feed container */
.feed {
    max-width: 900px;
    margin: 0 auto;
    padding: 0 0 80px;
}

/* Post card */
.post-card {
    background: var(--bg);
    border: 2px solid var(--white);
    padding: 14px;
    margin-bottom: -2px; /* collapse borders */
}

/* Post header */
.post-header {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
}

.avatar {
    width: 34px;
    height: 34px;
    border-radius: 0;
    background: var(--red);
    color: var(--white);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 900;
    font-size: 0.82rem;
    flex-shrink: 0;
}

.post-meta {
    flex: 1;
}

.post-username {
    font-weight: 800;
    font-size: 0.78rem;
    color: var(--white);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    display: block;
}

.post-time {
    font-size: 0.68rem;
    color: var(--gray);
}

.post-dots {
    color: var(--gray);
    cursor: pointer;
    font-size: 1.1rem;
    letter-spacing: 0.05em;
}

/* Post content */
.post-image {
    width: 100%;
    display: block;
    border: 1px dashed var(--gray);
}

.post-text {
    padding: 4px 0 8px;
    font-size: 0.88rem;
    line-height: 1.65;
    color: #ccc;
}

.post-caption {
    padding-top: 4px;
    font-size: 0.82rem;
    line-height: 1.5;
    color: var(--gray);
}

.post-caption strong {
    color: var(--white);
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.03em;
}

/* Engagement row */
.engagement {
    display: flex;
    gap: 16px;
    padding: 10px 0 4px;
    font-size: 0.78rem;
    font-weight: 700;
    color: var(--red);
}

.eng-share {
    margin-left: auto;
    color: var(--gray);
}

/* Sponsored post overrides */
.post-card.sponsored {
    border-color: var(--red);
    position: relative;
}

.sponsored-badge {
    position: absolute;
    top: 0;
    right: 0;
    background: var(--red);
    color: var(--white);
    font-size: 0.6rem;
    font-weight: 900;
    padding: 3px 8px;
    letter-spacing: 0.15em;
}

.sponsored .avatar {
    background: var(--white);
    color: var(--bg);
}

.promoted-label {
    font-size: 0.68rem;
    color: var(--red);
    font-weight: 700;
}

.ad-copy {
    padding: 4px 0 8px;
    font-size: 0.88rem;
    line-height: 1.65;
    color: #ccc;
    text-transform: uppercase;
}

.ad-image {
    width: 100%;
    height: 120px;
    background: var(--dark);
    border: 1px dashed var(--red);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--red);
    font-size: 0.72rem;
}

.ad-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
}

.ad-url {
    font-size: 0.68rem;
    color: var(--gray);
}

.ad-cta {
    border: 2px solid var(--red);
    color: var(--red);
    font-size: 0.72rem;
    font-weight: 900;
    padding: 6px 16px;
    letter-spacing: 0.1em;
    background: transparent;
    cursor: pointer;
}

/* Commentary dividers */
.commentary {
    text-align: center;
    font-size: 0.68rem;
    color: var(--red);
    letter-spacing: 0.2em;
    padding: 12px 0;
}

.commentary.warning {
    border: 2px solid var(--red);
    padding: 10px;
    margin: -2px 0;
    font-weight: 900;
    letter-spacing: 0.1em;
    font-size: 0.72rem;
}

/* Bottom nav */
.bottom-nav {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    padding: 12px 20px;
    background: var(--bg);
    border-top: 2px solid var(--white);
}

.btn-back {
    font-family: var(--font);
    font-size: 0.78rem;
    font-weight: 800;
    color: var(--gray);
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    border: 2px solid var(--gray);
    padding: 8px 18px;
}

.btn-back:hover {
    color: var(--white);
    border-color: var(--white);
}

/* Sentinel (invisible, triggers infinite scroll) */
.sentinel {
    height: 1px;
}
```

- [ ] **Step 2: Verify the file saved correctly**

```bash
head -5 styles/page1.css
```

Expected: the `@import` line and the `*` reset.

- [ ] **Step 3: Commit**

```bash
git add styles/page1.css
git commit -m "Rewrite page1.css as brutalist theme"
```

---

### Task 3: Rewrite the HTML page

**Files:**
- Rewrite: `doomscrolling.html`

- [ ] **Step 1: Rewrite `doomscrolling.html`**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>keep scrolling</title>
    <link rel="stylesheet" href="styles/page1.css">
</head>
<body>
    <div class="feed" id="feed"></div>
    <div class="sentinel" id="sentinel"></div>

    <nav class="bottom-nav">
        <a href="index.html" class="btn-back">← BACK</a>
    </nav>

    <script src="random.js"></script>
</body>
</html>
```

- [ ] **Step 2: Open in browser and verify it loads without errors**

Open `doomscrolling.html` in a browser. The page should be black with a white-bordered bottom nav bar. The feed will be empty until we rewrite `random.js` in the next task.

- [ ] **Step 3: Commit**

```bash
git add doomscrolling.html
git commit -m "Rewrite doomscrolling.html with simplified brutalist markup"
```

---

### Task 4: Rewrite random.js — data arrays and utilities

**Files:**
- Rewrite: `random.js`

This task covers the data arrays and utility functions. The next tasks add post generation, ads, commentary, and infinite scroll on top.

- [ ] **Step 1: Write the data arrays and utility functions to `random.js`**

Replace the entire file contents with:

```javascript
/* ── Data ─────────────────────────────────────────────────── */

var imageArr = [
    "images/image1.png",  "images/image2.png",  "images/image3.png",
    "images/image4.png",  "images/image5.png",  "images/image6.png",
    "images/image7.png",  "images/image8.png",  "images/image9.png",
    "images/image10.png"
];

var sentencesArr = [
    "I honestly think doomscrolling is just a huge waste of time.",
    "You can start anywhere.",
    "In class, laying in bed, waiting for something, or just checking your phone for a second.",
    "Then somehow an hour is gone and you do not even know how it happened.",
    "Most of the time you do not notice it starting.",
    "It just kind of pulls you in.",
    "To me, doomscrolling is constantly looking through negative or dramatic stuff online, even when you know it is not really helping you.",
    "It is not always intentional either.",
    "Sometimes you are bored.",
    "Sometimes you are avoiding something.",
    "Sometimes it is just automatic.",
    "It feels addicting because apps are built to keep you there.",
    "TikTok, Instagram, Twitter, YouTube, they all have endless feeds.",
    "And now even apps that did not used to have that kind of layout are adding it.",
    "There is no real stopping point.",
    "The next post just loads.",
    "The next video just plays.",
    "You do not even have to press anything.",
    "On top of that, there is always that feeling like you might miss something if you stop.",
    "Even if it is not important, it feels important in the moment.",
    "That mix of endless content and curiosity makes it really easy to just keep going.",
    "For me, doomscrolling usually ends with regret.",
    "I tell myself I am just taking a quick break from homework, but that quick break turns into something way longer.",
    "At first it feels fine.",
    "Maybe even relaxing.",
    "But then it shifts.",
    "I start feeling stressed or annoyed at myself for wasting time.",
    "It goes from fun to frustrating without me really noticing when it changed.",
    "And I feel like a lot of people probably relate to that switch.",
    "It definitely messes with my productivity.",
    "Even when the content is not that interesting, I keep scrolling because maybe the next thing will be better.",
    "It completely breaks my focus.",
    "Then when I finally stop, it feels like my brain needs a minute to reset before I can actually get back into working mode.",
    "And if that keeps happening every day, it adds up.",
    "A few minutes here and there turns into hours over time.",
    "Not everyone doomscrolls the same way.",
    "Some people get pulled into dramatic or negative content faster, especially if they are already stressed.",
    "Other people can just close the app and move on.",
    "For me it kind of depends on how I am feeling that day.",
    "Sometimes I can stop easily.",
    "Other times I just keep going.",
    "So I do not think it is only about the apps.",
    "It is also about how you are feeling when you open them.",
    "It is hard to stop because everything feels personalized.",
    "The app learns what you like and keeps showing you more of it.",
    "So right when you are about to close it, something catches your attention again.",
    "It almost feels automatic after a while.",
    "There is no real ending, no final page, nothing that signals you are done.",
    "The feed just keeps going.",
    "And because of that, it always feels like there is one more thing worth seeing.",
    "Doomscrolling feels like a cycle.",
    "You start because you are bored or avoiding something.",
    "You stay because it is entertaining.",
    "You stop feeling guilty.",
    "Then the next day you do it again.",
    "It repeats, but it always feels slightly different because the posts and images change.",
    "That is what makes it tricky.",
    "It feels new every time, but it is really the same behavior over and over again."
];

var usernamesArr = [
    "@scrollqueen", "@notaddicttho", "@justonemore_fr", "@brainrot.exe",
    "@5moremin", "@cantputitdown", "@sendhelp_lol", "@touchgrass.never",
    "@procrastinator99", "@itsfineiswear", "@feedme.content", "@doomscroll.daily",
    "@nothingimportant", "@justchecking_", "@phonebrain2024", "@ugh.anyway"
];

var timeLabels = [
    "00:00:12 ago", "00:01:04 ago", "00:02:33 ago", "00:03:22 ago",
    "00:05:47 ago", "00:08:41 ago", "00:12:07 ago", "00:23:19 ago",
    "00:34:55 ago", "01:02:11 ago", "02:14:08 ago"
];

var brandsArr = [
    { name: "NOVAVEX LABS",      initials: "NVX", tagline: "ENGINEERED FOR PEAK PERFORMANCE.",           url: "novavex.com" },
    { name: "DRIFT APPAREL",     initials: "DFT", tagline: "WEAR THE VOID.",                            url: "driftapparel.co" },
    { name: "ZYNCO",             initials: "ZYN", tagline: "EVERYTHING. DELIVERED. NOW.",                url: "zynco.app" },
    { name: "PULSEWAVE",         initials: "PLW", tagline: "SOUND BEYOND LIMITS.",                      url: "pulsewave.io" },
    { name: "HEXACORE FITNESS",  initials: "HXC", tagline: "YOUR BODY IS SOFTWARE. UPDATE IT.",         url: "hexacore.fit" },
    { name: "LUMIVOX",           initials: "LMV", tagline: "SEE DIFFERENT.",                            url: "lumivox.com" },
    { name: "GRINDSET CO.",      initials: "GRD", tagline: "SLEEP IS OPTIONAL.",                        url: "grindset.co" },
    { name: "VOIDBOX",           initials: "VBX", tagline: "SUBSCRIBE TO EVERYTHING.",                  url: "voidbox.com" }
];

var commentarySubtle = [
    "POST {n} OF ∞"
];

var commentaryAware = [
    "YOU'VE SEEN {n} POSTS. NONE OF THEM MATTERED.",
    "POST {n}. STILL HERE?",
    "YOU HAVE SCROLLED PAST {n} POSTS AND RETAINED NOTHING.",
    "{n} POSTS DEEP. DO YOU EVEN REMEMBER THE FIRST ONE?",
    "POST {n}. THE ALGORITHM IS PLEASED."
];

var commentaryAggressive = [
    "⚠ YOU HAVE BEEN HERE FOR {t} MINUTES. THIS IS THE PROBLEM. ⚠",
    "⚠ CLOSE THE TAB. GO OUTSIDE. DO LITERALLY ANYTHING ELSE. ⚠",
    "⚠ THIS IS POST {n}. YOU WILL NOT REMEMBER A SINGLE ONE. ⚠",
    "⚠ THE ALGORITHM THANKS YOU FOR YOUR TIME. ⚠",
    "⚠ YOU JUST LOST ANOTHER MINUTE READING THIS WARNING AND KEPT SCROLLING ⚠",
    "⚠ {t} MINUTES GONE. YOU ARE THE PRODUCT. ⚠"
];

/* ── Utilities ────────────────────────────────────────────── */

function randomPick(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pickUnique(arr, count) {
    var pool = arr.slice();
    var result = [];
    var take = Math.min(count, pool.length);
    for (var i = 0; i < take; i++) {
        var idx = Math.floor(Math.random() * pool.length);
        result.push(pool.splice(idx, 1)[0]);
    }
    return result;
}

function formatLikes(n) {
    if (n >= 1000) return (n / 1000).toFixed(1) + "k";
    return String(n);
}
```

- [ ] **Step 2: Commit**

```bash
git add random.js
git commit -m "Rewrite random.js with data arrays and utilities for brutalist feed"
```

---

### Task 5: Add post generation functions to random.js

**Files:**
- Modify: `random.js` (append after utility functions)

- [ ] **Step 1: Append post generation functions to `random.js`**

Add the following at the end of `random.js`:

```javascript
/* ── Post Generation ──────────────────────────────────────── */

function makeRegularPost() {
    var username = randomPick(usernamesArr);
    var time = randomPick(timeLabels);
    var likes = getRandomInt(200, 94000);
    var comments = getRandomInt(10, 8000);
    var isImage = Math.random() < 0.35;

    var card = document.createElement("div");
    card.className = "post-card";

    // Header
    var header = document.createElement("div");
    header.className = "post-header";

    var avatar = document.createElement("div");
    avatar.className = "avatar";
    avatar.textContent = username.charAt(1).toUpperCase();

    var meta = document.createElement("div");
    meta.className = "post-meta";

    var nameSpan = document.createElement("span");
    nameSpan.className = "post-username";
    nameSpan.textContent = username;

    var timeSpan = document.createElement("span");
    timeSpan.className = "post-time";
    timeSpan.textContent = time;

    meta.appendChild(nameSpan);
    meta.appendChild(timeSpan);

    var dots = document.createElement("span");
    dots.className = "post-dots";
    dots.textContent = "•••";

    header.appendChild(avatar);
    header.appendChild(meta);
    header.appendChild(dots);
    card.appendChild(header);

    // Content
    if (isImage) {
        var img = document.createElement("img");
        img.className = "post-image";
        img.src = randomPick(imageArr);
        img.alt = "post";
        img.onerror = function() { card.remove(); };
        card.appendChild(img);
    } else {
        var textDiv = document.createElement("div");
        textDiv.className = "post-text";
        textDiv.textContent = pickUnique(sentencesArr, getRandomInt(2, 4)).join(" ");
        card.appendChild(textDiv);
    }

    // Engagement
    var engagement = document.createElement("div");
    engagement.className = "engagement";

    var likesSpan = document.createElement("span");
    likesSpan.className = "eng-item";
    likesSpan.textContent = "▲ " + formatLikes(likes);

    var commentsSpan = document.createElement("span");
    commentsSpan.className = "eng-item";
    commentsSpan.textContent = "■ " + formatLikes(comments);

    var shareSpan = document.createElement("span");
    shareSpan.className = "eng-item eng-share";
    shareSpan.textContent = "►";

    engagement.appendChild(likesSpan);
    engagement.appendChild(commentsSpan);
    engagement.appendChild(shareSpan);
    card.appendChild(engagement);

    // Caption (only for image posts)
    if (isImage) {
        var caption = document.createElement("div");
        caption.className = "post-caption";
        var strong = document.createElement("strong");
        strong.textContent = username;
        caption.appendChild(strong);
        caption.appendChild(document.createTextNode(" " + pickUnique(sentencesArr, getRandomInt(1, 2)).join(" ")));
        card.appendChild(caption);
    }

    return card;
}

function makeSponsoredPost() {
    var brand = randomPick(brandsArr);

    var card = document.createElement("div");
    card.className = "post-card sponsored";

    // Sponsored badge
    var badge = document.createElement("div");
    badge.className = "sponsored-badge";
    badge.textContent = "SPONSORED";
    card.appendChild(badge);

    // Header
    var header = document.createElement("div");
    header.className = "post-header";

    var avatar = document.createElement("div");
    avatar.className = "avatar";
    avatar.textContent = brand.initials;

    var meta = document.createElement("div");
    meta.className = "post-meta";

    var nameSpan = document.createElement("span");
    nameSpan.className = "post-username";
    nameSpan.textContent = brand.name;

    var promoted = document.createElement("span");
    promoted.className = "promoted-label";
    promoted.textContent = "PROMOTED";

    meta.appendChild(nameSpan);
    meta.appendChild(promoted);

    header.appendChild(avatar);
    header.appendChild(meta);
    card.appendChild(header);

    // Ad copy
    var copy = document.createElement("div");
    copy.className = "ad-copy";
    copy.textContent = brand.tagline;
    card.appendChild(copy);

    // Ad image placeholder
    var adImg = document.createElement("div");
    adImg.className = "ad-image";
    adImg.textContent = "[AD IMAGE]";
    card.appendChild(adImg);

    // Footer
    var footer = document.createElement("div");
    footer.className = "ad-footer";

    var url = document.createElement("span");
    url.className = "ad-url";
    url.textContent = brand.url;

    var cta = document.createElement("span");
    cta.className = "ad-cta";
    cta.textContent = "SHOP NOW ►";

    footer.appendChild(url);
    footer.appendChild(cta);
    card.appendChild(footer);

    return card;
}
```

- [ ] **Step 2: Commit**

```bash
git add random.js
git commit -m "Add regular and sponsored post generation functions"
```

---

### Task 6: Add commentary system to random.js

**Files:**
- Modify: `random.js` (append after post generation functions)

- [ ] **Step 1: Append commentary function to `random.js`**

Add the following at the end of `random.js`:

```javascript
/* ── Commentary System ────────────────────────────────────── */

var startTime = Date.now();

function getMinutesElapsed() {
    return Math.floor((Date.now() - startTime) / 60000);
}

function makeCommentary(postCount) {
    var el = document.createElement("div");
    var minutes = getMinutesElapsed();
    var template;

    if (postCount <= 15) {
        template = randomPick(commentarySubtle);
        el.className = "commentary";
    } else if (postCount <= 35) {
        template = randomPick(commentaryAware);
        el.className = "commentary";
    } else {
        template = randomPick(commentaryAggressive);
        el.className = "commentary warning";
    }

    var text = template
        .replace("{n}", String(postCount))
        .replace("{t}", String(minutes || 1));

    el.textContent = postCount <= 35
        ? "━━━ " + text + " ━━━"
        : text;

    return el;
}
```

- [ ] **Step 2: Commit**

```bash
git add random.js
git commit -m "Add escalating commentary system"
```

---

### Task 7: Add infinite scroll engine to random.js

**Files:**
- Modify: `random.js` (append after commentary system)

- [ ] **Step 1: Append the infinite scroll engine to `random.js`**

Add the following at the end of `random.js`:

```javascript
/* ── Infinite Scroll Engine ───────────────────────────────── */

var totalPosts = 0;
var postsSinceLastCommentary = 0;
var nextCommentaryAt = getRandomInt(4, 6);
var loading = false;

function generateBatch() {
    if (loading) return;
    loading = true;

    var feed = document.getElementById("feed");
    var batchSize = getRandomInt(5, 8);

    for (var i = 0; i < batchSize; i++) {
        // Check if commentary divider is due
        if (postsSinceLastCommentary >= nextCommentaryAt) {
            feed.appendChild(makeCommentary(totalPosts));
            postsSinceLastCommentary = 0;
            nextCommentaryAt = getRandomInt(4, 6);
        }

        // 10% chance of sponsored post
        if (Math.random() < 0.10) {
            feed.appendChild(makeSponsoredPost());
        } else {
            feed.appendChild(makeRegularPost());
        }

        totalPosts++;
        postsSinceLastCommentary++;
    }

    loading = false;
}

// Set up IntersectionObserver on the sentinel
var sentinel = document.getElementById("sentinel");
var observer = new IntersectionObserver(function(entries) {
    if (entries[0].isIntersecting) {
        generateBatch();
    }
}, { rootMargin: "200px" });

observer.observe(sentinel);

// Generate initial batch on page load
generateBatch();
```

- [ ] **Step 2: Open `doomscrolling.html` in a browser and verify**

- Page should show 5-8 brutalist-styled posts on load
- Scrolling down should auto-load more posts infinitely
- ~10% of posts should have red borders and "SPONSORED" badge
- Commentary dividers should appear every 4-6 posts
- Commentary should start subtle ("POST N OF ∞") and get aggressive after 36+ posts
- "← BACK" button should link to index.html

- [ ] **Step 3: Commit**

```bash
git add random.js
git commit -m "Add infinite scroll engine with IntersectionObserver"
```

---

### Task 8: Final verification and cleanup

- [ ] **Step 1: Verify no references to deleted stylesheets remain**

```bash
grep -r "page2\|page3\|page4\|page5\|page6\|page7" random.js doomscrolling.html
```

Expected: no output (no references to deleted files).

- [ ] **Step 2: Verify `doomscrolling.html` only links `page1.css`**

```bash
grep "stylesheet" doomscrolling.html
```

Expected: `<link rel="stylesheet" href="styles/page1.css">`

- [ ] **Step 3: Full browser test**

Open `doomscrolling.html` and verify:
1. Posts load on page open (5-8 posts)
2. Scrolling down loads more posts automatically
3. Posts have brutalist styling: black bg, white hard borders, square red avatars, monospace text
4. Engagement uses ▲ ■ ► icons in red
5. Sponsored posts appear with red border, "SPONSORED" badge, white avatar, "SHOP NOW ►" button
6. Commentary dividers appear every ~5 posts
7. After 36+ posts, commentary becomes aggressive warnings with red borders
8. "← BACK" link goes to index.html
9. No console errors

- [ ] **Step 4: Commit any fixes if needed, then final commit**

```bash
git add -A
git commit -m "Complete brutalist infinite scroll doomscrolling feed"
```
