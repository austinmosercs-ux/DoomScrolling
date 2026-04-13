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

// Generate first post, then start batches
const feed = document.getElementById("feed");
feed.appendChild(makeRegularPost());
totalPosts++;
postsSinceLastCommentary++;

generateBatch();
