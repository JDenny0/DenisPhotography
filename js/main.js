/*  ---------------------------------------------------
    Template Name: Dreams
    Description: Dreams wedding template
    Author: Colorib
    Author URI: https://colorlib.com/
    Version: 1.0
    Created: Colorib
---------------------------------------------------------  */

'use strict';
//        fetch(
// 					"https://live.staticflickr.com/65535/53864041190_cc3257394ff31d33",
// 				)
// 					.then((response) => {
// 						if (!response.ok) {
// 							throw new Error(
// 								"Network response was not ok " + response.statusText,
// 							);
// 						}
// 						return response.json(); // Parse the JSON from the response
// 					})
// 					.then((data) => {
// 						console.log(data); // Handle the data received from the API
// 					})
// 					.catch((error) => {
// 						console.error(
// 							"There has been a problem with your fetch operation:",
// 							error,
// 						);
// 					});

// const getRequestToken = async ()=> {
//     try {
//         await fetch(
// 					"https://www.flickr.com/services/oauth/request_token?oauth_nonce=89601180&oauth_timestamp=1305583298&oauth_consumer_key=653e7a6ecc1d528c516cc8f92cf98611&oauth_signature_method=HMAC-SHA1&oauth_version=1.0&oauth_callback=http%3A%2F%2Fwww.example.com",
// 					{
// 						mode: "no-cors",
// 						headers: {
// 							"Content-type": "application/json",
// 							"Access-Control-Allow-Origin": "http://127.0.0.1:5500",
// 							"Access-Control-Allow-Headers": "Origin, Content-Type, Accept",
// 						},
// 					},
// 				).then((response) => {
// 						if (!response.ok) {
// 							throw new Error(
// 								"Network response was not ok " + response.statusText,
// 							);
// 						}
// 						return response.json(); // Parse the JSON from the response
// 					})
// 					.then((data) => {
// 						console.log(data); // Handle the data received from the API
// 					})
// 					.catch((error) => {
// 						console.error(
// 							"There has been a problem with your fetch operation:",
// 							error,
// 						);
// 					});
               
//     } catch (error) {
//         console.log(error)
//     }
// }



(function ($) {

    /*------------------
        Preloader
    --------------------*/
    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");

        /*------------------
            Portfolio filter
        --------------------*/
         
       





        $('.portfolio__filter li').on('click', function () {
            $('.portfolio__filter li').removeClass('active');
            $(this).addClass('active');
        });
        if ($('.portfolio__gallery').length > 0) {
            var containerEl = document.querySelector('.portfolio__gallery');
            var mixer = mixitup(containerEl);
        }
    });
    

    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    //Masonary
    $('.work__gallery').masonry({
        itemSelector: '.work__item',
        columnWidth: '.grid-sizer',
        gutter: 10
    });

    /*------------------
		Navigation
	--------------------*/
    $(".mobile-menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true
    });

    /*------------------
		Hero Slider
	--------------------*/
    $('.hero__slider').owlCarousel({
        loop: true,
        dots: true,
        mouseDrag: false,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        items: 1,
        margin: 0,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
    });

    var dot = $('.hero__slider .owl-dot');
    dot.each(function () {
        var index = $(this).index() + 1;
        if (index < 10) {
            $(this).html('0').append(index);
        } else {
            $(this).html(index);
        }
    });

    /*------------------
        Testimonial Slider
    --------------------*/
    $(".testimonial__slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 3,
        dots: true,
        dotsEach: 2,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        responsive: {
            992: {
                items: 3
            },
            768: {
                items: 2
            },
            320: {
                items: 1
            }
        }
    });

    /*------------------
        Latest Slider
    --------------------*/
    $(".latest__slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 3,
        dots: true,
        dotsEach: 2,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        responsive: {
            992: {
                items: 3
            },
            768: {
                items: 2
            },
            320: {
                items: 1
            }
        }
    });

    /*------------------
        Logo Slider
    --------------------*/
    $(".logo__carousel").owlCarousel({
        loop: true,
        margin: 100,
        items: 6,
        dots: false,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        responsive: {
            992: {
                items: 5
            },
            768: {
                items: 4
            },
            480: {
                items: 3
            },
            320: {
                items: 2
            }
        }
    });

    /*------------------
        Video Popup
    --------------------*/
    $('.video-popup').magnificPopup({
        type: 'iframe'
    });

    /*------------------
        Counter
    --------------------*/
    $('.counter_num').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

})(jQuery);
 
  