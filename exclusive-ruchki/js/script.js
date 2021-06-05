
var miniSwiper = new Swiper('.miniSwiper', {
    spaceBetween: 5,
    slidesPerView: 8,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
});

var swiper = new Swiper('.mySwiper', {
    preloadImages: false,
    lazy: true,
    loop: true,
    autoplay: {
        delay: 3000
    },
    allowTouchMove: true,
    touchEventsTarget: "container",
    mousewheelEventsTarged: "container",
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    thumbs: {
        swiper: miniSwiper
    }
});

$(document).ready(function () {
    $('a[href^="#"]').on("click", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;

        $('body,html').animate({ scrollTop: top }, 500);
    });
});

function ibg() {
    $.each($('._ibg'), function (index, val) {
        if ($(this).find('img').length > 0) {
            $(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
        }
    });
}

ibg();

$().fancybox({
    selector: '.mySwiper .swiper-slide:not(.swiper-slide-duplicate) a',
    backFocus: false,
    buttons: [
        'zoom',
        'thumbs',
        'close'
    ],
});

