$(document).ready(function () {
    setTimeout(function(){
        $('#header h1').addClass('fade');
        $('#nav').addClass('down');
    }, 1500);
    $(window).on('scroll', function () {
        var scrollY = $(this).scrollTop() + $(this).height();
        if(scrollY > $('#container').offset().top){
            $('#nav').removeClass('down');
        }else{
            $('#nav').addClass('down');
        }
    });
    $('#nav').on({'mouseenter': function(){
        $('#nav').addClass('down');
    }, 'mouseleave' : function(){
        $('#nav').removeClass('down');
    }});
});