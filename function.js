const portfolioImages = {
    maps: [
        {src: 'maps/gojo_upscaled_4k.png', alt: 'profilePic', class: 'map-example-pic'},
        {src: 'maps/infinity_upscaled_4k.png', alt: 'profilePic', class: 'map-example-pic'},
        {src: 'maps/dreamscape.png', alt: 'profilePic', class: 'map-example-pic'},
        {src: 'maps/grassLandsTower.png', alt: 'profilePic', class: 'map-example-pic'},
        {src: 'maps/sheriff_lobby.png', alt: 'profilePic', class: 'map-example-pic'},
        {src: 'maps/ruins.png', alt: 'profilePic', class: 'map-example-pic'},
        {src: 'maps/pixel.png', alt: 'profilePic', class: 'map-example-pic'},
        {src: 'maps/platform_thing.png', alt: 'profilePic', class: 'map-example-pic'},
    ],

    models: [
        {src: 'models/factory_supplies.png', alt: 'profilePic', class: 'map-example-pic'},
        {src: 'models/docs.png', alt: 'profilePic', class: 'map-example-pic'},
        {src: 'models/mudpatch.png', alt: 'profilePic', class: 'map-example-pic'},
        {src: 'models/characters.png', alt: 'profilePic', class: 'map-example-pic'},
        {src: 'models/fishing.png', alt: 'profilePic', class: 'map-example-pic'},
        {src: 'models/pixel_houses.png', alt: 'profilePic', class: 'map-example-pic'},
        {src: 'models/rocks.png', alt: 'profilePic', class: 'map-example-pic'},
        {src: 'models/buildings.png', alt: 'profilePic', class: 'map-example-pic'},
    ],

    coding: [
      
    ],
}

const games = [
  {
    placeID: 14528787574,
    name: "Parkour Champions",
    thumbnail: "gameThumbnails/parkourChampions.png",
    url: "https://www.roblox.com/games/14528787574/Parkour-Champions#!/about",
    visits: "2M+"
  },

  {
    placeID: 14528787574,
    name: "Avatar Outfit Creator",
    thumbnail: "gameThumbnails/avatarOutfit.png",
    url: "https://www.roblox.com/games/10810086665/Avatar-Outfit-Creator",
    visits: "235.1M+"
  },

  {
    placeID: 14349602942,
    name: "Noob Wars",
    thumbnail: "gameThumbnails/noobWars.png",
    url: "https://www.roblox.com/games/14349602942/Noob-Wars",
    visits: "2.2k+"
  },

  {
    placeID: 5284858705,
    name: "Challenge Masters",
    thumbnail: "gameThumbnails/challenge.png",
    url: "https://www.roblox.com/games/14349602942/Noob-Wars",
    visits: "9k+"
  },

  {
    placeID: 5284858705,
    name: "Superheros Vs Brainrots",
    thumbnail: "gameThumbnails/superheroesVsBrainrots.png",
    url: "https://www.roblox.com/games/90751265415909/Superheros-Vs-Brainrots",
    visits: "899.2k+"
  },
];

const videos = [
    {src: 'maps/dreamscape.png', alt: 'profilePic', class: 'map-example-pic'},
];

const buttons = [
    { btn: 'work-button', target: 'section-portfolio' },
    { btn: 'contact-button', target: 'section-contact' }
];

const portfolioButtons = [
    { btn: 'maps-button'},
    { btn: 'models-button'}
];


function setupSmoothScroll() {
  console.log("starting")
  buttons.forEach(p => {
    const btn = document.getElementById(p.btn);
    const target = document.getElementById(p.target);
    if (!btn || !target) return;
    console.log("set")
    btn.addEventListener('click', () => {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

function setupGameNavigation(trackId) {
  const track = document.getElementById(trackId);
  const prev = document.getElementById("prevGame");
  const next = document.getElementById("nextGame");

  if (!track || !prev || !next) return;

  const cardWidth = track.querySelector(".game-card")?.offsetWidth + 30 || 450;

  prev.addEventListener("click", () => {
    track.scrollBy({
      left: -cardWidth,
      behavior: "smooth"
    });
  });

  next.addEventListener("click", () => {
    track.scrollBy({
      left: cardWidth,
      behavior: "smooth"
    });
  });
}


document.addEventListener('DOMContentLoaded', setupSmoothScroll);

function setupPortfolioButtons() {
  buttons.forEach(p => {
    const btn = document.getElementById(p.btn);
    const container = document.getElementById('portfolio-content')
    if (!btn || !target) return;
    btn.addEventListener('click', () => {
      loadImagesInto()
    });
  });
}

function setupButtons(containerId) {
  const buttons = document.querySelectorAll(".examples-button");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const targetId = button.id;
      const images = portfolioImages[targetId];
      if (images) {
        loadImages(containerId, images);
      }
    });
  });
}

function formatVisits(num) {
  if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + "M+";
  if (num >= 1_000) return (num / 1_000).toFixed(1) + "K+";
  return num.toString();
}

function loadGames(containerId, gameArray) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = "";

  gameArray.forEach(game => {
    const card = document.createElement("a");
    card.className = "game-card";
    card.href = game.url;
    card.target = "_blank";

    card.innerHTML = `
      <img class="game-thumb" src="${game.thumbnail}" alt="${game.name}">
      <div class="game-info">
        <div>
          <div class="game-title">${game.name}</div>
          <div class="game-meta">
            ${formatVisits(game.visits)} Visits
          </div>
        </div>
        <div class="game-meta">
          <span class="dot"></span> Live
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}


function loadImages(containerId, imageArray) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = "";

  imageArray.forEach(imageConfig => {
    const img = document.createElement("img");
    img.src = imageConfig.src;
    img.classList.add(imageConfig.class);

    img.addEventListener("click", () => {
      openImageViewer(imageConfig.src);
    });

    container.appendChild(img);
  });
}

function openImageViewer(src) {
  const overlay = document.createElement("div");
  overlay.className = "image-overlay";

  const img = document.createElement("img");
  img.src = src;
  img.className = "image-overlay-img";

  // Prevent closing when clicking the image itself
  img.addEventListener("click", e => e.stopPropagation());

  overlay.addEventListener("click", () => {
    document.body.removeChild(overlay);
  });

  document.addEventListener("keydown", function escHandler(e) {
    if (e.key === "Escape") {
      overlay.remove();
      document.removeEventListener("keydown", escHandler);
    }
  });

  overlay.appendChild(img);
  document.body.appendChild(overlay);
}


function loadImages2(containerId, imageArray) {
  const container = document.getElementById(containerId);
  if (!container) return;

  // Clear all existing content
  container.innerHTML = "";

  // Create and append each image
  imageArray.forEach(imageConfig => {
    const img = document.createElement("img");
    img.src = imageConfig.src;
    img.classList.add(imageConfig.class);
    container.appendChild(img);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  loadImages("portfolio-content", portfolioImages.maps);

  loadGames("games-track", games);

  setupGameNavigation("games-track");

  setupButtons("portfolio-content");
});

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".timeline-btn");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetId = btn.dataset.target;
      const targetSection = document.getElementById(targetId);
      if (!targetSection) return;

      targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

});
