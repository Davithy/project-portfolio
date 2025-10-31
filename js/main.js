let slideIndex = 1;

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
  let slides = document.getElementsByClassName("slides");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const slideBack = document.getElementById("prevSlide");
  const slideNext = document.getElementById("nextSlide");
  const dropDown = document.querySelector(".dropbtn");

  if (slideBack && slideNext) {
    showSlides(slideIndex);

    slideBack.addEventListener('click', () => {
      plusSlides(-1);
    })

    slideNext.addEventListener('click', () => {
      plusSlides(1);
    })

    setInterval(function () {
      plusSlides(1);
    }, 5000);
  }

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
    
    dropDown.addEventListener('click', () => {
      dropDownNav();
    });
  }
});

function dropDownNav() {
  document.getElementById("dropdown-links").classList.toggle("show");
}

window.onclick = function (e) {
  if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("dropdown-links");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  } else {
    return;
  }
}

