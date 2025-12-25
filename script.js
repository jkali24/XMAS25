const emojis = ["🎄", "❄️", "🎁", "⭐", "🎅", "⛄"];
const container = document.querySelector(".emoji-rain");

function createEmoji() {
	const emoji = document.createElement("div");
	emoji.classList.add("emoji");
	emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];

	emoji.style.left = Math.random() * 100 + "vw";
	emoji.style.fontSize = Math.random() * 20 + 20 + "px";
	emoji.style.animationDuration = Math.random() * 3 + 4 + "s";

	container.appendChild(emoji);

	setTimeout(() => {
		emoji.remove();
	}, 7000);
}

setInterval(() => {
	for (let i = 0; i < 4; i++) {   
		createEmoji();
	}
}, 300);

const card = document.getElementById("card");
const music = document.getElementById("music");

let isOpen = false;
let musicStarted = false;

music.volume = 0.5;

card.addEventListener("click", () => {

	// 🔁 Abrir / cerrar carta
	if (!isOpen) {
		card.classList.add("open");
		isOpen = true;
	} else {
		card.classList.remove("open");
		isOpen = false;
	}

	// 🎵 Música SOLO la primera vez
	if (!musicStarted) {
		music.play().catch(() => {});
		musicStarted = true;
	}
});



