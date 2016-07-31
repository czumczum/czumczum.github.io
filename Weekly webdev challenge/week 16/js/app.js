$(document).ready(function () {

    //Header - menu handling
    var menu = $('#menu');
    menu.on("click", function () {
        menu.children().toggle('active');
    });


});