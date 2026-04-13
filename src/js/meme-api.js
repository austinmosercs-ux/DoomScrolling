/* ── Meme API (SFW only) ─────────────────────────────────── */

const sfwSubreddits = ["wholesomememes", "memes", "me_irl"];
const memeQueue = [];
let memeFetching = false;

function fetchMemes() {
    if (memeFetching) return;
    memeFetching = true;
    const sub = sfwSubreddits[Math.floor(Math.random() * sfwSubreddits.length)];
    fetch("https://meme-api.com/gimme/" + sub + "/10")
        .then(function (res) { return res.json(); })
        .then(function (data) {
            if (data.memes) {
                data.memes.forEach(function (m) {
                    if (!m.nsfw && !m.spoiler && m.url) {
                        memeQueue.push({ url: m.url, title: m.title, author: m.author, ups: m.ups });
                    }
                });
            }
            memeFetching = false;
        })
        .catch(function () { memeFetching = false; });
}

function getMemeImage() {
    if (memeQueue.length < 4) fetchMemes();
    if (memeQueue.length > 0) return memeQueue.shift();
    return null;
}

// Pre-fetch on load
fetchMemes();
