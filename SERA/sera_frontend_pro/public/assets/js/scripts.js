$(document).ready(function() {
    'use strict';

    $(".toggleBtn").on('click', function(e) {
        $(this).children('.fa-eye-slash, .fa-eye').toggleClass("fa-eye-slash fa-eye");
    });

    $('#timer').countdown('2023/09/25', function(event) {
        $(this).html(event.strftime('<div><span class="val">%D</span><span>days</span></div><div><span class="val">%H</span><span>hours</span></div> <div><span class="val">%M</span><span>minutes</span></div><div><span class="val">%S</span><span>seconds</span></div>'));
    });

    $('.navbar-toggler').click(function() {
        $('.navbar-collapse').toggleClass('active')
    })
})

AOS.init({
    once: true
});

function yomna_tm_preloader() {
    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;
    var preloader = $('#preloader');

    if (!isMobile) {
        setTimeout(function() {
            preloader.addClass('preloaded');
        }, 800);
        setTimeout(function() {
            preloader.remove();
        }, 2000);

    } else {
        preloader.remove();
    }
}

// -----------------------------------------------------
// -----------------   MY LOAD    ----------------------
// -----------------------------------------------------

function yomna_tm_my_load() {
    var speed = 500;
    setTimeout(function() { yomna_tm_preloader(); }, speed);
    setTimeout(function() { jQuery('body').addClass('loaded'); }, speed + 2000);
    setTimeout(function() { jQuery('.yomna_tm_down').addClass('loaded'); }, speed + 2000);
    setTimeout(function() { jQuery('.yomna_tm_topbar').addClass('loaded'); }, speed + 4200);
}

$(window).on('load', function() {
    yomna_tm_my_load();
});