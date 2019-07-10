function animateWithRandomNumber(myClass, from, to) {
  TweenLite.fromTo(myClass, Math.floor(Math.random() * 20 + 1), {
    y: from
  }, {
    y: to,
    onComplete: animateWithRandomNumber,
    onCompleteParams: [myClass, from, to],
    ease: Linear.easeNone
  });
}

const itemsDown = [".light4", ".light5", ".light6", ".light7", ".light8", ".light11", ".light12", ".light13", ".light14", ".light15", ".light16"].
forEach(e => animateWithRandomNumber(e, -1080, 1080));
const itemsUp = [".light1", ".light2", ".light3", ".light9", ".light10", ".light17"].
forEach(e => animateWithRandomNumber(e, 1080, -1080));

jQuery(function ($) {
  //UP
  $(".scrollup").click(function (e) {
      e.preventDefault();
      $('html, body').animate({
          scrollTop: $("body").offset().top
      }, 1000);
  });

  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 70)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 100
  });

  const logo = document.querySelector("#logo-nav");
  const logoSrc = ['IMG/logo.png','IMG/logo1.png']

  const changeLogo = (logo , source) => {
      logo.src=`${source}`
  }

  // Collapse Navbar
  var navbarCollapse = function () {
    if ($("#mainNav").offset().top > 80) {
      $("#mainNav").addClass("navbar-shrink");
      changeLogo(logo , logoSrc[0]);
      
    } else {
      $("#mainNav").removeClass("navbar-shrink");
      changeLogo(logo , logoSrc[1]);
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);
});

//pokaż scrollup podczas przewijania
$(window).scroll(function () {
  if ($(this).scrollTop() > 300) $('.scrollup').fadeIn();
  else $('.scrollup').fadeOut();
});

// 100% wysokości pierwszy element 
$(document).ready(function () {

  $(".right").css("min-height", $(window).height());

  $(window).resize(function () {
      $(".right").css("min-height", $(window).height());
  });
});
