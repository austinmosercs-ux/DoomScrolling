(function () {
    const modal = document.getElementById("upload-modal");
    const openBtn = document.getElementById("add-meme-btn");
    const closeBtn = document.getElementById("modal-close");
    const fileInput = document.getElementById("meme-file");
    const fileNameEl = document.getElementById("file-name");
    const captionInput = document.getElementById("meme-caption");
    const uploadBtn = document.getElementById("upload-btn");
    const errorEl = document.getElementById("upload-error");

    let MAX_SIZE = 5 * 1024 * 1024; // 5MB

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
        let file = fileInput.files[0];
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
        let file = fileInput.files[0];
        if (!file) return;

        uploadBtn.disabled = true;
        uploadBtn.textContent = "UPLOADING...";
        errorEl.textContent = "";

        let ext = file.name.split(".").pop().toLowerCase();
        let fileName = Date.now() + "_" + Math.random().toString(36).substring(2, 8) + "." + ext;
        let ref = storage.ref("memes/" + fileName);

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
            let feed = document.getElementById("feed");
            let card = makeUserMemePost({
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
