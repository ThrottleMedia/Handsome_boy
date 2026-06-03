
let found = 0;
const total = 15;

/* 15 IMPROVED QUOTES */
const quotes = [
"You have the most beautiful smile...I am genuinely crazy about it ❤️",
"You are an incredible, unforgettable person who leaves a mark everywhere you go ✨",
"You are unbelievably handsome, adorable, and have a heart of pure gold YOU ARE AMAZINGGGG💖",
"I am so thankful I got to meet you....you are a truly a very precious soul 🌹",
"I miss you so, so much… I just want to hug you so tightly ❤️",
"You are an amazing, fantastic, wonderful person in every possible way everrrr ✨",
"Your personality is rare, warm, and incredibly special and so incredible 💙",
"You make life feel brighter just by being in it ❤️",
"You are so incredibly kind, thoughtful, and caring — I am so lucky to know you 💖",
"You are one of the most amazing, special people I’ve ever met — I am so grateful to have you in my life 🌹",
"You make everything feel better just by being you — you are truly one of a kind and so deeply appreciated ❤️",
"You make me smile so incridibly much — you are such a special, wonderful person and I am so lucky to know you 💖",
"Thank you for the amazinggg person you are handsome !!!",
"You are one of the kindest, most genuine people I’ve ever known ✨",
"You are unforgettable — truly one of a kind and deeply appreciated 💖"
];

/* START */
document.getElementById("startBtn").onclick = () => {
document.getElementById("startPage").classList.remove("active");
document.getElementById("gamePage").classList.add("active");
createHearts();
startFX();
};

/* CREATE BIG HEARTS (SPACED OUT GRID) */
function createHearts() {
const grid = 

document.getElementById("heartGrid");

for (let i = 0; i < total; i++) {
let h = document.createElement("div");
h.className = "heart";
h.innerHTML = "❤️";

h.onclick = () => showQuote(h);

grid.appendChild(h);
}
}

/* POPUP ANIMATION TEXT */
function showQuote(el) {
if (el.clicked) return;
el.clicked = true;

el.style.opacity = 0.3;

const popup = document.getElementById("popup");
const text = document.getElementById("popupText");

let quote = quotes[Math.floor(Math.random() * quotes.length)];

popup.style.display = "block";
text.innerHTML = "";

let i = 0;
function type() {
if (i < quote.length) {
text.innerHTML += quote[i];
i++;
setTimeout(type, 25);
}
}
type();


setTimeout(() => popup.style.display = "none", 20000);

found++;
if (found === total) {
setTimeout(finalPage, 1400);
}
}

/* FINAL PAGE */
function finalPage() {
document.getElementById("gamePage").classList.remove("active");
document.getElementById("finalPage").classList.add("active");

typeFinal();
}

/* FINAL LETTER (YOUR MESSAGE) */
function typeFinal() {
const text =
`❤️ FINAL SURPRISE ❤️

Thank you, Thomas, for the incredible person you are!!! You are such an amazing, special person. I appreciate you so incredibly much. You are out of this world.

I am incredibly grateful for you and that you are in my life. I am so thankfull that I got to meet you and talk to you ❤️

I just wanted to tell you how incredibly special you are to me.

From the moment we started talking, you brought so much happiness into my life. You make everything feel lighter, warmer, and better.

You are unbelievably kind, incredibly handsome, 

ridiculously adorable, and someone I care about very deeply. YOU ARE SO AMAZINGGGG. THANK YOU FOR BEING YOU.

Thank you for your support, your laughter, your patience, and your presence in my life. I AM SO LUCKY TO HAVE YOU, I appreciate you so much ❤️

I can’t wait to see you again!!! I miss you so much 🥺❤️`;

let i = 0;
const box = document.getElementById("finalText");

function type() {
if (i < text.length) {
box.innerHTML += text[i];
i++;
setTimeout(type, 45);
}
}
type();

}

/* GLITTER + ROSES + HEARTS */
function startFX() {
const fx = document.getElementById("fx");

setInterval(() => {
const items = ["✨", "💖", "🌹"];
const el = document.createElement("div");

el.className = "fx";
el.innerHTML = items[Math.floor(Math.random() * items.length)];

el.style.left = Math.random() * 100 + "vw";
el.style.fontSize = (14 + Math.random() * 30) + "px";
el.style.animationDuration = (4 + Math.random() * 4) + "s";

fx.appendChild(el);

setTimeout(() => el.remove(), 7000);
}, 180);
}

document.getElementById("hugBtn").onclick = () => {
const message = "Sending you a big, warm hug right now! I cant wait to hug you again! I MISS YOU SO MUCH 🤗❤️";

const box =
document.getElementById("hugText");
box.innerHTML = "";

let i = 0;
function type() {
if (i < message.length) {
box.innerHTML += message[i];
i++;
setTimeout(type, 65);
}
}
type();
};






