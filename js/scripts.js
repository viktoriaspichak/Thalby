$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        navText: [ '', ' ' ],
        autoplay:true,
        autoplayTimeout:2000,

        responsive:{
            0:{
                items:1
            },

            1000:{
                items:3
            }
        }
    });
    $( function() {
        $( "#accordion" ).accordion();
    } );
});

const openMobileMenuBtn = document.querySelector(".device-menu");
const headerMenu = document.querySelector(".header-nav");

openMobileMenuBtn.addEventListener("click", () => {
    if(openMobileMenuBtn.classList.contains("open")) {
        openMobileMenuBtn.classList.remove("open");
        headerMenu.classList.remove("active");
    } else {
        headerMenu.classList.add("active");
        openMobileMenuBtn.classList.add("open");
    }
})

