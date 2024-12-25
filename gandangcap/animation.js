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
let isFirstLoad = true;  // Biến kiểm tra lần gọi đầu tiên
showSlides2(slideIndexx);

function plusSlides2(n) {
  showSlides2(slideIndexx += n);
}

function currentSlide2(n) {
  showSlides2(slideIndexx = n);
  if (isFirstLoad) {
    isFirstLoad = false;  // Đánh dấu là đã thực hiện lần gọi đầu tiên
  }
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

  // Cuộn nếu là lần gọi đầu tiên hoặc người dùng đã thay đổi slide
  if (isFirstLoad || !isPageLoaded) {
    slidess[slideIndexx - 1].scrollIntoView({ behavior: "smooth" });
  }
}

// Đảm bảo không cuộn khi tải lại trang, nhưng vẫn cuộn khi người dùng tương tác
window.onload = function() {
  // Đảm bảo không cuộn nếu không phải lần gọi đầu tiên
  isPageLoaded = false;
};

document.getElementById('discoverweb').addEventListener('click', function() {  
  const Slideshow = document.getElementById('Slideshow');
  Slideshow.scrollIntoView({ behavior: "smooth" });
});

const searchInput = document.getElementById("search-text");
const items = document.querySelectorAll(".item");

searchInput.addEventListener("input", function () {
  const filter = searchInput.value.toLowerCase();

  // Kiểm tra nếu ô tìm kiếm có nội dung
  if (filter === "") {
    // Nếu không có nội dung tìm kiếm, ẩn tất cả các mục
    items.forEach((item) => {
      item.classList.remove("show");
    });
  } else {
    // Nếu có từ khoá tìm kiếm, chỉ hiển thị các mục phù hợp
    items.forEach((item) => {
      if (item.textContent.toLowerCase().includes(filter)) {
        item.classList.add("show"); // Hiển thị nếu khớp
      } else {
        item.classList.remove("show"); // Ẩn nếu không khớp
      }
    });
  }
});

// Ẩn ô tìm kiếm khi chọn mục
items.forEach((item) => {
  item.addEventListener("click", function () {
    searchInput.value = "";
    items.forEach((i) => i.classList.remove("show"));
  });
});