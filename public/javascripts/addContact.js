'use strict';

$(document).ready(init);

function init(){
  $("#submit").on("click", addContact);
}

function addContact(e){
  e.preventDefault();
  var contactName = $('#name').val();
  var email = $('#email').val();
  var phone = $('#phone').val();
  var notes = $('#notes').val();
  var newContact = {name: contactName, email: email, phone: phone, notes: notes};

  $.post('/contacts/add', newContact)
    .success(function(data){
      window.location = "/contacts";
    })
}
