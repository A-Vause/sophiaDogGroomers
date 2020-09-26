(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.carousel').carousel().carousel({
      shift: -100,
      dist: -100,
    });
    // $('.carousel.carousel-slider').carousel({
    //   indicators: true,
    //   height: 300,
    //   transition: 500,
    //   interval: 4000
    // });

  }); // end of document ready
})(jQuery); // end of jQuery name space
