const page1 = document.getElementById("page1");
const slider = document.getElementById("slider");
let slides = document.querySelectorAll(".slide");

const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);

firstClone.id = "firstClone";
lastClone.id = "lastClone";

slider.prepend(lastClone);
slider.append(firstClone);


let index = 1;
const interval = 4000;

slider.style.transform = `translateX(-${index * 100}%)`;

const getSlides = () => document.querySelectorAll(".slide");

const moveToNextSlide = () => {
    console.log(index);
    slides = getSlides();
    if(index >= slides.length - 1) return;
    index++;
    slider.style.transform = `translateX(-${index * 100}%)`;
    slider.style.transition = "0.5s ease-out";
}

const moveToPrevSlide = () => {
    if(index <= 0) return;
    index--;
    slider.style.transform = `translateX(-${index * 100}%)`;
    slider.style.transition = "0.5s ease-out";
    console.log(index);
}

const startSliding = () => {
    setInterval(() => {
        moveToNextSlide();
    }, interval);
}

slider.addEventListener("transitionend",() => {
    slides = getSlides()
    if(slides[index].id === firstClone.id){
        slider.style.transition = "none";
        index = 1;
        slider.style.transform = `translateX(-${index * 100}%)`;
    }

    if(slides[index].id === lastClone.id){
        slider.style.transition = "none";
        index = slides.length - 2;
        slider.style.transform = `translateX(-${index * 100}%)`;
    }
})

nextBtn.addEventListener("click",moveToNextSlide);
prevBtn.addEventListener("click",moveToPrevSlide);

startSliding()



//icon animation

const icon_image = document.querySelectorAll(".icon_card img");
icon_image.forEach((icon) => {
    icon.addEventListener("mouseenter",() => {
        console.log("deepak");
        icon.style.cursor = "pointer";
        icon.style.animationName = "rotate360";
        icon.style.animationDuration = "1.5s";
        icon.style.animationDirection = "normal";
    })

    icon.addEventListener("mouseleave",() => {
        console.log("deepak");
        icon.style.cursor = "none";
        icon.style.animationName = "rotate0";
        icon.style.animationDirection = "reverse";
    })
})