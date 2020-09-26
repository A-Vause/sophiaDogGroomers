(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.carousel').carousel().carousel({
      shift: -100,
      dist: -100,
    });
    $('select').formSelect();
    $('.datepicker').datepicker();
    $('.timepicker').timepicker();


  }); // end of document ready
})(jQuery); // end of jQuery name space
