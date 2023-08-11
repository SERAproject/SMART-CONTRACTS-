$(document).ready(function() {
    'use strict';
    $('.select2').select2();
    $('[data-bs-toggle="tooltip"]').tooltip();
    $('.datepicker').datepicker();

    $('#kt_aside_mobile_toggler').click(function() {
        $('.kt-aside').toggleClass('active')
    });
    $('#kt_header_toggler').click(function() {
        $('.kt-header__right').toggleClass('active')
    });
    $('#kt-megamenu_mobile_toggler').click(function() {
        $('.kt-header__left').toggleClass('active')
    });


    $('.mega-menu').parent('.dropdown').css({ 'position': 'initial' })


    $(document).on('click', function(event) {
        if (!$(event.target).closest('#kt_aside_mobile_toggler,.kt-asidet').length) {
            $('.kt-aside').removeClass('active');
        }
    });

    $(document).on('click', function(event) {
        if (!$(event.target).closest('#kt_header_toggler,.kt-header__right').length) {
            $('.kt-header__right').removeClass('active');
        }
    });

    $(document).on('click', function(event) {
        if (!$(event.target).closest('#kt-megamenu_mobile_toggler,.kt-header__left').length) {
            $('.kt-header__left').removeClass('active');
        }
    });

    if ($(window).width() < 992) {
        $('.mega-menu').addClass('show');
    }


    var form = $("#steps");
    form.steps({
        headerTag: "h3",
        bodyTag: "div",
        transitionEffect: "slideLeft",
        onStepChanging: function() {
            form.validate().settings.ignore = ":disabled,:hidden";
            return form.valid();
        },
        onFinishing: function() {
            form.validate().settings.ignore = ":disabled";
            return form.valid();
        },
        onFinished: function() {
            alert("Submitted!");
        },
    });


    $('.upload-file input[type=file]').on('change', function() {

        var filename = $('input[type=file]').val().replace(/C:\\fakepath\\/i, '')

        $('.filename').html(filename)
    })

})

AOS.init({
    once: true
});


// function yomna_tm_preloader() {
//     var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;
//     var preloader = $('#preloader');

//     if (!isMobile) {
//         setTimeout(function() {
//             preloader.addClass('preloaded');
//         }, 800);
//         setTimeout(function() {
//             preloader.remove();
//         }, 2000);

//     } else {
//         preloader.remove();
//     }
// }

// // -----------------------------------------------------
// // -----------------   MY LOAD    ----------------------
// // -----------------------------------------------------

// function yomna_tm_my_load() {
//     var speed = 500;
//     setTimeout(function() { yomna_tm_preloader(); }, speed);
//     setTimeout(function() { jQuery('body').addClass('loaded'); }, speed + 2000);
//     setTimeout(function() { jQuery('.yomna_tm_down').addClass('loaded'); }, speed + 2000);
//     setTimeout(function() { jQuery('.yomna_tm_topbar').addClass('loaded'); }, speed + 4200);
// }

// $(window).on('load', function() {
//     yomna_tm_my_load();
// });

Scrollbar.initAll();