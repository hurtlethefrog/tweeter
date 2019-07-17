$(document).ready(function() {
  $('.box.new-tweet form').on('submit', function(event) {
    event.preventDefault();
    console.log($(this).serialize())
  });
});

// $(function() {
  // const $button = $('#load-more-posts');
  // $button.on('click', function () {
    // console.log('Button clicked, performing ajax call...');
    // $.ajax('more-posts.html', { method: 'GET' })
    // $.get('more-posts.html')
    // .then(function (morePostsHtml) {
      // console.log('Success: ', morePostsHtml);
      // $button.replaceWith(morePostsHtml);
    // });
  // });
// });