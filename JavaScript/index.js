// LANDING PAGE SECTION
const signupCard = document.getElementById('signup-card');
const loginCard = document.getElementById('login-card');
const login = document.getElementById('login');
const signup = document.getElementById('signup');

signup.addEventListener('click', () => {
    if (signupCard.style.display= 'none') {
        signupCard.style.display= 'block';
    }
    if (loginCard.style.display= 'block') {
        loginCard.style.display= 'none';
    }
});

login.addEventListener('click', () => {
    if (loginCard.style.display= 'none') {
        loginCard.style.display= 'block';
    }
    if (signupCard.style.display= 'block') {
        signupCard.style.display= 'none';
    }
});
// END OF LANDING PAGE SECTION

// HOME PAGE SECTION

// NAVIGATION BAR
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    // document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
}
// END OF NAVIGATION BAR

// GALLERY - SNEAKERS
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
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
  captionText.innerHTML = dots[slideIndex-1].alt;
}
// END OF GALLERY

// END OF HOME PAGE SECTION

// HOW TO PURCHASE PAGE SECTION

// PURCHASING FORMS SECTION

// END OF PURCHASING FORMS SECTION

// END OF HOW TO PURCHASE PAGE SECTION