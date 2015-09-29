(function($) {
  var isMobile = function(_, ua) {
    _.Android = ua.match(/Android/i);
    _.BlackBerry = ua.match(/BlackBerry/i);
    _.iOS = ua.match(/iPhone|iPad|iPod/i);
    _.Opera = ua.match(/Opera Mini/i);
    _.Windows = ua.match(/IEMobile/i);
    _.Palm = ua.match(/webOS/i);
    _.any = _.Android || _.BlackBerry || _.iOS || _.Opera || _.Windows || _.Palm;
    _.selector = {
      hide: '.on-desktop', // the selector to hide when on a mobile
      show: '.on-mobile' // the selector to show when on a mobile
    };
    _.show = function() {
      $(_.selector.hide).hide();
      $(_.selector.show).show();
    };
    _.hide = function() {
      $(_.selector.show).hide();
      $(_.selector.hide).show();
    };
    _.toggle = function(clause) {
      clause = typeof clause !== 'boolean' ? _.any : clause;
      if (clause) _.show();
      else _.hide();
    };
    return _;
  }({}, navigator.userAgent);

  var colors        = ["#1abc9c", "#2ecc71", "#3498db", "#9b59b6", "#16a085", "#27ae60", "#2980b9", "#8e44ad"],letterH = $('.hover-block.h'),
      letterHId     = $(letterH).attr('id'),
      letterHLetter = $(letterH).data('letter');

  $('.hover-block').hover(
    function() {
      explodeLetter($(this).parents('section').attr('id'), $(this).data('letter'), $(this).data('color'));
    },
    function() {
      implodeLetter($(this).parents('section').attr('id'), $(this).data('letter'));
    }
  );

  $('.nav-links').hover(
    function() {
      bombLetter(letterHId, letterHLetter, '#9b59b6');
    }
  );

  $(function() {
    // check for any
    isMobile.toggle();
    // isMobile.toggle(isMobile.any);
    //
    // Check for single
    // isMobile.toggle(isMobile.Android);
    //
    // Check for multiple
    // isMobile.toggle(isMobile.Android || isMobile.BlackBerry);
    //
    introStuff();
  });

  function explodeLetter(parentID, letter, fillColor) {
    $('#' + parentID + ' .word-digital .letter.' + letter).find('rect').each(function() {

      var currColor = getRandomColor();

      $(this).css({
        'fill': currColor,
        '-webkit-transform': 'translate3d(' + randomIntFromInterval(-69, 69) + 'px, ' + randomIntFromInterval(-69, 69) + 'px, 0)',
        '-moz-transform': 'translate3d(' + randomIntFromInterval(-69, 69) + 'px, ' + randomIntFromInterval(-69, 69) + 'px, 0)',
        '-ms-transform': 'translate3d(' + randomIntFromInterval(-69, 69) + 'px, ' + randomIntFromInterval(-69, 69) + 'px, 0)',
        '-o-transform': 'translate3d(' + randomIntFromInterval(-69, 69) + 'px, ' + randomIntFromInterval(-69, 69) + 'px, 0)',
        'transform': 'translate3d(' + randomIntFromInterval(-69, 69) + 'px, ' + randomIntFromInterval(-69, 69) + 'px, 0)'
      });
    });
  }

  function implodeLetter(parentID, letter) {
    setTimeout(function() {
      $('#' + parentID + ' .word-digital .letter.' + letter).find('rect').css({
        'fill': '#fff',
        '-webkit-transform': 'translate3d(0, 0, 0)',
        '-moz-transform': 'translate3d(0, 0, 0)',
        '-ms-transform': 'translate3d(0, 0, 0)',
        '-o-transform': 'translate3d(0, 0, 0)',
        'transform': 'translate3d(0, 0, 0)'
      });
    }, 300);
  }

  function bombLetter(parentID, letter, fillColor) {

    explodeLetter(parentID, letter, fillColor);

    setTimeout(function() {
      implodeLetter(parentID, letter);
    }, 500);
  }

  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function getRandomColor() {
    var color = colors[Math.floor(Math.random()*colors.length)];
    return color;
  }

  function introStuff() {
    setTimeout(function() {

      // $('.hover-block').each(function(){
      //
      //   letterString = letterString + ' ' + $(this).data('letter');
      //
      // });

      $('.hover-block.p-1').trigger("mouseover");
      setTimeout(function() {
        $('.hover-block.p-1').trigger("mouseover");
        setTimeout(function() {
          $('.hover-block.p-1').trigger("mouseover");
          setTimeout(function() {
            $('.hover-block.p-1').trigger("mouseover");
            setTimeout(function() {
              $('.hover-block.p-1').trigger("mouseover");
              setTimeout(function() {
                $('.hover-block.p-1').trigger("mouseout");
              }, 500);
            }, 300);
          }, 300);
        }, 300);
      }, 300);

      $('.hover-block.h').trigger("mouseover");
      setTimeout(function() {
        $('.hover-block.h').trigger("mouseover");
        setTimeout(function() {
          $('.hover-block.h').trigger("mouseover");
          setTimeout(function() {
            $('.hover-block.h').trigger("mouseover");
            setTimeout(function() {
              $('.hover-block.h').trigger("mouseover");
              setTimeout(function() {
                $('.hover-block.h').trigger("mouseout");
              }, 500);
            }, 300);
          }, 300);
        }, 300);
      }, 300);

      $('.hover-block.i-1').trigger("mouseover");
      setTimeout(function() {
        $('.hover-block.i-1').trigger("mouseover");
        setTimeout(function() {
          $('.hover-block.i-1').trigger("mouseover");
          setTimeout(function() {
            $('.hover-block.i-1').trigger("mouseover");
            setTimeout(function() {
              $('.hover-block.i-1').trigger("mouseover");
              setTimeout(function() {
                $('.hover-block.i-1').trigger("mouseout");
              }, 500);
            }, 300);
          }, 300);
        }, 300);
      }, 300);

      $('.hover-block.l-1').trigger("mouseover");
      setTimeout(function() {
        $('.hover-block.l-1').trigger("mouseover");
        setTimeout(function() {
          $('.hover-block.l-1').trigger("mouseover");
          setTimeout(function() {
            $('.hover-block.l-1').trigger("mouseover");
            setTimeout(function() {
              $('.hover-block.l-1').trigger("mouseover");
              setTimeout(function() {
                $('.hover-block.l-1').trigger("mouseout");
              }, 500);
            }, 300);
          }, 300);
        }, 300);
      }, 300);

      $('.hover-block.l-2').trigger("mouseover");
      setTimeout(function() {
        $('.hover-block.l-2').trigger("mouseover");
        setTimeout(function() {
          $('.hover-block.l-2').trigger("mouseover");
          setTimeout(function() {
            $('.hover-block.l-2').trigger("mouseover");
            setTimeout(function() {
              $('.hover-block.l-2').trigger("mouseover");
              setTimeout(function() {
                $('.hover-block.l-2').trigger("mouseout");
              }, 500);
            }, 300);
          }, 300);
        }, 300);
      }, 300);

      $('.hover-block.i-2').trigger("mouseover");
      setTimeout(function() {
        $('.hover-block.i-2').trigger("mouseover");
        setTimeout(function() {
          $('.hover-block.i-2').trigger("mouseover");
          setTimeout(function() {
            $('.hover-block.i-2').trigger("mouseover");
            setTimeout(function() {
              $('.hover-block.i-2').trigger("mouseover");
              setTimeout(function() {
                $('.hover-block.i-2').trigger("mouseout");
              }, 500);
            }, 300);
          }, 300);
        }, 300);
      }, 300);

      $('.hover-block.p-2').trigger("mouseover");
      setTimeout(function() {
        $('.hover-block.p-2').trigger("mouseover");
        setTimeout(function() {
          $('.hover-block.p-2').trigger("mouseover");
          setTimeout(function() {
            $('.hover-block.p-2').trigger("mouseover");
            setTimeout(function() {
              $('.hover-block.p-2').trigger("mouseover");
              setTimeout(function() {
                $('.hover-block.p-2').trigger("mouseout");
              }, 500);
            }, 300);
          }, 300);
        }, 300);
      }, 300);

      $('.hover-block.c').trigger("mouseover");
      setTimeout(function() {
        $('.hover-block.c').trigger("mouseover");
        setTimeout(function() {
          $('.hover-block.c').trigger("mouseover");
          setTimeout(function() {
            $('.hover-block.c').trigger("mouseover");
            setTimeout(function() {
              $('.hover-block.c').trigger("mouseover");
              setTimeout(function() {
                $('.hover-block.c').trigger("mouseout");
              }, 500);
            }, 300);
          }, 300);
        }, 300);
      }, 300);

      $('.hover-block.u').trigger("mouseover");
      setTimeout(function() {
        $('.hover-block.u').trigger("mouseover");
        setTimeout(function() {
          $('.hover-block.u').trigger("mouseover");
          setTimeout(function() {
            $('.hover-block.u').trigger("mouseover");
            setTimeout(function() {
              $('.hover-block.u').trigger("mouseover");
              setTimeout(function() {
                $('.hover-block.u').trigger("mouseout");
              }, 500);
            }, 300);
          }, 300);
        }, 300);
      }, 300);

      $('.hover-block.r').trigger("mouseover");
      setTimeout(function() {
        $('.hover-block.r').trigger("mouseover");
        setTimeout(function() {
          $('.hover-block.r').trigger("mouseover");
          setTimeout(function() {
            $('.hover-block.r').trigger("mouseover");
            setTimeout(function() {
              $('.hover-block.r').trigger("mouseover");
              setTimeout(function() {
                $('.hover-block.r').trigger("mouseout");
              }, 500);
            }, 300);
          }, 300);
        }, 300);
      }, 300);

      $('.hover-block.l-3').trigger("mouseover");
      setTimeout(function() {
        $('.hover-block.l-3').trigger("mouseover");
        setTimeout(function() {
          $('.hover-block.l-3').trigger("mouseover");
          setTimeout(function() {
            $('.hover-block.l-3').trigger("mouseover");
            setTimeout(function() {
              $('.hover-block.l-3').trigger("mouseover");
              setTimeout(function() {
                $('.hover-block.l-3').trigger("mouseout");
              }, 500);
            }, 300);
          }, 300);
        }, 300);
      }, 300);

    }, 700);
  }

})(jQuery);
