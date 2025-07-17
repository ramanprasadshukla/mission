const carousel = document.getElementById("carousel");
const slides = document.querySelectorAll(".slide");
const gameName = document.getElementById("gameName");
const toggleBtn = document.getElementById("toggleBtn");
let index = 0;
let playing = true;
let interval = setInterval(nextSlide, 3000);

function nextSlide() {
index = (index + 1) % slides.length;
carousel.style.transform = `translateX(-${index * 100}%)`;
gameName.textContent = slides[index].dataset.name;
}


function toggleCarousel() {
  if (playing) {
    clearInterval(interval);
    toggleBtn.textContent = "Play";
  } else {
    interval = setInterval(nextSlide, 3000);
    toggleBtn.textContent = "Pause";
  }
  playing = !playing;
}

window.onload = () => {
  slides.forEach((s, i) => {
    if (i !== 0) s.style.display = "block"; // ensure visible
  });
  carousel.style.display = "flex";
};
