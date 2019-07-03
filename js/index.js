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
  //normal menu
  $(".l1").click(function () {
    $('html, body').animate({
      scrollTop: $("#OFERTA").offset().top
    }, 500);
  });
  $(".l2").click(function () {
    $('html, body').animate({
      scrollTop: $("#WHO").offset().top
    }, 500);
  });
  $(".l3").click(function () {
    $('html, body').animate({
      scrollTop: $("#PORTFOLIO").offset().top
    }, 500);
  });
  $(".l4").click(function () {
    $('html, body').animate({
      scrollTop: $("#KONTAKT").offset().top
    }, 500);
  });

  //UP
  $(".scrollup").click(function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $("body").offset().top
    }, 1000);
  });

});

function AnimateCharts() {
  $('#chart1__circle').addClass('circle-chart__circle');
  $('#chart1__info').addClass('circle-chart__info');

  $('#chart2__circle').addClass('circle-chart__circle');
  $('#chart2__info').addClass('circle-chart__info');

  $('#chart3__circle').addClass('circle-chart__circle');
  $('#chart3__info').addClass('circle-chart__info');
}

function isScrolledIntoView(elem) {
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();

  var elemTop = $(elem).offset().top;
  var elemBottom = elemTop + $(elem).height();

  return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

//pokaż podczas przewijania
$(window).scroll(function () {
  if ($(this).scrollTop() > 300) $('.scrollup').fadeIn();
  else $('.scrollup').fadeOut();

  if (isScrolledIntoView('#chart1__circle') == true) {
    AnimateCharts();
  }
});

$(document).ready(function () {

  $(".right").css("min-height", $(window).height());

  $(window).resize(function () {
    $(".right").css("min-height", $(window).height());
  });


  $('#carousel-example-generic').carousel({
    interval: 5000,
    pause: "hover"
  });

  var touchSensitivity = 5;
  $(".carousel").on("touchstart", function (event) {
    var xClick = event.originalEvent.touches[0].pageX;
    $(this).one("touchmove", function (event) {
      var xMove = event.originalEvent.touches[0].pageX;
      if (Math.floor(xClick - xMove) > touchSensitivity) {
        $(this).carousel('next');
      } else if (Math.floor(xClick - xMove) < -(touchSensitivity)) {
        $(this).carousel('prev');
      }
    });
    $(".carousel").on("touchend", function () {
      $(this).off("touchmove");
    });
  });

});