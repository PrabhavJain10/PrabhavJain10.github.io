//This code is based on https://www.w3schools.com/howto/howto_js_quotes_slideshow.asp

var slideIndex = 1;
var colors = ["#1A4314", "#3F4122", "#3D550C"];
showSlides(slideIndex);
var cycle = setInterval(cycle, 5000);  //automatically change slide every 5 seconds


function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n, color) {
  var i;
  var slides = document.getElementsByClassName("my-slides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[slideIndex-1].style.display = "block";
  slides[slideIndex-1].style.background = colors[slideIndex-1];
  dots[slideIndex-1].className += " active";
}

function cycle(){
  showSlides(slideIndex += 1);
}
