/* ── Post Generation ──────────────────────────────────────── */

function makeRegularPost() {
    const wantsImage = Math.random() >= 0.65;
    const meme = wantsImage ? getMemeImage() : null;
    const time = randomPick(timeLabels);
    const comments = getRandomInt(10, 8000);
    const isImage = meme !== null;
    const username = meme ? "@" + meme.author : randomPick(usernamesArr);
    const likes = meme ? meme.ups : getRandomInt(200, 94000);

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
        img.src = meme.url;
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
        const capText = meme.title || randomPick(randomCommentsArr);
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
