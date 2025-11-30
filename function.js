const portfolioImages = {
    maps: [
        {src: 'maps/dreamscape.png', alt: 'profilePic', class: 'map-example-pic'},
        {src: 'maps/grassLandsTower.png', alt: 'profilePic', class: 'map-example-pic'},
        {src: 'maps/pixel.png', alt: 'profilePic', class: 'map-example-pic'},
        {src: 'maps/platform_thing.png', alt: 'profilePic', class: 'map-example-pic'},
        {src: 'maps/samurai.png', alt: 'profilePic', class: 'map-example-pic'},
        {src: 'maps/sheriff_lobby.png', alt: 'profilePic', class: 'map-example-pic'},
        {src: 'maps/ruins.png', alt: 'profilePic', class: 'map-example-pic'},
        {src: 'maps/pixel_world.png', alt: 'profilePic', class: 'map-example-pic'},
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

function loadImages(containerId, imageArray) {
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
