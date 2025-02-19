// Changes the text color of the `<header>` element to red
// (#FF0000) when the `DIV#red_header` is clicked, using jQuery.

$(document).ready(function() {
  $("#red_header").click(function() {
    $("header").css("color", "#FF0000");
  });
});