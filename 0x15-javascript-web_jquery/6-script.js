// Updates the text of the <header> element to "New Header!!!"
// when the DIV#update_header is clicked, using jQuery.

$(document).ready(function() {
  $("#update_header").click(function() {
    $("header").text("New Header!!!");
  });
});