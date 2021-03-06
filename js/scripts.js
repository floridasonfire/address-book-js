function Contact(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
  this.addresses = [];

};

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
};

function Address(street, city, state, zip) {
  this.street = street;
  this.city = city;
  this.state = state;
  this.zip = zip;
}

Address.prototype.fullAddress = function(){
  return this.street + ", " + this.city + ", " + this.state;
};






"use strict";


//jQuery
$( document ).ready(function() {
  $("#add_address").click(function() {
    $(".new_address").first().clone().appendTo("#new_addresses");
  });

  $("#remove_address").click(function() {
    if ($("#new_addresses").children().length > 1) {
      $(".new_address").last().remove();
    }
  });

  $("form#new_contact").submit(function(event) {
    event.preventDefault();

    var firstName = $("input#first_name").val();
    var lastName = $("input#last_name").val();
    var phone = $("input#phone_number").val();

    var newContact = new Contact(firstName, lastName);
    newContact.fullName = function() { return this.firstName + " " + this.lastName; };
    $(".new_address").each(function() {
      var street = $(this).find("input#street").val();
      var city = $(this).find("input#city").val();
      var state = $(this).find("input#state").val();
      var zip = $(this).find("input#zip").val();
      var newAddress = new Address(street, city, state, zip);
      newContact.addresses.push(newAddress);
    });



    $(".contacts").show();
    $("#contact_list").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

    $("form#new_contact").find("input").val('')

    $(".contact").last().click(function() {
      $("#show_contact").show();

      $("#show_contact h2").text(newContact.fullName());
      $(".first_name").text(newContact.firstName);
      $(".last_name").text(newContact.lastName);
      $("ul#addresses").text("");
      newContact.addresses.forEach(function(address) {
        $("ul#addresses").append("<li>" + address.fullAddress() + "</li>");
      });
    });
  });
});
