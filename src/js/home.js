let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2500); // Change image every 2 seconds
}

// box chat
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