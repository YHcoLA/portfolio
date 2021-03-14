$(document).ready(function () {
    var scrollY;
    var _stikerMemo = $('.stikerMemo');
    var _photoFrame = $('.photoFrame');
    var _strokeBox = $('.strokeBox');

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

    $('#design > .photoFrame > a').on('click', function () {
        var _openBtn = $(this); 
        var _mdCnt = $('#modal'); 
        var _closeBtn = _mdCnt.find('.mdclose_btn'); 
        var _first = _mdCnt.find('.first'); 
        var _last = _mdCnt.find('.last'); 
        var timerResize = 0;

        var wrapHei = $('#wrap').height(); 
        var scrollY = $(window).scrollTop(); 
        $('html, body').css({
            height: wrapHei,
            overflow: 'hidden'
        });
        $(window).scrollTop(scrollY); 
        _mdCnt.before('<div id="dim"></div>');
        var _dim = $('#dim');

        _mdCnt.children().first().attr({src : $(this).children().attr('src')})

        
    $(window).on('resize', function () {
        clearTimeout(timerResize);
  
        timerResize = setTimeout(function () {
          var winHei = $(this).height();
          var winWid = $(this).width();
          var modalHei = _mdCnt.outerHeight();
          var modalWid = _mdCnt.outerWidth();
          var x; 
          var y; 
          
          if (winHei >= modalHei) { 
            x = (winWid - modalWid) / 2;
            y = (winHei - modalHei) / 2;
            console.log(x, y)
            _mdCnt.css({left: x, top: y});
          } else { 
            x = (winWid - modalWid) / 2;
            console.log(x);
            _mdCnt.css({left: x, top: 0, overflowY: 'auto'});
          }
        }, 50);
      });
      $(window).trigger('resize');

      _dim.stop().fadeIn().next().css('visibility', 'visible');
      _first.focus();

      _closeBtn.on('click', function () {
        
        $('html, body').removeAttr('style');
  
        
        _dim.stop().fadeOut(function () {
          $(this).remove();
        });
        
        _mdCnt.css('visibility', 'hidden').siblings().removeAttr('aria-hidden inert');
  
        
        _openBtn.focus();
      });
  
      
      _dim.on('click', function () {
        _closeBtn.click();
      });
  
      
      $(window).on('keydown', function (e) {
        
        if (e.keyCode === 27) _closeBtn.click();
      });


        return false;
    });
});