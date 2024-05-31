let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("feature__mts");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "flex";
  dots[slideIndex-1].className += " active";
}

function ChatFunction() {
    const element = document.querySelector('.box__chat');
    element.classList.add('active__chat-box')
    const element1 = document.querySelector('.chat');
    element1.classList.add('active__fix-img')
}
function closeChat() {
    const element = document.querySelector('.box__chat')
    element.classList.remove('active__chat-box')
    const element1 = document.querySelector('.chat');
    element1.classList.remove('active__fix-img')
}

function openTableItem() {
  const element = document.querySelector('.engine__table')
  element.classList.toggle('active__table-item--des')
}
function openTableItem1() {
  const element = document.querySelector('.frame__table')
  element.classList.toggle('active__table-item--des')
}
function openTableItem2() {
  const element = document.querySelector('.size__table')
  element.classList.toggle('active__table-item--des')
}
function openTableItem3() {
  const element = document.querySelector('.guaranteed__table')
  element.classList.toggle('active__table-item--des')
}