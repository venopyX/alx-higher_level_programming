// Adds the class "red" to the `<header>` element 
// when the `DIV#red_header` is clicked, using jQuery.

$(document).ready(function() {
  $("#red_header").click(function() {
    $("header").addClass("red");
  });
});