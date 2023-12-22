// JavaScript for image slider functionality (you can use a library like jQuery or write your own)
let slideIndex = 0;
const slides = document.getElementsByClassName("carousel-item");
showSlides();

function showSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; // Hide all images
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; } // Reset to first slide
  slides[slideIndex - 1].style.display = "block"; // Display the current slide
  setTimeout(showSlides, 2000); // Change image every 2 seconds (adjust as needed)
}

//contents

