const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

//buttons
const preBtn = document.querySelector('#preBtn');
const nxtBtn = document.querySelector('#nxtBtn');

//counter
let counter = 1;
const size = carouselImages[0].clientWidth;
carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

//button listeners
nxtBtn.addEventListener('click',()=>{
    if(counter>= carouselImages.length -1) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' +(-size * counter) + 'px)';
});

preBtn.addEventListener('click',()=>{
    if (counter <=0) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' +(-size * counter) + 'px)';
});


carouselSlide.addEventListener('transitionend', () =>{
  
    if(carouselImages[counter].id ==='lastClone'){
        carouselSlide.style.transition = "none";
        counter = carouselImages.length -2;
        carouselSlide.style.transform = 'translateX(' +(-size * counter) + 'px)';
    }
    if(carouselImages[counter].id ==='firstClone'){
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});




// the search bar script
