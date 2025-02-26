const track = document.querySelector(".track");
const slides = Array.from(track.children);
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const nav = document.querySelector(".carousel-nav");
const dots = Array.from(nav.children);

const slideSize = slides[0].getBoundingClientRect().width;
//arranging slides
// slides[0].style.left = 0;
// slides[1].style.left = slideSize + 'px';
// slides[2].style.left = slideSize * 2 + 'px';

const setSlidePosition = (slide, index) => {
    slide.style.left = slideSize * index + "px";
}

slides.forEach(setSlidePosition);

nextBtn.addEventListener("click", e => {
    const currentSlide = track.querySelector(".current-slide");
    const currentDot = nav.querySelector(".current-slide");
    let nextSlide = currentSlide.nextElementSibling;
    let nextDot = currentDot.nextElementSibling;

    if (!currentSlide.nextElementSibling || !currentDot.nextElementSibling) {
        nextSlide = slides[0];
        nextDot = dots[0];
    } 
        
    const amount = nextSlide.style.left;
    track.style.transform = `translateX(-${amount})`;
    currentSlide.classList.remove('current-slide');
    nextSlide.classList.add("current-slide");
    currentDot.classList.remove('current-slide');
    nextDot.classList.add('current-slide');

})

prevBtn.addEventListener("click", e => {
    const currentSlide = track.querySelector(".current-slide");
    let nextSlide = currentSlide.previousElementSibling;
    const currentDot = nav.querySelector(".current-slide");
    let nextDot = currentDot.previousElementSibling;

    if (!currentSlide.previousElementSibling || !currentDot.previousElementSibling
    ) {
        nextSlide = slides[slides.length - 1];
        nextDot =  dots[dots.length - 1]; 
    }

    const amount = nextSlide.style.left;
    track.style.transform = `translateX(-${amount})`;
    currentSlide.classList.remove('current-slide');
    nextSlide.classList.add("current-slide");
    currentDot.classList.remove('current-slide');
    nextDot.classList.add('current-slide');

})




