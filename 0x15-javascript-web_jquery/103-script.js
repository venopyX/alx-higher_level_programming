// script that fetches and prints how to say “Hello” depending on the language
$(document).ready(function() {

  function translateHello() {
    const languageCode = $('#language_code').val();
    const apiUrl = `https://www.fourtonfish.com/hellosalut/hello/?lang=${languageCode}`;

    $.get(apiUrl, function(data) {
      $('#hello').text(data.hello);
    }).fail(function() {
      $('#hello').text("Error fetching translation.");
    });
  }

  $('#btn_translate').click(translateHello);

  $('#language_code').keypress(function(event) {
    if (event.which === 13) {
      translateHello();
    }
  });
});