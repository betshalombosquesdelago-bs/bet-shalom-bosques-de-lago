//==================================================
// HERO SLIDER
//==================================================

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


//==================================================
// REVEAL ANIMATIONS
//==================================================

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

            observer.unobserve(entry.target);

        }

    });

},{
    threshold:.15
});

document.querySelectorAll(".animate").forEach(element=>{

    observer.observe(element);

});


//==================================================
// CARRUSEL DE EVENTOS
//==================================================

const sliderEvents = document.querySelector(".events-slider");

const btnNext = document.querySelector(".events-next");

const btnPrev = document.querySelector(".events-prev");

const card = document.querySelector(".event-card");

const gap = 30; // mismo gap del CSS

const scrollAmount = card.offsetWidth + gap;

btnNext.addEventListener("click",()=>{

    sliderEvents.scrollBy({

        left:scrollAmount,

        behavior:"smooth"

    });

});

btnPrev.addEventListener("click",()=>{

    sliderEvents.scrollBy({

        left:-scrollAmount,

        behavior:"smooth"

    });

});