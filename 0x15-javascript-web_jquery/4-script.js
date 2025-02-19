// Toggles the "red" and "green" classes on the `<header>`
// element when the `DIV#toggle_header` is clicked, 
// ensuring only one class is present at a time, using jQuery.

$(document).ready(function() {
  $("#toggle_header").click(function() {
    $("header").toggleClass("red green");
  });
});