
const slides = document.querySelectorAll(".slider img ");
const perv = document.querySelector(".Previous");
const next = document.querySelector(".next");
const imgId = document.querySelector(".slider-id");
const autoBtn = document.querySelector(".auto");
const stopBtn = document.querySelector(".stop");
const galleryOfImage = document.querySelector(".gallery");
galleryOfImage.style.gridTemplateColumns = `repeat(${slides.length} , 1fr)`;
let current = 0;
update();

let intervalId;

function auto() {
  intervalId = setInterval(() => {
    goToSlide(current + 1);
  }, 3000);
}
function stopAuto() {
  clearInterval(intervalId);

}
autoBtn.addEventListener("click", () => {
  auto();
});
stopBtn.addEventListener("click", () => {
  stopAuto();
})

//remove active
function update() {
  perv.disabled = current === 0;
  next.disabled = current === slides.length - 1;  //8
  imgId.innerHTML = `Image ${current + 1} of ${slides.length}`;
}
perv.addEventListener("click", () => {
  goToSlide(current - 1);
});
next.addEventListener("click", () => {
  goToSlide(current + 1);

});

function goToSlide(n) {
  slides[current].classList.remove("active");
  current = (n + slides.length) % slides.length;
  slides[current].classList.add("active");
  update();
  updateActive(current);


  // إضافة تأثيرات     

  slides[current].style.transform = "scale(0.5)";
  setTimeout(() => {
    slides[current].style.transform = "scale(1)";
  }, 500);
}

//clone Images
slides.forEach((img, index) => {
  const thumbnail = img.cloneNode();
  thumbnail.addEventListener("click", () => {
    goToSlide(index);
  });
  galleryOfImage.appendChild(thumbnail);
});

// update
function updateActive(index) {
  galleryOfImage.querySelectorAll("img").forEach((img, i) => {
    // img.classList.toggle("active" , true);  
    img.classList.toggle("active", i === index)
  }
  );

}








