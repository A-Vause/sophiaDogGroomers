var submitBtn = $('#submitBtn');
var reqForm = $('#requestForm');

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
    $('.modal').modal();
    $('.parallax').parallax();
    $('select').formSelect();
    $('.datepicker').datepicker();
    $('.timepicker').timepicker();

    AOS.init();
    
    reqForm.on('submit', function (event) {
      event.preventDefault();
      alert("Your message is being sent!");
      var input = getInputs();
      emailjs.sendForm('contact_service', 'contact_form', this);
      console.log("Sent this:", this)
    })

  }); // end of document ready
