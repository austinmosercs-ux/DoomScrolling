const stylesArr = [
    "styles/page1.css",
    "styles/page2.css",
    "styles/page3.css",
    "styles/page4.css",
    "styles/page5.css",
    "styles/page6.css",
    "styles/page7.css"
];

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

const nextBtnLabels = [
    "keep scrolling ↓",
    "just one more ↓",
    "you can stop anytime ↓",
    "last one i promise ↓",
    "okay this is actually the last one ↓",
    "fr this time ↓",
    "lmaooo you're still here ↓",
    "it's been how long?? ↓",
    "no judgment ↓",
    "we've all been there ↓",
    "one more won't hurt ↓",
    "you were just about to stop ↓"
];

const timeLabels = [
    "just now", "1m ago", "2m ago", "3m ago", "5m ago",
    "8m ago", "12m ago", "23m ago", "34m ago", "1h ago", "2h ago"
];

let nextBtnIndex = 0;


function randomizer(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pickUnique(arr, count) {
    const pool = [...arr];
    const result = [];
    const take = Math.min(count, pool.length);
    for (let i = 0; i < take; i++) {
        const idx = Math.floor(Math.random() * pool.length);
        result.push(pool.splice(idx, 1)[0]);
    }
    return result;
}

function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function formatLikes(n) {
    if (n >= 1000) return (n / 1000).toFixed(1) + 'k';
    return String(n);
}

function makePostCard(post) {
    const card = document.createElement('div');
    card.className = 'post-card';

    const likes    = getRandomInt(200, 94000);
    const comments = getRandomInt(10, 8000);
    const username = randomizer(usernamesArr);
    const time     = randomizer(timeLabels);

    if (post.type === 'image') {
        card.innerHTML = `
            <div class="post-header">
                <div class="avatar">${username.charAt(1).toUpperCase()}</div>
                <div class="post-meta">
                    <span class="post-username">${username}</span>
                    <span class="post-time">${time}</span>
                </div>
                <span class="post-dots">•••</span>
            </div>
            <img class="post-image" src="${post.src}" alt="post" onerror="this.closest('.post-card').remove()">
            <div class="engagement">
                <span class="eng-item">❤️ ${formatLikes(likes)}</span>
                <span class="eng-item">💬 ${formatLikes(comments)}</span>
                <span class="eng-item eng-share">↗</span>
            </div>
            <div class="post-caption"><strong>${username}</strong> ${post.caption}</div>
        `;
    } else {
        card.innerHTML = `
            <div class="post-header">
                <div class="avatar">${username.charAt(1).toUpperCase()}</div>
                <div class="post-meta">
                    <span class="post-username">${username}</span>
                    <span class="post-time">${time}</span>
                </div>
                <span class="post-dots">•••</span>
            </div>
            <div class="post-text">${post.text}</div>
            <div class="engagement">
                <span class="eng-item">❤️ ${formatLikes(likes)}</span>
                <span class="eng-item">💬 ${formatLikes(comments)}</span>
                <span class="eng-item eng-share">↗</span>
            </div>
        `;
    }

    return card;
}

function generatePage() {
    // Cycle next-button label
    const nextBtn = document.getElementById('next-btn');
    nextBtnIndex = (nextBtnIndex + 1) % nextBtnLabels.length;
    nextBtn.textContent = nextBtnLabels[nextBtnIndex];

    // Apply random theme
    document.getElementById('theme').href = randomizer(stylesArr);

    // Build posts: 3 image posts + 7 text posts, shuffled
    const posts = [];

    const imageCount = getRandomInt(2, 4);
    const textCount = getRandomInt(5, 9);

    const selectedImages = pickUnique(imageArr, imageCount);
    selectedImages.forEach(function(src) {
        posts.push({
            type: 'image',
            src: src,
            caption: pickUnique(sentencesArr, getRandomInt(1, 2)).join(' ')
        });
    });

    for (let i = 0; i < textCount; i++) {
        posts.push({
            type: 'text',
            text: pickUnique(sentencesArr, getRandomInt(2, 4)).join(' ')
        });
    }

    const shuffled = shuffle(posts);

    const feed = document.getElementById('feed');
    feed.innerHTML = '';
    shuffled.forEach(function(post) {
        feed.appendChild(makePostCard(post));
    });

    window.scrollTo(0, 0);
}


generatePage();
