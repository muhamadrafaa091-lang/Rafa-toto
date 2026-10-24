
const pointsDisplay = document.getElementById("points");
const gameModal = document.getElementById("gameModal");
const gameTitle = document.getElementById("gameTitle");
const gameMessage = document.getElementById("gameMessage");

let points = 1000;

function showGames(category) {
  const cards = document.querySelectorAll(".game-card");

  cards.forEach(card => {
    if (
      category === "all" ||
      card.dataset.category === category
    ) {
      card.classList.remove("hidden");
    } else {
      card.classList.add("hidden");
    }
  });
}

function playGame(name) {
  gameTitle.textContent = name;
  gameMessage.textContent =
    "Selamat datang di " + name +
    "! Ini adalah permainan hiburan virtual gratis.";

  gameModal.style.display = "flex";
}

function closeGame() {
  gameModal.style.display = "none";
}

pointsDisplay.textContent = points;

