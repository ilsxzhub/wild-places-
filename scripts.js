// Get DOM elements
const titleScreen = document.getElementById("title-screen");
const playButton = document.getElementById("play-button");
const island = document.getElementById("island");
const lamp = document.getElementById("lamp");
const combine = document.getElementById("combine");

// Load sounds
const lampSound = new Audio("sounds/lamp.mp3");
const combineSound = new Audio("sounds/combine.mp3");

// --- Title Screen Logic ---
playButton.addEventListener("click", () => {
  titleScreen.style.display = "none";
  island.style.display = "block";
});

// --- Clickable Structures ---
lamp.addEventListener("click", () => {
  lampSound.currentTime = 0;
  lampSound.play();
});

combine.addEventListener("click", () => {
  combineSound.currentTime = 0;
  combineSound.play();
});
