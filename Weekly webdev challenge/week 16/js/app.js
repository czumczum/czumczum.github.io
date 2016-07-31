$(document).ready(function () {

    //Header - menu handling for mobile
    $(window).resize(function(){
        if ($(window).width() <= 520) {
            var menu = $('#menu');
            menu.on("click", function () {
                menu.children().toggle('active');
            });
        }
        else {
            var menu = $('#menu');
            menu.off();
        }
    });

    //Nav - menu navigation
    var menuLis = $('#menu li');
    menuLis.each(function () {
        console.log('test'); //TODO function for navigate
    })
});