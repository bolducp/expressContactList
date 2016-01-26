'use strict';

$(document).ready(init);

function init(){
  $("#submit").on("click", addContact);
}


function addContact(){
  var contactName = $('#name').val();
  var email = $('#email').val();
  //var phone = $('#phone').val();
  console.log("contactName", contactName);
  console.log("email", email);

  var newContact = {name: contactName, email: email};

  $.post('/contacts/add', newContact)
    .success(function(data){
      console.log("success!!!");
      window.location.href = data.redirect;
    })

  // $.ajax({
  //   method: 'POST',
  //   url: '/contacts/add',
  //   data: newContact,
  //   dataType: 'json',
  //   success: function(data){
  //     location.replace("/");
  //     // var $newTask = createDomElements([newTaskObj]);
  //     // $('#tasks').append($newTask);
  //     $("#newContact").trigger("reset");
  //   }
  // })
}
