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
