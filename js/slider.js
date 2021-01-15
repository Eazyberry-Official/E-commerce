/*
==================
Glide Js Carousel
==================
*/
const slider1 = document.getElementById("glide1")

/*
==================
Hero
*/
if(slider1){
    new Glide(slider1, {
        type: 'carousel',
        startAt: 0,
        autoplay: 2000,
        hoverpause: true,
        perView: 5,
        animationDuration: 800,
        animationTimingFunc: 'linear',
        breakpoint: {
            1200: {
                perView: 3,
            },
            768: {
                perView: 2,
            }
        },
    }).mount();
}
