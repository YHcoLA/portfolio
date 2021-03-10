$(document).ready(function () {
    var scrollY;

    setTimeout(function () {
        $('#header h1').addClass('fade');
        $('#nav').addClass('down');
    }, 1500);

    $(window).on('scroll', function () {
        scrollY = $(window).scrollTop() + $(window).height();

        console.log(scrollY);
        if (scrollY > $('#container').offset().top) {
            $('#nav').removeClass('down');
        } else {
            $('#nav').addClass('down');
        }
    });

    $('#nav').on({
        'mouseenter': function () {
            $('#nav').addClass('down');
        },
        'mouseleave': function () {
            if (scrollY > $('#container').offset().top) {
                $('#nav').removeClass('down');
            }
        }
    });

    // 
    $('#introWrapBefore .paper').addClass('updown');
    $('#introWrapBefore .paper').draggable({
        containment: '#introduce',
        axis: 'y',
        scroll: false,
        snap: true,
        drag: function (event, ui) {
            $(this).removeClass('updown');
        },
        stop: function (event, ui) {
            $(this).closest('.intro_wrap').stop().fadeOut().next().stop().fadeIn();
        }
    });
});