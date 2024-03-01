const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

// Variables
const buttonSliderPrevious = document.querySelector("#btnSliderPrevious");
const buttonSliderNext = document.querySelector("#btnSliderNext");

const sliderImage = document.querySelector("#bannerImage");
const sliderContent = document.querySelector("#bannerContent");

const dots = document.querySelector(".dots");

let sliderCounter = 0;

/**
 * Affiche la slide en fonction de sliderCounter
 */
function displaySlide() {
  const slide = slides[sliderCounter];

  sliderImage.setAttribute("src", `assets/images/slideshow/${slide.image}`);
  sliderContent.innerHTML = slide.tagLine;
}

/**
 * Création de X dots en fonction du nombre de slides
 */
function createDots() {
  for (let i = 0; i < slides.length; i++) {
    const newNode = document.createElement("span");
    newNode.classList.add("dot");

    dots.append(newNode);

    newNode.addEventListener("click", () => {
      sliderCounter = i;
      displaySlide();
    });
  }
}

/**
 * Modifie l'affichage de la slide quand on clique sur le bouton précédent
 */
buttonSliderPrevious.addEventListener("click", () => {
  sliderCounter = sliderCounter - 1;

  if (sliderCounter < 0) {
    sliderCounter = slides.length - 1;
  }

  displaySlide();
});

/**
 * Modifie l'affichage de la slide quand on clique sur le bouton suivant
 */
buttonSliderNext.addEventListener("click", () => {
  sliderCounter = sliderCounter + 1;

  if (sliderCounter > slides.length - 1) {
    sliderCounter = 0;
  }

  displaySlide();
});

displaySlide();
createDots();
