// script that fetches and prints how to say “Hello” depending on the language

$(document).ready(function() {
  $('#btn_translate').click(function() {
    const languageCode = $('#language_code').val();
    const apiUrl = `https://hellosalut.stefanbohacek.dev/?lang=${languageCode}`;

    $.get(apiUrl, function(data) {
      $('#hello').html(data.hello);
    }).fail(function() {
      $('#hello').text("Error fetching translation."); // Handle potential errors
    });
  });
});