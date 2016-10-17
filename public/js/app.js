'use strict';
$(function () {

 // Ajay request

    let form = $('#contactForm'),
        firstName = $('#input-firstName'),
        lastName = $('#input-lastName'),
        mail = $('#input-mail'),
        tel = $('#input-phone'),
        company = $('#input-company'),
        message_ok = $('.form__response--ok'),
        message_bad = $('.form__response--error');


    let addMe = () => {
        let item = {
            firstName: firstName.val(), lastName: lastName.val(), email: mail.val(), phone: tel.val(), company: company.val()
        };
        console.log(item);
        message_ok.removeClass('hidden');
        if (!message_bad.hasClass('hidden')) {
            message_bad.addClass('hidden');
        }
    };

    let validate = (e) => {
        e.preventDefault();
        if (firstName.val().length === 0 || lastName.val().length === 0 || mail.val().length === 0 || tel.val().length === 0 || company.val().length === 0) {
            message_bad.removeClass('hidden').text('Please fill out all required fields before requesting a booking');
            return false;
            }
            return addMe();
        };

    form.on("submit", validate);

    // End of Ajax

    $('.hamburger').on('click', () => $('header li').toggle());


    //Fancy waypoint's one-way fade-ins

    $('main').waypoint(function(direction) {
        if (direction === 'down') {
            $(this).addClass("waypoint-here");
        }
    }, {
        offset: '50%'
    }).waypoint(function(direction) {
        if (direction === 'up') {
            $(this).addClass("waypoint-here");
        }
    }, {
        offset: '25%'
    });

    $('#solution-tab').waypoint(function(direction) {
        if (direction === 'down') {
            $(this).addClass("waypoint-here");
        }
    }, {
        offset: '50%'
    }).waypoint(function(direction) {
        if (direction === 'up') {
            $(this).addClass("waypoint-here");
        }
    }, {
        offset: '25%'
    });

    $('#panel-tab1').waypoint(function(direction) {
        if (direction === 'down') {
            $(this).addClass("waypoint-here");
        }
    }, {
        offset: '50%'
    }).waypoint(function(direction) {
        if (direction === 'up') {
            $(this).addClass("waypoint-here");
        }
    }, {
        offset: '25%'
    });

    $('#panel-tab2').waypoint(function(direction) {
        if (direction === 'down') {
            $(this).addClass("waypoint-here");
        }
    }, {
        offset: '50%'
    }).waypoint(function(direction) {
        if (direction === 'up') {
            $(this).addClass("waypoint-here");
        }
    }, {
        offset: '25%'
    });
    $('#panel-tab3').waypoint(function(direction) {
        if (direction === 'down') {
            $(this).addClass("waypoint-here");
        }
    }, {
        offset: '50%'
    }).waypoint(function(direction) {
        if (direction === 'up') {
            $(this).addClass("waypoint-here");
        }
    }, {
        offset: '25%'
    });

    $('#panel-tab4').waypoint(function(direction) {
        if (direction === 'down') {
            $(this).addClass("waypoint-here");
        }
    }, {
        offset: '50%'
    }).waypoint(function(direction) {
        if (direction === 'up') {
            $(this).addClass("waypoint-here");
        }
    }, {
        offset: '25%'
    });
    $('.form').waypoint(function(direction) {
        if (direction === 'down') {
            $(this).addClass("waypoint-here");
        }
    }, {
        offset: '50%'
    }).waypoint(function(direction) {
        if (direction === 'up') {
            $(this).addClass("waypoint-here");
        }
    }, {
        offset: '25%'
    });
});






