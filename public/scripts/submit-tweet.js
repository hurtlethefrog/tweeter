$(document).ready(function() {
  $('.box.new-tweet form').on('submit', function(event) {
    event.preventDefault();
    console.log($(this).serialize())
  });
});

