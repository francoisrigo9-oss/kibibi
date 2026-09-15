/* =========================
   NAVIGATION
========================= */

function showPage(pageId) {

    const pages = document.querySelectorAll(".page");

    pages.forEach(page => {
        page.classList.remove("active");
    });

    const page = document.getElementById(pageId);

    if (page) {
        page.classList.add("active");
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================
   CREATE POST
========================= */

function createPost() {

    const input = document.getElementById("postInput");

    const text = input.value.trim();

    if (text === "") {

        alert("Écris quelque chose avant de publier.");

        return;
    }

    const posts = document.getElementById("posts");

    const article = document.createElement("article");

    article.className = "post";

    article.innerHTML = `

        <div class="post-header">

            <img src="https://i.pravatar.cc/100?img=12">

            <div>

                <strong>Utilisateur</strong>

                <small>À l'instant</small>

            </div>

        </div>

        <p>${escapeHTML(text)}</p>

        <div class="post-actions">

            <button onclick="likePost(this)">
                ❤️ <span>0</span>
            </button>

            <button onclick="commentPost()">
                💬 Commenter
            </button>

            <button onclick="sharePost()">
                🔄 Partager
            </button>

        </div>
    `;

    posts.prepend(article);

    input.value = "";
}


/* =========================
   LIKE
========================= */

function likePost(button) {

    const span = button.querySelector("span");

    let number = parseInt(span.textContent);

    number++;

    span.textContent = number;

}


/* =========================
   COMMENT
========================= */

function commentPost() {

    const comment = prompt("Écris ton commentaire :");

    if (comment) {

        alert("Commentaire ajouté : " + comment);

    }

}


/* =========================
   SHARE
========================= */

function sharePost() {

    alert("Publication partagée 🔄");

}


/* =========================
   MESSAGE
========================= */

function sendMessage() {

    const input =
        document.getElementById("messageInput");

    const text =
        input.value.trim();

    if (!text) return;

    const messages =
        document.getElementById("chatMessages");

    const div =
        document.createElement("div");

    div.className = "message sent";

    div.textContent = text;

    messages.appendChild(div);

    input.value = "";

    messages.scrollTop = messages.scrollHeight;

}


/* =========================
   DARK MODE
========================= */

function toggleDarkMode() {

    document.body.classList.toggle("dark");

    localStorage.setItem(
        "darkMode",
        document.body.classList.contains("dark")
    );

}


/* =========================
   LOAD DARK MODE
========================= */

window.addEventListener("load", function() {

    const dark =
        localStorage.getItem("darkMode");

    if (dark === "true") {

        document.body.classList.add("dark");

    }

});


/* =========================
   SEARCH
========================= */

function searchContent() {

    const search =
        document
        .getElementById("searchInput")
        .value
        .toLowerCase();

    const posts =
        document.querySelectorAll(".post");

    posts.forEach(post => {

        const text =
            post.textContent.toLowerCase();

        if (text.includes(search)) {

            post.style.display = "";

        } else {

            post.style.display = "none";

        }

    });

}


/* =========================
   PHOTO
========================= */

function addPhoto() {

    alert(
        "La fonction d'envoi de photos sera connectée au backend dans la prochaine version."
    );

}


/* =========================
   SECURITY
========================= */

function escapeHTML(text) {

    const div =
        document.createElement("div");

    div.textContent = text;

    return div.innerHTML;

}


/* =========================
   PWA
========================= */

if ("serviceWorker" in navigator) {

    window.addEventListener("load", function() {

        navigator.serviceWorker
            .register("sw.js")
            .then(() => {

                console.log(
                    "Service Worker actif."
                );

            })
            .catch(error => {

                console.log(
                    "Erreur Service Worker:",
                    error
                );

            });

    });

}
