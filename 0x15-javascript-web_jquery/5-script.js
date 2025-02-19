// Adds a new `<li>Item</li>` element to the `UL.my_list` when
// the `DIV#add_item` is clicked, using jQuery.

$(document).ready(function() {
  $("#add_item").click(function() {
    $(".my_list").append("<li>Item</li>");
  });
});