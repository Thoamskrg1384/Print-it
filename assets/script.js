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
  const slide = slides[counterSlide]; // Prend l'indice de la slide actuelle "[0]" et récupère ses données à partir du tableau [slides]
  // Mise à jour de l'affichage de l'image de la slide
  sliderImg.setAttribute("src", `./assets/images/slideshow/${slide.image}`);
  // Mise à jour de l'affichage du texte de la slide
  sliderContent.innerHTML = `${slide.tagLine}`;
}

// Création des dots en fonction du nombre de slides dans le carroussel
function createDots() {
  for (let i = 0; i < slides.length; i++) {
    const newDot = document.createElement("span");
    newDot.classList.add("dot");
    dots.append(newDot);
    // permet le changement de la slide au click sur le dot
    newDot.addEventListener("click", () => {
      counterSlide = i;
      displaySlide();
      updateDots();
    });
  }
}

// Remplissage du dot en fonction de la slide pour mettre en avant la slide affichée
function updateDots() {
  const allDots = document.querySelectorAll(".dot");
  allDots.forEach((dot, i) => {
    if (i === counterSlide) {
      // Appelle une classe css sur le dot sélectionné
      dot.classList.add("dot_selected");
    } else {
      dot.classList.remove("dot_selected"); // Et supprime la classe sur les autres dots
    }
  });
}

// Action au click sur le bouton de droite (slide suivante) pour mettre à jour l'indice de la slide et afficher la suivante
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

// Action au click sur le bouton de gauche (slide précédente) pour mettre à jour l'indice de la slide et afficher la précédente
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
