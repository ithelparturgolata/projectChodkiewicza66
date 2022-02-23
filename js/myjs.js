/*global $, alert, console*/

/*
* ----------------------------------------------------------------------------------------
Author       : Ahmed Essam
Template Name: Eye-Look is a Personal Portfolio Template
Version      : 1.0
* ----------------------------------------------------------------------------------------
*/

$(document).ready(function () {

    'use strict';

    var $window = $(window);

    // Initialize collapse button for Side-Nav

    $(".button-collapse").sideNav({

        menuWidth: 300, // Default is 300
        edge: 'left', // Choose the horizontal origin
        closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
        draggable: true // Choose whether you can drag to open on touch screens

    });

    // Initialize Fullpage.js

    $('#fullpage').fullpage({


        sectionsColor: ['#FFF', '#FFF', '#FFF', '#FFF', '#FFF', '#FFF', '#FFF', '#FFF', '#FFF', '#FFF'],
        anchors: ['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7', 'p8', 'p9', 'p10'],
        navigation: true,
        menu: '#menu',
        lockAnchors: false,
        navigationPosition: 'right',
        navigationTooltips: ['HOME', 'INWESTYCJA', 'TECHNOLOGIA', 'RZUTY KONDYGNACJI', 'RZUTY MIESZKAŃ', 'HISTORIA', 'KONTAKT', 'MAPA', 'WIZUALIZACJA', 'WOLNE MIESZKANIA'],
        slidesNavigation: true,
        scrollBar: true,
        autoScrolling: false,
        animateAnchor: true,
		recordHistory: true,
        controlArrows: false,
        verticalCentered: true,
        // scrollingSpeed: 800,
        responsiveWidth: 980,
        fitToSection: false

    });


    //Scroll Down Icon In the Home Page
    $(document).on('click', '#moveDown', function () {
        $.fn.fullpage.moveSectionDown();
    });




    $('.counter-num').counterUp({

        delay: 15,
        time: 1000

    });


    // Initialize Skills Circle
    $(".circle-html").circliful({
        foregroundColor: '#1e88e5',
        animation: 1,
        animationStep: 5,
        foregroundBorderWidth: 4,
        backgroundBorderWidth: 8,
        percent: 90, //The Percent
        percentageTextSize: 20,
        percentageY: 105,
        percentageX: 100,
        animateInView: true
    });

    $(".circle-java").circliful({
        foregroundColor: '#1e88e5',
        animation: 1,
        animationStep: 5,
        foregroundBorderWidth: 4,
        backgroundBorderWidth: 8,
        percent: 80, //The Percent
        percentageTextSize: 20,
        percentageY: 105,
        percentageX: 100,
        animateInView: true
    });

    $(".circle-word").circliful({
        foregroundColor: '#1e88e5',
        animation: 1,
        animationStep: 5,
        foregroundBorderWidth: 4,
        backgroundBorderWidth: 8,
        percent: 70,
        percentageTextSize: 20,
        percentageY: 105,
        percentageX: 100,
        animateInView: true
    });

    $(".circle-php").circliful({
        foregroundColor: '#1e88e5',
        animation: 1,
        animationStep: 5,
        foregroundBorderWidth: 4,
        backgroundBorderWidth: 8,
        percent: 75,
        percentageTextSize: 20,
        percentageY: 105,
        percentageX: 100,
        animateInView: true
    });

    $(".circle-ang").circliful({
        foregroundColor: '#1e88e5',
        animation: 1,
        animationStep: 5,
        foregroundBorderWidth: 4,
        backgroundBorderWidth: 8,
        percent: 60,
        percentageTextSize: 20,
        percentageY: 105,
        percentageX: 100,
        animateInView: true
    });

    $(".circle-ui").circliful({
        foregroundColor: '#1e88e5',
        animation: 1,
        animationStep: 5,
        foregroundBorderWidth: 4,
        backgroundBorderWidth: 8,
        percent: 85,
        percentageTextSize: 20,
        percentageY: 105,
        percentageX: 100,
        animateInView: true
    });

    $(".circle-psd").circliful({
        foregroundColor: '#1e88e5',
        animation: 1,
        animationStep: 5,
        foregroundBorderWidth: 4,
        backgroundBorderWidth: 8,
        percent: 95,
        percentageTextSize: 20,
        percentageY: 105,
        percentageX: 100,
        animateInView: true
    });

    $(".circle-il").circliful({
        foregroundColor: '#1e88e5',
        animation: 1,
        animationStep: 5,
        foregroundBorderWidth: 4,
        backgroundBorderWidth: 8,
        percent: 90,
        percentageTextSize: 20,
        percentageY: 105,
        percentageX: 100,
        animateInView: true
    });

    $(".circle-il").circliful({
        foregroundColor: '#1e88e5',
        animation: 1,
        animationStep: 5,
        foregroundBorderWidth: 4,
        backgroundBorderWidth: 8,
        percent: 90,
        percentageTextSize: 20,
        percentageY: 105,
        percentageX: 100,
        animateInView: true
    });

    $(".circle-il").circliful({
        foregroundColor: '#1e88e5',
        animation: 1,
        animationStep: 5,
        foregroundBorderWidth: 4,
        backgroundBorderWidth: 8,
        percent: 90,
        percentageTextSize: 20,
        percentageY: 105,
        percentageX: 100,
        animateInView: true
    });

    // Initialize Magnific Popup

    // Carousel 1

    $('.parent-container-one').magnificPopup({

        type: 'image',
        tLoading: 'Loading image #%curr%...',
        removalDelay: 300,
        mainClass: 'mfp-with-zoom',
        midClick: true, // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
        gallery: {

            enabled: true
        },
        image: {

            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function (item) {


                return item.el.attr('title') + '<small>ID</small>';
            }

        },
        zoom: {

            enabled: true, // By default it's false, so don't forget to enable it

            duration: 300, // duration of the effect, in milliseconds
            easing: 'ease-in-out', // CSS transition easing function

                // The "opener" function should return the element from which popup will be zoomed in
                // and to which popup will be scaled down
                // By defailt it looks for an image tag:
            opener: function (openerElement) {
                  // openerElement is the element on which popup was initialized, in this case its <a> tag
                  // you don't need to add "opener" option if this code matches your needs, it's defailt one.

                return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
        }
    });


    // Carousel 2

    $('.parent-container-two').magnificPopup({

        type: 'image',
        tLoading: 'Loading image #%curr%...',
        removalDelay: 300,
        mainClass: 'mfp-with-zoom',
        midClick: true, // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
        gallery: {

            enabled: true
        },
        image: {

            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function (item) {


                return item.el.attr('title') + '<small>ID</small>';
            }

        },
        zoom: {

            enabled: true, // By default it's false, so don't forget to enable it

            duration: 300, // duration of the effect, in milliseconds
            easing: 'ease-in-out', // CSS transition easing function

                // The "opener" function should return the element from which popup will be zoomed in
                // and to which popup will be scaled down
                // By defailt it looks for an image tag:
            opener: function (openerElement) {
                  // openerElement is the element on which popup was initialized, in this case its <a> tag
                  // you don't need to add "opener" option if this code matches your needs, it's defailt one.

                return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
        }
    });


    // Carousel 3

    $('.parent-container-three').magnificPopup({

        type: 'image',
        tLoading: 'Loading image #%curr%...',
        removalDelay: 300,
        mainClass: 'mfp-with-zoom',
        midClick: true, // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
        gallery: {

            enabled: true
        },
        image: {

            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function (item) {


                return item.el.attr('title') + '<small>ID</small>';
            }

        },
        zoom: {

            enabled: true, // By default it's false, so don't forget to enable it

            duration: 300, // duration of the effect, in milliseconds
            easing: 'ease-in-out', // CSS transition easing function

                // The "opener" function should return the element from which popup will be zoomed in
                // and to which popup will be scaled down
                // By defailt it looks for an image tag:
            opener: function (openerElement) {
                  // openerElement is the element on which popup was initialized, in this case its <a> tag
                  // you don't need to add "opener" option if this code matches your needs, it's defailt one.

                return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
        }
    });

    // Carousel 4

    $('.parent-container-four').magnificPopup({

        type: 'image',
        tLoading: 'Loading image #%curr%...',
        removalDelay: 300,
        mainClass: 'mfp-with-zoom',
        midClick: true, // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
        gallery: {

            enabled: true
        },
        image: {

            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function (item) {


                return item.el.attr('title') + '<small>ID</small>';
            }

        },
        zoom: {

            enabled: true, // By default it's false, so don't forget to enable it

            duration: 300, // duration of the effect, in milliseconds
            easing: 'ease-in-out', // CSS transition easing function

                // The "opener" function should return the element from which popup will be zoomed in
                // and to which popup will be scaled down
                // By defailt it looks for an image tag:
            opener: function (openerElement) {
                  // openerElement is the element on which popup was initialized, in this case its <a> tag
                  // you don't need to add "opener" option if this code matches your needs, it's defailt one.

                return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
        }
    });

    // Carousel 5

    $('.parent-container-five').magnificPopup({

        type: 'image',
        tLoading: 'Loading image #%curr%...',
        removalDelay: 300,
        mainClass: 'mfp-with-zoom',
        midClick: true, // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
        gallery: {

            enabled: true
        },
        image: {

            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function (item) {


                return item.el.attr('title') + '<small>ID</small>';
            }

        },
        zoom: {

            enabled: true, // By default it's false, so don't forget to enable it

            duration: 300, // duration of the effect, in milliseconds
            easing: 'ease-in-out', // CSS transition easing function

                // The "opener" function should return the element from which popup will be zoomed in
                // and to which popup will be scaled down
                // By defailt it looks for an image tag:
            opener: function (openerElement) {
                  // openerElement is the element on which popup was initialized, in this case its <a> tag
                  // you don't need to add "opener" option if this code matches your needs, it's defailt one.

                return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
        }
    });

    // Carousel 6

    $('.parent-container-six').magnificPopup({

        type: 'image',
        tLoading: 'Loading image #%curr%...',
        removalDelay: 300,
        mainClass: 'mfp-with-zoom',
        midClick: true, // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
        gallery: {

            enabled: true
        },
        image: {

            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function (item) {


                return item.el.attr('title') + '<small>ID</small>';
            }

        },
        zoom: {

            enabled: true, // By default it's false, so don't forget to enable it

            duration: 300, // duration of the effect, in milliseconds
            easing: 'ease-in-out', // CSS transition easing function

                // The "opener" function should return the element from which popup will be zoomed in
                // and to which popup will be scaled down
                // By defailt it looks for an image tag:
            opener: function (openerElement) {
                  // openerElement is the element on which popup was initialized, in this case its <a> tag
                  // you don't need to add "opener" option if this code matches your needs, it's defailt one.

                return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
        }
    });

    // Carousel 7

    $('.parent-container-seven').magnificPopup({

        type: 'image',
        tLoading: 'Loading image #%curr%...',
        removalDelay: 300,
        mainClass: 'mfp-with-zoom',
        midClick: true, // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
        gallery: {

            enabled: true
        },
        image: {

            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function (item) {


                return item.el.attr('title') + '<small>ID</small>';
            }

        },
        zoom: {

            enabled: true, // By default it's false, so don't forget to enable it

            duration: 300, // duration of the effect, in milliseconds
            easing: 'ease-in-out', // CSS transition easing function

                // The "opener" function should return the element from which popup will be zoomed in
                // and to which popup will be scaled down
                // By defailt it looks for an image tag:
            opener: function (openerElement) {
                  // openerElement is the element on which popup was initialized, in this case its <a> tag
                  // you don't need to add "opener" option if this code matches your needs, it's defailt one.

                return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
        }
    });

    // Carousel 8

    $('.parent-container-eight').magnificPopup({

        type: 'image',
        tLoading: 'Loading image #%curr%...',
        removalDelay: 300,
        mainClass: 'mfp-with-zoom',
        midClick: true, // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
        gallery: {

            enabled: true
        },
        image: {

            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function (item) {


                return item.el.attr('title') + '<small>ID</small>';
            }

        },
        zoom: {

            enabled: true, // By default it's false, so don't forget to enable it

            duration: 300, // duration of the effect, in milliseconds
            easing: 'ease-in-out', // CSS transition easing function

                // The "opener" function should return the element from which popup will be zoomed in
                // and to which popup will be scaled down
                // By defailt it looks for an image tag:
            opener: function (openerElement) {
                  // openerElement is the element on which popup was initialized, in this case its <a> tag
                  // you don't need to add "opener" option if this code matches your needs, it's defailt one.

                return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
        }
    });


    // Initialize Model In Services Area
    $('.modal').modal();

    // Initialize carousel In Work Area
    $('.carousel').carousel();

    // Initialize MixItUP In Work Area
    $('#mixitup').mixItUp();


    // Initialize owlCarousel In Tes Area
    $('#customers-testimonials').owlCarousel({
        loop: true,
        items: 1,
        margin: 0,
        autoplay: true,
        nav: true,
        dots: false,
		autoHeight: true,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        navText: ['<i class="ion-chevron-left" aria-hidden="true"></i>', '<i class="ion-chevron-right" aria-hidden="true"></i>'],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1170: {
                items: 2
            }
        }
    });







    // Initialize loader
    $(window).on('load', function () {
        $('.loader-container').delay(1000).fadeOut(750);
    });


});
