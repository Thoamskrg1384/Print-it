// ---------
// Variables
// ---------
// Recupération des boutons du carroussel
const arrowRight = document.querySelector("#btnSliderNext");
const arrowLeft = document.querySelector("#btnSliderPrevious");
// Récupération de l'image et du texte des slides
const sliderImg = document.getElementById("sliderPicture");
const sliderContent = document.getElementById("sliderContent");
//  Récupération de la balise des dots du carroussel
const dots = document.getElementById("sliderDots");

// Compteur de slides du carroussel
let counterSlide = 0;

// Tableaux des différentes slides du carroussel
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

// ----------------------------
// Fonctionnement du carroussel
// ----------------------------

// Fonction générale d'affichage de la slide
function displaySlide() {
  const slide = slides[counterSlide];
  // Affichage de l'image de la slide
  sliderImg.setAttribute("src", `./assets/images/slideshow/${slide.image}`);
  // Affichage du texte de la slide
  sliderContent.innerHTML = `${slide.tagLine}`;
}

// Création des dots en fonction du nombre de slides
function createDots() {
  for (let i = 0; i < slides.length; i++) {
    const newDot = document.createElement("span");
    newDot.classList.add("dot");
    dots.append(newDot);
    // action au click sur les dots
    newDot.addEventListener("click", () => {
      counterSlide = i;
      displaySlide();
      updateDots();
    });
  }
}

// Remplissage du dot en fonction de la slide
function updateDots() {
  const allDots = document.querySelectorAll(".dot");
  allDots.forEach((dot, i) => {
    if (i === counterSlide) {
      dot.classList.add("dot_selected");
    } else {
      dot.classList.remove("dot_selected");
    }
  });
}

// Action au click sur le bouton de droite (slide suivante)
arrowRight.addEventListener("click", (e) => {
  counterSlide = counterSlide + 1;
  console.log(e.target);
  console.log("slide suivante");
  if (counterSlide > slides.length - 1) {
    counterSlide = 0;
  }
  displaySlide();
  updateDots();
});

// Action au click sur le bouton de gauche (slide précédente)
arrowLeft.addEventListener("click", (e) => {
  counterSlide = counterSlide - 1;
  console.log(e.target);
  console.log("slide précédente");
  if (counterSlide < 0) {
    counterSlide = slides.length - 1;
  }
  displaySlide();
  updateDots();
});

displaySlide();
createDots();
updateDots();
