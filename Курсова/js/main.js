// $('.lazy').slick({
//     lazyLoad: 'ondemand',
//     slidesToShow: 3,
//     slidesToScroll: 1
//   });

// $(element).slick();


$(document).ready(function(){
  $('.slider_0').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    appendArrows: $(".arr_0"),
    prevArrow: "<button class='prev'></button>",
    nextArrow: "<button class='next'></button>", 
  });
    $('.slider').slick({
      appendArrows: $(".arrows"),
      slidesToShow: 2,
      slidesToScroll: 1,
      prevArrow: "<button class='prev'></button>",
      nextArrow: "<button class='next'></button>",
      zindex: -1000,
      responsive: [{
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          infinite: true
        }}]
    });

    // ------ scroll header
    var scroll = $(window).scrollTop();
      if (scroll > 0) {
          $(".header").addClass("active");
      }
      else {
        $(".header").removeClass("active");
      }
    $(window).scroll(function() {    
      var scroll = $(window).scrollTop();
       //>=, not <=
      if (scroll > 0) {
          //clearHeader, not clearheader - caps H
          $(".header").addClass("active");
      }
      else {
        $(".header").removeClass("active");
      }
  }); //missing );
//----------------scroll a[href]
$('a[href^="#"]').on('click', function(event) {
  var target = $(this.getAttribute('href'));
  if( target.length ) {
      event.preventDefault();
      $('html, body').stop().animate({
          scrollTop: target.offset().top
      }, 1000);
  }
});
var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null,    // optional scroll container selector, otherwise use window,
    resetAnimation: true,     // reset animation on end (default is true)
  }
);
wow.init();
  });
