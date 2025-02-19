// Fetches the Star Wars character name from the specified URL
// and displays it in the DIV#character element using jQuery.

let url = 'https://swapi.co/api/people/5/?format=json';
$.get(url, function (data, stat) {
  $('div#character').text(data.name);
});
