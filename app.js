```javascript
function showPage(id) {

    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    const page = document.getElementById(id);

    if (page) {
        page.classList.add("active");
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* CREER PUBLICATION */

function createPost() {

    const input = document.getElementById("postInput");
    const text = input.value.trim();

    if (!text) {
        alert("Écris quelque chose avant de publier.");
        return;
    }

    const posts = document.getElementById("posts");

    const article = document.createElement("article");

    article.className = "post";

    article.innerHTML = `
        <div class="post-head">

            <img src="https://i.pravatar.cc/100?img=12">

            <div>
                <strong>Vous</strong>
                <small>À l'instant</small>
            </div>

        </div>

        <p>${escapeHTML(text)}</p>

        <div class="post-info">
            ❤️ 0 &nbsp;&nbsp; 💬 0 commentaire
        </div>

        <div class="post-buttons">

            <button onclick="likePost(this)">
                ❤️ J'aime
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


/* LIKE */

function likePost(button) {

    button.classList.toggle("liked");

    if (button.classList.contains("liked")) {
        button.style.color = "#1877f2";
    } else {
        button.style.color = "";
    }
}


/* COMMENTAIRE */

function commentPost() {

    const text = prompt("Votre commentaire :");

    if (text && text.trim()) {
        alert("Commentaire ajouté !");
    }
}


/* PARTAGE */

function sharePost() {
    alert("Publication partagée sur Kibibi 🔄");
}


/* MESSAGE */

function sendMessage() {

    const input = document.getElementById("messageInput");

    const text = input.value.trim();

    if (!text) return;

    const messages =
        document.getElementById("chatMessages");

    const message =
        document.createElement("div");

    message.className = "sent";

    message.textContent = text;

    messages.appendChild(message);

    input.value = "";

    messages.scrollTop = messages.scrollHeight;
}


/* RECHERCHE */

function searchPosts() {

    const query =
        document.getElementById("searchInput")
        .value
        .toLowerCase()
        .trim();

    document.querySelectorAll("#posts .post")
        .forEach(post => {

            const content =
                post.textContent.toLowerCase();

            post.style.display =
                content.includes(query)
                ? ""
                : "none";

        });
}


/* MODE SOMBRE */

function toggleDarkMode() {

    document.body.classList.toggle("dark");

    localStorage.setItem(
        "kibibi-dark",
        document.body.classList.contains("dark")
    );
}


if (localStorage.getItem("kibibi-dark") === "true") {
    document.body.classList.add("dark");
}


/* BOUTONS */

function choosePhoto() {
    alert("L'envoi de photos sera connecté au serveur dans la prochaine version.");
}

function chooseVideo() {
    alert("L'envoi de vidéos sera connecté au serveur dans la prochaine version.");
}

function addLocation() {
    alert("La localisation sera ajoutée dans la prochaine version.");
}


/* SECURITE */

function escapeHTML(text) {

    const div = document.createElement("div");

    div.textContent = text;

    return div.innerHTML;
}


/* PWA */

if ("serviceWorker" in navigator) {

    window.addEventListener("load", () => {

        navigator.serviceWorker.register("./sw.js")
            .then(() => {
                console.log("Kibibi PWA activée.");
            })
            .catch(error => {
                console.error("Erreur PWA :", error);
            });

    });
}
```
