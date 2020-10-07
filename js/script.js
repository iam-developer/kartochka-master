$(document).ready(function() {

  
// Function for changing product images:
  $('.product-btn1').on('click', function() {
    $('.none').css('display', 'none');
    $('.color1').css('display', 'block');
    $('.content').removeClass('show');
    $('.class1').addClass('show');
    $('.product--img').removeClass('active');
    $(this).addClass('active');
  });
  $('.product-btn2').on('click', function() {
    $('.none').css('display', 'none');
    $('.color2').css('display', 'block');
    $('.content').removeClass('show');
    $('.class2').addClass('show');
    $('.product--img').removeClass('active');
    $(this).addClass('active');
  });
  $('.product-btn3').on('click', function() {
    $('.none').css('display', 'none');
    $('.color3').css('display', 'block');
    $('.content').removeClass('show');
    $('.class3').addClass('show');
    $('.product--img').removeClass('active');
    $(this).addClass('active');
  });
  $('.product-btn4').on('click', function() {
    $('.none').css('display', 'none');
    $('.color4').css('display', 'block');
    $('.content').removeClass('show');
    $('.class4').addClass('show');
    $('.product--img').removeClass('active');
    $(this).addClass('active');
  });

// Click for like

$('.like').on('click', function() {
  $(this).find('.svg').toggleClass('svg--active');
});

$('.mob--like').on('click', function() {
  $(this).find('.svg').toggleClass('svg--active');
});

//  События звездочек:


$('.zvezd1').on('click', function() {
  $('.zvezdochki').not(this).removeClass('active');
  $(this).toggleClass('active');
});
// 2-звездочка:
$('.zvezd2').on('click', function() {
  $('.zvezdochki').removeClass('active');
  $('.aa').addClass('active');
});
// 3-звездочка:
$('.zvezd3').on('click', function() {
  $('.zvezdochki').removeClass('active');
  $('.bb').addClass('active');
});
// 4-звездочка:
$('.zvezd4').on('click', function() {
  $('.zvezdochki').removeClass('active');
  $('.cc').addClass('active');
});
// 5-звездочка:
$('.zvezd5').on('click', function() {
  $('.zvezdochki').removeClass('active');
  $('.dd').addClass('active');
});

// При клике на сердечку:
$('.heart').on('click', function() {
  $(this).css('display', 'none');
  $('.no-heart').css('display', 'block');
});
$('.no-heart').on('click', function() {
  $(this).css('display', 'none');
  $('.heart').css('display', 'block');
});


// При наведении на звездочек:

$('.zvezd2').hover(function() {
  $('.aa').addClass('active-hover');
},function() {
  $('.aa').removeClass('active-hover');
});

$('.zvezd3').hover(function() {
  $('.bb').addClass('active-hover');
},function() {
  $('.bb').removeClass('active-hover');
});

$('.zvezd4').hover(function() {
  $('.cc').addClass('active-hover');
},function() {
  $('.cc').removeClass('active-hover');
});

$('.zvezd5').hover(function() {
  $('.dd').addClass('active-hover');
},function() {
  $('.dd').removeClass('active-hover');
});

// Slider products:
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow:"<div class='prev--buttons'>&#8249;</div>",
        nextArrow:"<div class='next--buttons'>&#8250;</div>",
        dots: false,
        fade: false,
        asNavFor: '.nav--slider',
        focusOnSelect: true,
        responsive: [
          {
            breakpoint: 738,
            settings: {
              dots: true,
            }
          }
        ]
    });

    $('.nav--slider').slick({
        vertical: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        arrows: true,
        focusOnSelect: true,
        prevArrow:"<div class='prev'>&#8249;</div>",
        nextArrow:"<div class='next'>&#8250;</div>",
        responsive: [
          {
            breakpoint: 1170,
            settings: {
              slidesToShow: 3,
            }
          }
        ]
   });

   $('.slider--item').on('click', function() {
        $('.slider--item').removeClass('active');
        $(this).addClass('active');
   });

  //  Models slider:

    $('.models--slide').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        prevArrow: document.querySelector('#arrow-prev'),
        nextArrow: document.querySelector('#arrow-next'),
        responsive: [
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              variableWidth: true
            }
          }
        ]
    });

    // Second Slider:
    
    $('.models--slide2').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      dots: false,
      arrows: true,
      prevArrow: document.querySelector('#arrow-prev2'),
      nextArrow: document.querySelector('#arrow-next2'),
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            variableWidth: true
          }
        }
      ]
  });
});

// ===========  ACCORDION   ================
$(document).ready(function() {
  $('.accordion').on('click', function() {
    $(this).find($('.accordion--icon')).toggleClass('act');
  });
});

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {

  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    this.classList.toggle("no-border");

    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}



