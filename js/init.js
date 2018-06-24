$('#sidebarCollapse').on('click', function () {
    $('#sidebar').toggleClass('active');
});

$(document).ready(function(){
    $('#gallery1').owlCarousel({
        nav: true,
        navText: ["←","→"],
        loop:true,
        items:1,
        margin:0,
        stagePadding:0,
        smartSpeed:450,
        autoHeight:true,
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:true,
        responsive:{
            0:{

            }
        }
    });
    $('#gallery2').owlCarousel({
        nav: true,
        navText: ["<span aria-label=\"Previous\">←</span>","<span aria-label=\"Next\">→</span>"],
        items:2,
        margin:50,
        stagePadding:0,
        smartSpeed:450,
        center: true,
        autoplay:false,
        autoHeight:true,
        responsive:{
            0:{
                items:1,
                center: false,
                nav: false,
                margin:0,
            },
            600:{
                items:2
            },
            1000:{
                items:2
            }
        }
    });

    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();
        $('#sidebarCollapse').click();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });
});
