/* ── Data ─────────────────────────────────────────────────── */

const imageArr = [
    "images/image1.png",  "images/image2.png",  "images/image3.png",
    "images/image4.png",  "images/image5.png",  "images/image6.png",
    "images/image7.png",  "images/image8.png",  "images/image9.png",
    "images/image10.png"
];

const sentencesArr = [
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

const usernamesArr = [
    "@scrollqueen", "@notaddicttho", "@justonemore_fr", "@brainrot.exe",
    "@5moremin", "@cantputitdown", "@sendhelp_lol", "@touchgrass.never",
    "@procrastinator99", "@itsfineiswear", "@feedme.content", "@doomscroll.daily",
    "@nothingimportant", "@justchecking_", "@phonebrain2024", "@ugh.anyway"
];

const randomCommentsArr = [
    "no way this is real lmaooo",
    "bro think he him 💀",
    "this is the content i signed up for",
    "why is this so accurate though",
    "im literally crying rn",
    "someone come get their mans",
    "i showed this to my mom and she blocked me",
    "this lives in my head rent free",
    "not me watching this for the 5th time",
    "the way i just spit out my coffee",
    "tag someone who needs to see this",
    "i feel personally attacked",
    "this has no business being this funny",
    "POV: you found the best post on the internet",
    "why does nobody talk about this",
    "ok but like actually though",
    "i cant unsee this now thanks",
    "this is criminally underrated",
    "adding this to my collection",
    "its giving main character energy",
    "the algorithm really said here you go",
    "i was today years old when i found out",
    "somebody explain this to me like im five",
    "bruh moment of the century",
    "this is peak internet right here",
    "how did i end up on this side of the feed",
    "im supposed to be sleeping rn",
    "one more post then im done i swear",
    "this hit different at 3am",
    "the fact that this exists is wild",
    "im not even gonna ask how you found this",
    "real ones know",
    "who gave you permission to post this",
    "this is so unhinged i love it",
    "putting my phone down after this... jk no im not",
    "the internet remains undefeated",
    "screenshotted and sent to the group chat",
    "this is my roman empire",
    "tell me why i just watched this 8 times",
    "honestly same",
    "touch grass immediately",
    "go outside challenge: impossible for you",
    "your screen time report is crying rn",
    "tell me you have no hobbies without telling me",
    "this is why nobody texts you back",
    "bro has never seen sunlight",
    "least chronically online person",
    "you posted this and thought it was a W?",
    "ratio + you fell off + go outside",
    "imagine having this much free time",
    "this is what zero social interaction does to someone",
    "log off. take a walk. drink water.",
    "your phone called. it wants a break from you.",
    "seek help immediately",
    "this aint the flex you think it is",
    "nobody asked but ok",
    "you really sat down and typed this huh",
    "the wifi password is go outside",
    "your ancestors didnt survive for this",
    "congrats this is the worst take ive seen today"
];

const timeLabels = [
    "00:00:12 ago", "00:01:04 ago", "00:02:33 ago", "00:03:22 ago",
    "00:05:47 ago", "00:08:41 ago", "00:12:07 ago", "00:23:19 ago",
    "00:34:55 ago", "01:02:11 ago", "02:14:08 ago"
];

const brandsArr = [
    { name: "NOVAVEX LABS",      initials: "NVX", tagline: "ENGINEERED FOR PEAK PERFORMANCE.",           url: "novavex.com" },
    { name: "DRIFT APPAREL",     initials: "DFT", tagline: "WEAR THE VOID.",                            url: "driftapparel.co" },
    { name: "ZYNCO",             initials: "ZYN", tagline: "EVERYTHING. DELIVERED. NOW.",                url: "zynco.app" },
    { name: "PULSEWAVE",         initials: "PLW", tagline: "SOUND BEYOND LIMITS.",                      url: "pulsewave.io" },
    { name: "HEXACORE FITNESS",  initials: "HXC", tagline: "YOUR BODY IS SOFTWARE. UPDATE IT.",         url: "hexacore.fit" },
    { name: "LUMIVOX",           initials: "LMV", tagline: "SEE DIFFERENT.",                            url: "lumivox.com" },
    { name: "GRINDSET CO.",      initials: "GRD", tagline: "SLEEP IS OPTIONAL.",                        url: "grindset.co" },
    { name: "VOIDBOX",           initials: "VBX", tagline: "SUBSCRIBE TO EVERYTHING.",                  url: "voidbox.com" }
];

const commentarySubtle = [
    "POST {n} OF ∞"
];

const commentaryAware = [
    "YOU'VE SEEN {n} POSTS. NONE OF THEM MATTERED.",
    "POST {n}. STILL HERE?",
    "YOU HAVE SCROLLED PAST {n} POSTS AND RETAINED NOTHING.",
    "{n} POSTS DEEP. DO YOU EVEN REMEMBER THE FIRST ONE?",
    "POST {n}. THE ALGORITHM IS PLEASED."
];

const commentaryAggressive = [
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
    const pool = arr.slice();
    const result = [];
    const take = Math.min(count, pool.length);
    for (let i = 0; i < take; i++) {
        const idx = Math.floor(Math.random() * pool.length);
        result.push(pool.splice(idx, 1)[0]);
    }
    return result;
}

function formatLikes(n) {
    if (n >= 1000) return (n / 1000).toFixed(1) + "k";
    return String(n);
}

/* ── Post Generation ──────────────────────────────────────── */

function makeRegularPost() {
    const username = randomPick(usernamesArr);
    const time = randomPick(timeLabels);
    const likes = getRandomInt(200, 94000);
    const comments = getRandomInt(10, 8000);
    const isImage = Math.random() < 0.35;

    const card = document.createElement("div");
    card.className = "post-card";

    // Header
    const header = document.createElement("div");
    header.className = "post-header";

    const avatar = document.createElement("div");
    avatar.className = "avatar";
    avatar.textContent = username.charAt(1).toUpperCase();

    const meta = document.createElement("div");
    meta.className = "post-meta";

    const nameSpan = document.createElement("span");
    nameSpan.className = "post-username";
    nameSpan.textContent = username;

    const timeSpan = document.createElement("span");
    timeSpan.className = "post-time";
    timeSpan.textContent = time;

    meta.appendChild(nameSpan);
    meta.appendChild(timeSpan);

    const dots = document.createElement("span");
    dots.className = "post-dots";
    dots.textContent = "•••";

    header.appendChild(avatar);
    header.appendChild(meta);
    header.appendChild(dots);
    card.appendChild(header);

    // Content
    if (isImage) {
        const img = document.createElement("img");
        img.className = "post-image";
        img.src = randomPick(imageArr);
        img.alt = "post";
        img.onerror = function() { card.remove(); };
        card.appendChild(img);
    } else {
        const textDiv = document.createElement("div");
        textDiv.className = "post-text";
        const useRandom = Math.random() < 0.5;
        textDiv.textContent = useRandom
            ? randomPick(randomCommentsArr)
            : pickUnique(sentencesArr, getRandomInt(2, 4)).join(" ");
        card.appendChild(textDiv);
    }

    // Caption (only for image posts, before engagement)
    if (isImage) {
        const caption = document.createElement("div");
        caption.className = "post-caption";
        const strong = document.createElement("strong");
        strong.textContent = username;
        caption.appendChild(strong);
        const capText = Math.random() < 0.5
            ? randomPick(randomCommentsArr)
            : pickUnique(sentencesArr, getRandomInt(1, 2)).join(" ");
        caption.appendChild(document.createTextNode(" " + capText));
        card.appendChild(caption);
    }

    // Engagement
    const engagement = document.createElement("div");
    engagement.className = "engagement";

    const likesSpan = document.createElement("span");
    likesSpan.className = "eng-item";
    likesSpan.textContent = "▲ " + formatLikes(likes);

    const commentsSpan = document.createElement("span");
    commentsSpan.className = "eng-item";
    commentsSpan.textContent = "■ " + formatLikes(comments);

    const shareSpan = document.createElement("span");
    shareSpan.className = "eng-item eng-share";
    shareSpan.textContent = "►";

    engagement.appendChild(likesSpan);
    engagement.appendChild(commentsSpan);
    engagement.appendChild(shareSpan);
    card.appendChild(engagement);

    return card;
}

function makeSponsoredPost() {
    const brand = randomPick(brandsArr);

    const card = document.createElement("div");
    card.className = "post-card sponsored";

    // Sponsored badge
    const badge = document.createElement("div");
    badge.className = "sponsored-badge";
    badge.textContent = "SPONSORED";
    card.appendChild(badge);

    // Header
    const header = document.createElement("div");
    header.className = "post-header";

    const avatar = document.createElement("div");
    avatar.className = "avatar";
    avatar.textContent = brand.initials;

    const meta = document.createElement("div");
    meta.className = "post-meta";

    const nameSpan = document.createElement("span");
    nameSpan.className = "post-username";
    nameSpan.textContent = brand.name;

    const promoted = document.createElement("span");
    promoted.className = "promoted-label";
    promoted.textContent = "PROMOTED";

    meta.appendChild(nameSpan);
    meta.appendChild(promoted);

    header.appendChild(avatar);
    header.appendChild(meta);
    card.appendChild(header);

    // Ad copy
    const copy = document.createElement("div");
    copy.className = "ad-copy";
    copy.textContent = brand.tagline;
    card.appendChild(copy);

    // Ad image placeholder
    const adImg = document.createElement("div");
    adImg.className = "ad-image";
    adImg.textContent = "[AD IMAGE]";
    card.appendChild(adImg);

    // Footer
    const footer = document.createElement("div");
    footer.className = "ad-footer";

    const url = document.createElement("span");
    url.className = "ad-url";
    url.textContent = brand.url;

    const cta = document.createElement("button");
    cta.className = "ad-cta";
    cta.textContent = "SHOP NOW ►";

    footer.appendChild(url);
    footer.appendChild(cta);
    card.appendChild(footer);

    return card;
}

/* ── Commentary System ────────────────────────────────────── */

const startTime = Date.now();

function getMinutesElapsed() {
    return Math.floor((Date.now() - startTime) / 60000);
}

function makeCommentary(postCount) {
    const el = document.createElement("div");
    const minutes = getMinutesElapsed();
    let template;

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

    const text = template
        .replace("{n}", String(postCount))
        .replace("{t}", String(minutes || 1));

    el.textContent = postCount <= 35
        ? "━━━ " + text + " ━━━"
        : text;

    return el;
}

/* ── Infinite Scroll Engine ───────────────────────────────── */

let totalPosts = 0;
let postsSinceLastCommentary = 0;
let nextCommentaryAt = getRandomInt(4, 6);
let loading = false;

function generateBatch() {
    if (loading) return;
    loading = true;

    const feed = document.getElementById("feed");
    const batchSize = getRandomInt(5, 8);

    for (let i = 0; i < batchSize; i++) {
        // Check if commentary divider is due
        if (postsSinceLastCommentary >= nextCommentaryAt) {
            feed.appendChild(makeCommentary(totalPosts));
            postsSinceLastCommentary = 0;
            nextCommentaryAt = getRandomInt(4, 6);
        }

        // 10% chance of sponsored post
        if (Math.random() < 0.1) {
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
const sentinel = document.getElementById("sentinel");
const observer = new IntersectionObserver(function(entries) {
    if (entries[0].isIntersecting) {
        generateBatch();
    }
}, { rootMargin: "200px" });

observer.observe(sentinel);

// Generate first post as an image post, then start batches
(function() {
    const feed = document.getElementById("feed");
    const username = randomPick(usernamesArr);
    const time = randomPick(timeLabels);
    const likes = getRandomInt(200, 94000);
    const comments = getRandomInt(10, 8000);

    const card = document.createElement("div");
    card.className = "post-card";

    const header = document.createElement("div");
    header.className = "post-header";

    const avatar = document.createElement("div");
    avatar.className = "avatar";
    avatar.textContent = username.charAt(1).toUpperCase();

    const meta = document.createElement("div");
    meta.className = "post-meta";

    const nameSpan = document.createElement("span");
    nameSpan.className = "post-username";
    nameSpan.textContent = username;

    const timeSpan = document.createElement("span");
    timeSpan.className = "post-time";
    timeSpan.textContent = time;

    meta.appendChild(nameSpan);
    meta.appendChild(timeSpan);

    const dots = document.createElement("span");
    dots.className = "post-dots";
    dots.textContent = "•••";

    header.appendChild(avatar);
    header.appendChild(meta);
    header.appendChild(dots);
    card.appendChild(header);

    const img = document.createElement("img");
    img.className = "post-image";
    img.src = randomPick(imageArr);
    img.alt = "post";
    img.onerror = function() { card.remove(); };
    card.appendChild(img);

    const caption = document.createElement("div");
    caption.className = "post-caption";
    const strong = document.createElement("strong");
    strong.textContent = username;
    caption.appendChild(strong);
    caption.appendChild(document.createTextNode(" " + pickUnique(sentencesArr, getRandomInt(1, 2)).join(" ")));
    card.appendChild(caption);

    const engagement = document.createElement("div");
    engagement.className = "engagement";

    const likesSpan = document.createElement("span");
    likesSpan.className = "eng-item";
    likesSpan.textContent = "▲ " + formatLikes(likes);

    const commentsSpan = document.createElement("span");
    commentsSpan.className = "eng-item";
    commentsSpan.textContent = "■ " + formatLikes(comments);

    const shareSpan = document.createElement("span");
    shareSpan.className = "eng-item eng-share";
    shareSpan.textContent = "►";

    engagement.appendChild(likesSpan);
    engagement.appendChild(commentsSpan);
    engagement.appendChild(shareSpan);
    card.appendChild(engagement);

    feed.appendChild(card);
    totalPosts++;
    postsSinceLastCommentary++;
})();

generateBatch();
