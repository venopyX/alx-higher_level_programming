// Queries an API and fetches all movie titles then inserts them
// into the UL#list_movies tag

$(document).ready(function() {
  $.get("https://swapi-api.alx-tools.com/api/films/?format=json", function(data) {
    const movies = data.results;

    if (movies) {
      movies.forEach(function(movie) {
        $("#list_movies").append("<li>" + movie.title + "</li>");
      });
    } else {
      $("#list_movies").append("<li>Error fetching movie data.</li>");
    }

  }).fail(function() {
    $("#list_movies").append("<li>Error fetching movie data.</li>");
  });
});