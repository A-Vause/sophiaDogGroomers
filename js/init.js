var submitBtn = $('#submitBtn');

function getInputs() {
  'use strict';
  var input, firstName, lastName, petName, petType, phone, email, date, time;

    // alert('Submit button clicked');
    firstName = $('#firstName').val();
    lastName = $('#lastName').val();
    phone = $('#phone').val();
    email = $('#email').val();
    petName = $('#petName').val();
    petType = $('#petType').val();
    date = $('#date').val();
    time = $('#time').val();
    input = {
      'firstName': firstName,
      'lastName': lastName,
      'phone': phone,
      'email': email,
      'petName': petName,
      'petType': petType,
      'date': date,
      'time': time
    }
    console.log("Input:", input)
    return input;
}

$(document).ready(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('select').formSelect();
    $('.datepicker').datepicker();
    $('.timepicker').timepicker();

    AOS.init();
    
    submitBtn.on('click', function (event) {
      event.preventDefault();
      var input = getInputs();
    })    

  }); // end of document ready
