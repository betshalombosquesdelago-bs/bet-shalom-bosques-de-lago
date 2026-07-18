const slides = document.querySelectorAll(".slide");

let current = 0;

function slider(){

    slides[current].classList.remove("active");

    current++;

    if(current >= slides.length){

        current = 0;

    }

    slides[current].classList.add("active");

}

setInterval(slider,5000);

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll(){

    const windowHeight = window.innerHeight;

    reveals.forEach(item=>{

        const top = item.getBoundingClientRect().top;

        if(top < windowHeight - 120){

            item.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();