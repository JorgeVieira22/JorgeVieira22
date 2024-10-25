let slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length - 1) {slideIndex = 0} 
  if (n < 0) {slideIndex = slides.length - 1} 
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex].style.display = "block";  
}

// Inicia o slideshow automaticamente a cada 2 segundos
let autoplay = setInterval(function(){plusSlides(1)}, 10000);

// Para pausar o slideshow ao passar o mouse sobre o container:
slideshowContainer.addEventListener('mouseover', function() {
  clearInterval(autoplay);
}

// Para reiniciar o slideshow ao tirar o mouse do container:
slideshowContainer.onmouseout = function(){
  autoplay = setInterval(function(){plusSlides(1)}, 10000);
}