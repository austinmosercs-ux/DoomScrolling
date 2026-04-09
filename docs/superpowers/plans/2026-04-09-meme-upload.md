# Meme Upload Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Let anyone upload memes on the doomscrolling page, stored in Firebase, mixed into the infinite scroll feed.

**Architecture:** Firebase compat SDK loaded via CDN (no build tools). `firebase-config.js` initializes the app. `upload.js` handles the modal and upload logic. `random.js` fetches user memes from Firestore and mixes them into the feed.

**Tech Stack:** Firebase v9 compat SDK (CDN), Firebase Storage, Cloud Firestore, vanilla JS

---

## File Structure

- **Create:** `.env.example` — documents required Firebase config values
- **Create:** `firebase-config.js` — initializes Firebase app, exposes `firebase.firestore()` and `firebase.storage()`
- **Create:** `upload.js` — upload modal logic, file validation, Storage upload, Firestore save
- **Modify:** `doomscrolling.html` — add Firebase CDN scripts, modal HTML, new script tags, "ADD MEME" nav button
- **Modify:** `styles/doomscrolling.css` — modal and upload button styles
- **Modify:** `random.js` — fetch user memes from Firestore, mix into feed generation

---

### Task 1: Create .env.example and firebase-config.js

**Files:**
- Create: `.env.example`
- Create: `firebase-config.js`

- [ ] **Step 1: Create `.env.example`**

```
FIREBASE_API_KEY=your-api-key-here
FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
FIREBASE_PROJECT_ID=your-project-id
FIREBASE_STORAGE_BUCKET=your-project.appspot.com
FIREBASE_MESSAGING_SENDER_ID=your-sender-id
FIREBASE_APP_ID=your-app-id
```

- [ ] **Step 2: Create `firebase-config.js`**

```js
// Firebase configuration — fill these in from your Firebase console
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const storage = firebase.storage();
```

- [ ] **Step 3: Commit**

```bash
git add .env.example firebase-config.js
git commit -m "Add Firebase config template and initialization"
```

---

### Task 2: Add Firebase CDN scripts and modal HTML to doomscrolling.html

**Files:**
- Modify: `doomscrolling.html`

The current file is:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>keep scrolling</title>
    <link rel="stylesheet" href="styles/doomscrolling.css">
</head>
<body>
    <div class="feed" id="feed"></div>
    <div class="sentinel" id="sentinel"></div>

    <nav class="bottom-nav">
        <a href="index.html" class="btn-back">← HOME</a>
        <a href="endgoal.html" class="btn-back" style="margin-left: auto;">THE END GOAL →</a>
    </nav>

    <script src="random.js"></script>
</body>
</html>
```

- [ ] **Step 1: Add the "ADD MEME" button to the bottom nav**

In `doomscrolling.html`, replace:
```html
    <nav class="bottom-nav">
        <a href="index.html" class="btn-back">← HOME</a>
        <a href="endgoal.html" class="btn-back" style="margin-left: auto;">THE END GOAL →</a>
    </nav>
```

With:
```html
    <nav class="bottom-nav">
        <a href="index.html" class="btn-back">← HOME</a>
        <button id="add-meme-btn" class="btn-back btn-upload">+ ADD MEME</button>
        <a href="endgoal.html" class="btn-back" style="margin-left: auto;">THE END GOAL →</a>
    </nav>
```

- [ ] **Step 2: Add modal HTML before the nav**

Insert this block just before `<nav class="bottom-nav">`:
```html
    <!-- Upload Modal -->
    <div id="upload-modal" class="modal-overlay" style="display: none;">
        <div class="modal-card">
            <button id="modal-close" class="modal-close">✕</button>
            <h2 class="modal-title">Add a Meme</h2>
            <div class="modal-body">
                <label class="file-label" id="file-label">
                    Choose an image
                    <input type="file" id="meme-file" accept="image/jpeg,image/png,image/gif,image/webp" hidden>
                </label>
                <div id="file-name" class="file-name"></div>
                <input type="text" id="meme-caption" class="caption-input" placeholder="Caption (optional)" maxlength="200">
                <button id="upload-btn" class="upload-btn" disabled>UPLOAD</button>
                <div id="upload-error" class="upload-error"></div>
            </div>
        </div>
    </div>
```

- [ ] **Step 3: Add Firebase CDN scripts and new script tags**

Replace:
```html
    <script src="random.js"></script>
</body>
```

With:
```html
    <!-- Firebase SDK (compat) -->
    <script src="https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js"></script>
    <script src="https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore-compat.js"></script>
    <script src="https://www.gstatic.com/firebasejs/10.12.0/firebase-storage-compat.js"></script>

    <script src="firebase-config.js"></script>
    <script src="random.js"></script>
    <script src="upload.js"></script>
</body>
```

- [ ] **Step 4: Commit**

```bash
git add doomscrolling.html
git commit -m "Add upload modal HTML and Firebase CDN scripts"
```

---

### Task 3: Add modal and upload button CSS

**Files:**
- Modify: `styles/doomscrolling.css`

- [ ] **Step 1: Append modal styles to `styles/doomscrolling.css`**

Add to the end of the file (before the sentinel rule):

```css
/* Upload button */
.btn-upload {
    background: var(--accent);
    color: var(--bg);
    border-color: var(--accent);
    font-weight: 600;
    cursor: pointer;
    font-family: var(--font);
}

.btn-upload:hover {
    opacity: 0.85;
}

/* Modal overlay */
.modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.8);
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
}

.modal-card {
    background: var(--dark);
    border: 1px solid #2a2a2a;
    border-radius: 4px;
    padding: 28px;
    width: 100%;
    max-width: 400px;
    position: relative;
}

.modal-close {
    position: absolute;
    top: 12px;
    right: 14px;
    background: none;
    border: none;
    color: var(--gray);
    font-size: 1.2rem;
    cursor: pointer;
    font-family: var(--font);
}

.modal-close:hover {
    color: var(--white);
}

.modal-title {
    font-size: 1.1rem;
    font-weight: 600;
    color: #fff;
    margin-bottom: 20px;
}

.modal-body {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.file-label {
    display: block;
    padding: 12px;
    border: 1px dashed #444;
    border-radius: 4px;
    text-align: center;
    color: var(--gray);
    font-size: 0.85rem;
    cursor: pointer;
}

.file-label:hover {
    border-color: var(--accent);
    color: var(--accent);
}

.file-name {
    font-size: 0.78rem;
    color: var(--accent);
    min-height: 1em;
}

.caption-input {
    background: var(--bg);
    border: 1px solid #333;
    border-radius: 4px;
    padding: 10px 12px;
    color: var(--white);
    font-family: var(--font);
    font-size: 0.85rem;
}

.caption-input:focus {
    outline: none;
    border-color: var(--accent);
}

.upload-btn {
    background: var(--accent);
    color: var(--bg);
    border: none;
    border-radius: 4px;
    padding: 12px;
    font-family: var(--font);
    font-size: 0.85rem;
    font-weight: 600;
    cursor: pointer;
    letter-spacing: 0.05em;
}

.upload-btn:disabled {
    opacity: 0.4;
    cursor: not-allowed;
}

.upload-btn:not(:disabled):hover {
    opacity: 0.85;
}

.upload-error {
    font-size: 0.78rem;
    color: #ff6b6b;
    min-height: 1em;
}
```

- [ ] **Step 2: Commit**

```bash
git add styles/doomscrolling.css
git commit -m "Add modal and upload button styles"
```

---

### Task 4: Create upload.js

**Files:**
- Create: `upload.js`

- [ ] **Step 1: Create `upload.js` with full upload logic**

```js
(function () {
    const modal = document.getElementById("upload-modal");
    const openBtn = document.getElementById("add-meme-btn");
    const closeBtn = document.getElementById("modal-close");
    const fileInput = document.getElementById("meme-file");
    const fileLabel = document.getElementById("file-label");
    const fileNameEl = document.getElementById("file-name");
    const captionInput = document.getElementById("meme-caption");
    const uploadBtn = document.getElementById("upload-btn");
    const errorEl = document.getElementById("upload-error");

    const MAX_SIZE = 5 * 1024 * 1024; // 5MB

    // Open modal
    openBtn.addEventListener("click", function () {
        modal.style.display = "flex";
        errorEl.textContent = "";
    });

    // Close modal
    closeBtn.addEventListener("click", closeModal);
    modal.addEventListener("click", function (e) {
        if (e.target === modal) closeModal();
    });

    function closeModal() {
        modal.style.display = "none";
        fileInput.value = "";
        captionInput.value = "";
        fileNameEl.textContent = "";
        uploadBtn.disabled = true;
        uploadBtn.textContent = "UPLOAD";
        errorEl.textContent = "";
    }

    // File selection
    fileInput.addEventListener("change", function () {
        var file = fileInput.files[0];
        if (!file) {
            fileNameEl.textContent = "";
            uploadBtn.disabled = true;
            return;
        }
        if (file.size > MAX_SIZE) {
            errorEl.textContent = "File too large. Max 5MB.";
            fileInput.value = "";
            fileNameEl.textContent = "";
            uploadBtn.disabled = true;
            return;
        }
        errorEl.textContent = "";
        fileNameEl.textContent = file.name;
        uploadBtn.disabled = false;
    });

    // Upload
    uploadBtn.addEventListener("click", function () {
        var file = fileInput.files[0];
        if (!file) return;

        uploadBtn.disabled = true;
        uploadBtn.textContent = "UPLOADING...";
        errorEl.textContent = "";

        var ext = file.name.split(".").pop().toLowerCase();
        var fileName = Date.now() + "_" + Math.random().toString(36).substring(2, 8) + "." + ext;
        var ref = storage.ref("memes/" + fileName);

        ref.put(file).then(function (snapshot) {
            return snapshot.ref.getDownloadURL();
        }).then(function (url) {
            return db.collection("memes").add({
                imageUrl: url,
                caption: captionInput.value.trim(),
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            });
        }).then(function (docRef) {
            // Insert the new meme into the feed at the top
            var feed = document.getElementById("feed");
            var card = makeUserMemePost({
                imageUrl: URL.createObjectURL(file),
                caption: captionInput.value.trim()
            });
            feed.insertBefore(card, feed.firstChild);
            closeModal();
        }).catch(function (err) {
            errorEl.textContent = "Upload failed. Try again.";
            uploadBtn.disabled = false;
            uploadBtn.textContent = "UPLOAD";
        });
    });
})();
```

- [ ] **Step 2: Commit**

```bash
git add upload.js
git commit -m "Add upload modal logic and Firebase upload handling"
```

---

### Task 5: Modify random.js to fetch and display user memes

**Files:**
- Modify: `random.js`

- [ ] **Step 1: Add the `makeUserMemePost` function**

Add this function after the existing `makeSponsoredPost()` function (after line 371 in `random.js`):

```js
function makeUserMemePost(meme) {
    var card = document.createElement("div");
    card.className = "post-card";

    // Header
    var header = document.createElement("div");
    header.className = "post-header";

    var avatar = document.createElement("div");
    avatar.className = "avatar";
    avatar.textContent = "U";

    var meta = document.createElement("div");
    meta.className = "post-meta";

    var nameSpan = document.createElement("span");
    nameSpan.className = "post-username";
    nameSpan.textContent = "user upload";

    meta.appendChild(nameSpan);

    header.appendChild(avatar);
    header.appendChild(meta);
    card.appendChild(header);

    // Image
    var img = document.createElement("img");
    img.className = "post-image";
    img.src = meme.imageUrl;
    img.alt = "user meme";
    img.onerror = function () { card.remove(); };
    card.appendChild(img);

    // Caption
    if (meme.caption) {
        var caption = document.createElement("div");
        caption.className = "post-caption";
        var strong = document.createElement("strong");
        strong.textContent = "user upload";
        caption.appendChild(strong);
        caption.appendChild(document.createTextNode(" " + meme.caption));
        card.appendChild(caption);
    }

    return card;
}
```

- [ ] **Step 2: Add meme fetching and feed integration**

Add this block at the very end of `random.js`, after the `generateBatch();` call on the last line:

```js
/* ── User Meme Integration ───────────────────────────────── */

var userMemes = [];
var userMemeIndex = 0;

function loadUserMemes() {
    if (typeof db === "undefined") return;

    db.collection("memes")
        .orderBy("timestamp", "desc")
        .limit(20)
        .get()
        .then(function (snapshot) {
            snapshot.forEach(function (doc) {
                userMemes.push(doc.data());
            });
        })
        .catch(function () {
            // Firebase not configured yet — silently skip
        });
}

loadUserMemes();

// Patch generateBatch to mix in user memes
var _originalGenerateBatch = generateBatch;
generateBatch = function () {
    _originalGenerateBatch();

    // After each batch, maybe insert a user meme
    if (userMemeIndex < userMemes.length && Math.random() < 0.2) {
        var feed = document.getElementById("feed");
        var sentinel = document.getElementById("sentinel");
        var card = makeUserMemePost(userMemes[userMemeIndex]);
        feed.insertBefore(card, sentinel);
        userMemeIndex++;
    }
};
```

- [ ] **Step 3: Commit**

```bash
git add random.js
git commit -m "Add user meme display and Firestore feed integration"
```

---

### Task 6: Manual verification

- [ ] **Step 1: Verify without Firebase configured**

Open `doomscrolling.html` in a browser. Verify:
- The "ADD MEME" button appears in the bottom nav between HOME and THE END GOAL
- Clicking it opens the upload modal
- Modal can be closed by clicking X or clicking outside
- The feed still generates normally (no errors in console from missing Firebase config)

- [ ] **Step 2: Verify with Firebase configured**

After the user fills in `firebase-config.js` with real credentials:
- Upload a test image through the modal
- Verify it appears at the top of the feed
- Refresh the page — verify the uploaded meme appears mixed into the feed
- Check Firebase console — verify the image is in Storage under `memes/` and the document is in Firestore `memes` collection

- [ ] **Step 3: Commit any fixes**

```bash
git add -A
git commit -m "Fix issues found during verification"
```
