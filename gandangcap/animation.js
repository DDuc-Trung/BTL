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



let slideIndexx = 1;
let isPageLoaded = true;  // Biến đánh dấu xem trang đã tải xong hay chưa
showSlides2(slideIndexx);

function plusSlides2(n) {
  showSlides2(slideIndexx += n);
  isPageLoaded = false; // Đánh dấu rằng người dùng đã tương tác với slide
}

function currentSlide2(n) {
  showSlides2(slideIndexx = n);
  isPageLoaded = false; // Đánh dấu rằng người dùng đã tương tác với slide
}

function showSlides2(n) {
  let i;
  let slidess = document.getElementsByClassName("slide");

  // Kiểm tra và cập nhật slideIndexx nếu vượt ngoài giới hạn
  if (n > slidess.length) { slideIndexx = 1; }
  if (n < 1) { slideIndexx = slidess.length; }

  // Ẩn tất cả các slide
  for (i = 0; i < slidess.length; i++) {
    slidess[i].style.display = "none";
  }

  // Hiển thị slide hiện tại
  slidess[slideIndexx - 1].style.display = "block";

  // Chỉ cuộn nếu trang đã tải xong và người dùng đã tương tác
  if (!isPageLoaded) {
    slidess[slideIndexx - 1].scrollIntoView({ behavior: "smooth" });
  }
}

// Đảm bảo không cuộn khi tải lại trang
window.onload = function() {
  isPageLoaded = true; // Đánh dấu trang đã tải xong
};


document.getElementById('discoverweb').addEventListener('click', function() {  
  const Slideshow = document.getElementById('Slideshow');
  Slideshow.scrollIntoView({ behavior: "smooth" });
});





const searchInput = document.getElementById("search-text");
const items = document.querySelectorAll(".item");

searchInput.addEventListener("input", function () {
  const filter = searchInput.value.toLowerCase();
  items.forEach((item) => {
    // Kiểm tra xem mục có chứa từ khóa tìm kiếm không
    if (item.textContent.toLowerCase().includes(filter)) {
      item.classList.add("show"); // Hiển thị nếu khớp
    } else {
      item.classList.remove("show"); // Ẩn nếu không khớp
    }
  });
});

// Ẩn ô tìm kiếm khi chọn mục
items.forEach((item) => {
  item.addEventListener("click", function () {
    searchInput.value = "";
    items.forEach((i) => i.classList.remove("show"));
  });
});