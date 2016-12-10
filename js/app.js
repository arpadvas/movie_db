$(document).ready(function() {
 $('form').submit(function (evt) {
    evt.preventDefault();
    var $searchField = $("#search");
    var omdbAPI = "http://www.omdbapi.com/?";
    var title = $searchField.val();
    var ombdOptions = {
      t: title
    };
    function displayMovie(data) {
      var movieHTML = '<dl class="row text-xs-left">';
      $.each(data, function(prop, value) {
        movieHTML += '<dt class="col-sm-2">' + prop + '</dt>';
        movieHTML += '<dd class="col-sm-10">' + value + '</dd>';
      });
      movieHTML += '</dl>';
      $('#result').html(movieHTML);
      console.log(data);
    }
    $.getJSON(omdbAPI, ombdOptions, displayMovie);
  });
});