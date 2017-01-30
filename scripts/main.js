var image = document.querySelector('.Container_Image'),
		imageLeft = document.querySelector('.Container_Image_Left'),
		bio = document.querySelector('.Container_Bio'),
		bioLeft = document.querySelector('.Container_Bio_Left'),
		button = document.querySelector('.Container_Button'),
		buttonLeft = document.querySelector('.Container_Button'),
		textButton = document.querySelector('#Text_Button'),
		textButtonLeft = document.querySelector('.Text_Button'),
		imgButton = document.querySelector('.Img_Button'),
		imgButtonLeft = document.querySelector('.Img_Button'),
		container = document.querySelector('.Container'),
		burger = document.querySelector('.Menu_Burger');

document.addEventListener("DOMContentLoaded", function(event) {
	if (window.matchMedia("(max-width: 800px)").matches){
		buttonIn();
	}
});

function transitionIn(){
	console.log("coucou");
	if (window.matchMedia("(min-width: 1200px)").matches){
		image.classList.add("-active");
		bio.classList.add("fadeOut");
		bio.style.animationDuration = "0.3s";
		buttonIn();
	}
}

function transitionInLeft(){
	console.log("wesh");
	if (window.matchMedia("(min-width: 1200px)").matches){
		imageLeft.classList.add("-active");
		bioLeft.classList.add("fadeOut");
		bioLeft.style.animationDuration = "0.3s";
		buttonInLeft();
	}
}

function buttonIn(){
	button.style.backgroundColor = "#191919";
	button.style.transition = "background-color 0.5s";
	textButton.style.color = "#FEFEFE";
	imgButton.src = "images/plus2.png";
}

function buttonInLeft(){
	buttonLeft.style.backgroundColor = "#191919";
	buttonLeft.style.transition = "background-color 0.5s";
	textButtonLeft.style.color = "#FEFEFE";
	imgButtonLeft.src = "images/plus2.png";
}

function transitionOut(){
	console.log("bye");
	if (window.matchMedia("(min-width: 1200px)").matches){
		image.classList.remove("-active");
		bio.classList.remove("fadeOut");
		bio.classList.add("fadeIn");
		bio.style.animationDuration = "1.5s";
		buttonOut()
	}
}

function transitionOutLeft(){
	console.log("bye");
	if (window.matchMedia("(min-width: 1200px)").matches){
		imageLeft.classList.remove("-active");
		bioLeft.classList.remove("fadeOut");
		bioLeft.classList.add("fadeIn");
		bioLeft.style.animationDuration = "1.5s";
		buttonOutLeft()
	}
}

function buttonOut(){
	button.style.backgroundColor = "transparent";
	button.style.transition = "background-color 0.2s";
	textButton.style.color = "#191919";
	imgButton.src = "images/plus.png";
}

function buttonOutLeft(){
	buttonLeft.style.backgroundColor = "transparent";
	buttonLeft.style.transition = "background-color 0.2s";
	textButtonLeft.style.color = "#191919";
	imgButtonLeft.src = "images/plus.png";
}

function openMenu(){
	container.style.display = "none";
	burger.style.display = "block";
}

function closeMenu(){
	burger.style.display = "none";
	container.style.display = "block";
}
