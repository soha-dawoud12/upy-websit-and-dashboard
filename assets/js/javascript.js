// $().dropdown('toggle');
$('.dropdown-toggle').dropdown();

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})
// Get the current year for the copyright
$('#year').text(new Date().getFullYear());
$(document).ready(function(){

    $('body').css('paddingTop',$(' .header nav .navbar-nav').innerHeight());

    //smoth scroll
    $('.header nav .navbar-nav li a').click(function (e) {
        // e.preventDefault();
        $('html ,body').animate({
            scrollTop:$( '#' + $(this).data('scroll')).offset().top - 60
        },1000);


    });
    //add active
    $(' .header nav .navbar-nav li a').click(function () {
        $(this).addClass('active').parent().siblings().find('a').removeClass('active');

    });


    $(window).scroll(function () {

        $('.block').each(function() {
            if ($(window).scrollTop() > $(this).offset().top ){
                var blockID =$(this).attr('id');
                $(' .header nav .navbar-nav a').removeClass('active');

                $('.header nav .navbar-nav li a[data-scroll = "' + blockID +  '"]').addClass('active');

            }
        });



    });

    new Swiper('.swiper-1 .swiper-container', {


        slidesPerView: 4,
        // spaceBetween: 30,
        slidesPerGroup: 3,


        // init: false,
        pagination: {
            el: '.section-5 .swiper-pagination',
            clickable: true,

        },


        breakpoints: {

            375: {
                slidesPerView: 1,
                spaceBetween: 20,
                slidesPerGroup: 1,
            },
            480: {
                slidesPerView: 2,
                spaceBetween: 20,
                slidesPerGroup: 1,
            },
            640: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 6,
                spaceBetween: 20,
            },
        }
    });



    $(".down").click(function() {
        $('html, body').animate({
            scrollTop: $(".section-2").offset().top
        }, 1500);
    });


    new Swiper(' .testimonials .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 20,

        // autoplay: {
        //     delay: 2500,
        //     disableOnInteraction: false,
        // },

        lazy: true,
        pagination: {
            el: '.testimonials .swiper-pagination',
            clickable: true,
        },


    });





    /* 1. Visualizing things on Hover - See next part for action on click */
    $('#stars li').on('mouseover', function(){
        var onStar = parseInt($(this).data('value'), 10);
    // The star currently mouse on

    // Now highlight all the stars that's not after the current hovered star
        $(this).parent().children('li.star').each(function(e){
            if (e < onStar) {
                $(this).addClass('hover');
            }
            else {
                $(this).removeClass('hover');
            }
        });

    }).on('mouseout', function(){
        $(this).parent().children('li.star').each(function(e){
            $(this).removeClass('hover');
        });
    });


    /* 2. Action to perform on click */
    $('#stars li').on('click', function(){
        var onStar = parseInt($(this).data('value'), 10);
    // The star currently selected
        var stars = $(this).parent().children('li.star');

        for (i = 0; i < stars.length; i++) {
            $(stars[i]).removeClass('selected');
        }

        for (i = 0; i < onStar; i++) {
            $(stars[i]).addClass('selected');
        }

        // JUST RESPONSE (Not needed)
        var ratingValue = parseInt($('#stars li.selected').last().data('value'), 10);
        var msg = "";
        if (ratingValue > 1) {
            msg = "Thanks! You rated this " + ratingValue + " stars.";
        }
        else {
            msg = "We will improve ourselves. You rated this " + ratingValue + " stars.";
        }
        responseMessage(msg);

    });





    new Swiper('.swiper-classroom  .swiper-container', {


        // slidesPerView: 3.5,
        // spaceBetween: 30,
        // slidesPerGroup: 3,



        // init: false,
        // pagination: {
        //     el: '.section-5 .swiper-pagination',
        //     clickable: true,
        //
        // },


        breakpoints: {

            320: {
                slidesPerView: 1,
                spaceBetween: 15,
                slidesPerGroup: 1,
            },
            480: {
                slidesPerView: 2,
                spaceBetween: 20,
                slidesPerGroup: 1,
            },
            // 640: {
            //     slidesPerView: 3,
            //     spaceBetween: 20,
            // },
            768: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 3.2,
                spaceBetween: 1,
            },
        }
    });



    new Swiper('.say .swiper-container', {


        slidesPerView: 1,
        spaceBetween: 50,
        // slidesPerGroup: 3,


        // init: false,
        pagination: {
            el: '.say .swiper-pagination',
            clickable: true,

        },



    });

});


//

// $(document).ready(function(){
//     $('.styled-file-select input[type=file]').change(function(e){
//         $(this).parent('.styled-file-select').find('input[type=text]').val($(this).val().replace(/.*(\/|\\)/, ''));
//     })
// });