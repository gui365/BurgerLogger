// Event handlers
$(function() {
 $(".burger-form").on("submit", function(event) {
  event.preventDefault();

  var newBurger = {
    name: $("#burger-name").val().trim(),
    eaten: false
  };

  // POST - Add a burger to the database
  $.ajax("/api/burgers", {
    type: "POST",
    data: newBurger
  }).then(function(){
    window.location.reload();
  })
 });

//  PUT - Change state of burger (Eat burger)
 $(".eat-button").on("click", function(event){
   var id = $(this).data("id");

   var eatBurger = {
    eaten: true
   };

   $.ajax(`/api/burgers/${id}`, {
     type: "PUT",
     data: eatBurger
   }).then(function(){
     window.location.reload();
   })
 });

});