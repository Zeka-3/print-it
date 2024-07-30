const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
let indexactuel = 0

const flechegoche = document.querySelector(".arrow_left")

const flechedroit = document.querySelector(".arrow_right")

const banerimg = document.querySelector(".banner-img")

const dots = document.querySelectorAll(".dot")

// on a créé un event listener , quand on clique sur la fleche droite on l'index plus 1 et on change de point (on va au prochain point)
flechedroit.addEventListener("click", function () {
	//alert("je clike sur la fleche droit")
	indexactuel = indexactuel + 1
	updateDots(indexactuel)
})

flechegoche.addEventListener("click", function () {
	//alert("je clik sur la fleche goche")
	indexactuel = indexactuel - 1
	updateDots(indexactuel)
})
//updatedots:Fonction pour mettre à jour les points
function updateDots(index) {
	dots.forEach((dot, i) => {
		if (i === index) {
			dot.classList.add("dot_selected")
		} else (
			dot.classList.remove("dot_selected")
		)
	})

}
function updateCarousel(index, direction) {

}