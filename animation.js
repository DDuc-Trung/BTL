  /**Chuyển đổi giao diện */

/**giao diện */
function changeMode(){
  
  if (document.body.classList.contains('light')){
    document.body.classList.remove('light');
    document.body.classList.add('dark');
    
  }else{
    document.body.classList.remove('dark');
    document.body.classList.add('light');
  }
  /** 
  let arrowColor = window.getComputedStyle(document.body).backgroundColor;
  document.body.style.backgroundColor = arrowColor;
  document.getElementById('more-light').style.backgroundColor = arrowColor;
  */
}
/**đổi màu nền của more */


/** Slideshow*/
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

/**Khám phá ngay */


document.getElementById('discoverweb').addEventListener('click', function() {  
  const Slideshow = document.getElementById('Slideshow');
  Slideshow.scrollIntoView({ behavior: "smooth" });
});


