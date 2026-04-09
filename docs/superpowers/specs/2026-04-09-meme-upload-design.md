# Meme Upload Feature Design

## Overview

Allow anyone visiting the doomscrolling page to upload their own memes. Images are stored in Firebase Storage, metadata in Firestore. Uploaded memes get mixed into the infinite scroll feed alongside generated posts.

## Firebase Services

- **Firebase Storage** — stores uploaded meme image files in a `memes/` folder
- **Cloud Firestore** — stores meme metadata in a `memes` collection
- **No authentication** — anonymous uploads, anyone can post

### Firestore Document Schema (`memes` collection)

Each document contains:
- `imageUrl` (string) — public download URL from Firebase Storage
- `caption` (string) — optional caption text, can be empty
- `timestamp` (Firestore server timestamp) — when the meme was uploaded

### Firebase Storage Structure

- Path: `memes/{timestamp}_{randomId}.{extension}`
- Accepted file types: jpg, png, gif, webp
- Max file size: 5MB (enforced client-side)

## Config

Since this is a static site with no build step, Firebase config is hardcoded in `firebase-config.js`. The user fills in the values from their Firebase console.

`.env.example` serves as documentation listing which values are needed:
```
FIREBASE_API_KEY=
FIREBASE_AUTH_DOMAIN=
FIREBASE_PROJECT_ID=
FIREBASE_STORAGE_BUCKET=
FIREBASE_MESSAGING_SENDER_ID=
FIREBASE_APP_ID=
```

`firebase-config.js` initializes the Firebase app and exports references to Firestore and Storage. Uses Firebase v9+ compat SDK loaded via CDN (no build tools needed).

A `.gitignore` is added to exclude `.env` and other non-project files.

## Upload Flow

1. User clicks "ADD MEME" button in the bottom nav bar (next to existing buttons)
2. A modal overlay appears containing:
   - File input restricted to image types (jpg, png, gif, webp)
   - Optional caption text input
   - "UPLOAD" submit button
   - "X" close button in the top-right corner
3. Client-side validation: file must be an image, max 5MB
4. On submit:
   - Show a simple "Uploading..." state on the button (disable it)
   - Upload image to Firebase Storage at `memes/{timestamp}_{randomId}.{ext}`
   - Get the public download URL
   - Save document to Firestore `memes` collection with `imageUrl`, `caption`, `timestamp`
   - On success: close modal, insert the new meme as a post at the top of the feed
   - On error: show inline error message in the modal
5. Modal can be closed at any time by clicking X or clicking outside the modal

## Feed Integration

On page load in `random.js`:
- Fetch the 20 most recent memes from Firestore (ordered by `timestamp` desc, limit 20)
- Store them in a `userMemes` array
- During feed generation in `generateBatch()`, there is a chance (roughly 1 in 5 posts) to insert a user meme instead of a generated post
- User meme posts look like regular image posts but use the username "user upload" and have no engagement stats — just the image and optional caption
- Once all fetched memes have been shown, stop inserting them (don't repeat)

## Modal Design

Styled to match the doomscrolling page theme:
- Dark overlay background (`rgba(0,0,0,0.8)`)
- Dark modal card (`#1a1a1a`) with subtle border (`#2a2a2a`)
- Blue accent for the upload button and file input styling
- Inter font, consistent with rest of site
- Centered on screen, max-width 400px
- Responsive — works on mobile

## Files to Create/Modify

- **Create:** `.gitignore` — excludes `.env`, `node_modules/`, `.DS_Store`
- **Create:** `.env.example` — documents required Firebase config values
- **Create:** `firebase-config.js` — Firebase initialization, exports `db` and `storage` references
- **Create:** `upload.js` — modal open/close logic, file validation, Firebase Storage upload, Firestore save, feed insertion
- **Modify:** `doomscrolling.html` — add modal HTML markup, Firebase SDK script tags, script tags for `firebase-config.js` and `upload.js`, "ADD MEME" button in bottom nav
- **Modify:** `styles/doomscrolling.css` — modal overlay, modal card, form input, button styles
- **Modify:** `random.js` — fetch user memes from Firestore on load, mix into `generateBatch()` feed generation
