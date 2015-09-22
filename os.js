$('.hover-block').hover(
  function() {
    explodeLetter($(this).parents('section').attr('id'), $(this).data('letter'), $(this).data('color'));
  },
  function() {
    implodeLetter($(this).parents('section').attr('id'), $(this).data('letter'));
  }
);
introStuff();

function explodeLetter(parentID, letter, fillColor) {
  $('#' + parentID + ' .word-digital .letter.' + letter).find('rect').each(function() {
    $(this).css({
      'fill': fillColor,
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

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function introStuff() {
  $('body').addClass('show-background');
  setTimeout(function() {
    $('body').addClass('show-stars');

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
