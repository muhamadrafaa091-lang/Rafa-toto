
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

if (pointsDisplay) {
  pointsDisplay.textContent = points;
  }
// RAFA TOTO - SISTEM KATALOG DEMO



function openProvider(provider) {
  const data = providerGames[provider];

  if (!data) {
    alert("Katalog demo provider ini sedang disiapkan.");
    return;
  }

  document.getElementById("providers").style.display = "none";
  document.getElementById("gameCatalog").style.display = "block";

  document.getElementById("catalogTitle").textContent = data.title;

  const grid = document.getElementById("gameGrid");

  grid.innerHTML = data.games.map(game => `
    <div class="game-tile">
      <div class="game-art">🎮</div>
      <h3>${game}</h3>
      <button onclick="showDemoInfo('${game}')">
        LIHAT DEMO
      </button>
    </div>
  `).join("");
}

function closeCatalog() {
  document.getElementById("gameCatalog").style.display = "none";
  document.getElementById("providers").style.display = "block";
}

function showDemoInfo(name) {
  alert(name + " — Katalog hiburan demo RAFA TOTO.");
}

const providerGames = {
  pgsoft: {
    title: "PG SOFT",
    games: [
      "Mahjong Ways",
      "Mahjong Ways 2",
      "Fortune Tiger",
      "Fortune Ox",
      "Fortune Rabbit",
      "Lucky Neko",
      "Treasures of Aztec",
      "Wild Bandito"
    ]
  },

  pragmatic: {
    title: "PRAGMATIC PLAY",
    games: [
      "Sweet Bonanza",
      "Gates of Olympus",
      "Starlight Princess",
      "The Dog House",
      "Sugar Rush",
      "Big Bass Bonanza"
    ]
  },

  idnslot: {
    title: "IDNSLOT",
    games: [
      "Dragon Legend",
      "Golden Dragon",
      "Lucky Panda",
      "Mystic Fortune"
    ]
  },

  idnlottery: {
    title: "IDN E-LOTTERY",
    games: [
      "Lucky Number",
      "Daily Number",
      "Number Puzzle",
      "Lucky Draw"
    ]
  },

  slotmania: {
    title: "SLOTMANIA",
    games: [
      "Golden Adventure",
      "Magic Treasure",
      "Jungle Quest",
      "Diamond World"
    ]
  },

  habanero: {
    title: "HABANERO",
    games: [
      "Hot Hot Fruit",
      "Koi Gate",
      "Fa Cai Shen",
      "Wild Trucks",
      "Egyptian Dreams"
    ]
  }
};
    
