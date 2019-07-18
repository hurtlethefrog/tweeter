const renderTweets = function(tweets) {
  $.each(tweets, (index, tweet) => {
    $('#tweetHead').prepend(createTweetElement(tweet));
  });
};

// create and populate a tweet element from tweet info off of server
const createTweetElement = function(tweet) {
  const $tweetContainer =
    $('<section>').addClass('tweetContainer shadow')
    .append([
      $('<span>').addClass('account').prepend(`<img src=${tweet.user.avatars} />`),
      $('<span>').addClass('account hovered').text(tweet.user.name),
      $('<span>').addClass('userHandle transparent').text(tweet.user.handle),
      $('<span>').addClass('clear'),
      $('<span>').addClass('theTweet hovered').text(tweet.content.text),
      $('<span>').addClass('timeStamp').text(tweet.created_at),
      $('<span>').addClass('buttons').text('❤️🚩️🔁️')
    ]);
  return $tweetContainer;
};

const loadTweets = function() {
  $.get("/tweets")
  .then(tweets => renderTweets(tweets))
  .fail(error => console.log(error));
};

// fetch a newly created tweet to prepend it to tweets container
const lastTweet = function() {
  $.get("/tweets")
    .then(tweets => renderTweets([tweets[tweets.length - 1]]))
    .fail(error => console.log(error));
};

$(document).ready(function() {
  // load tweets already in db, then hide long tweet error and forum entry
  loadTweets();
  $('#error').hide();
  $('.box.new-tweet').hide();

  // on submit check tweet length and use ajax post if valid
  $('.box.new-tweet form').on('submit', function(event) {
    event.preventDefault();
    const $tweet = $(this).serialize();
    if ($tweet.length - 6 < 140) {
      $.post('/tweets', $tweet)
       .then(lastTweet)
       .then($('.question').val(''));
    } else {
      $('#error').slideDown('1s');
    }
  });

  // read input on forum input to allow for dynamic character counter
  $('.question').on('input', function(event) {
    const $parentSection = $(event.target).closest('section');
    const $counter = $parentSection.find('.counter');
    const $inputLength = $(this).val().length;
    if (140 - $inputLength < 0) {
      $counter.addClass('invalid').text(140 - $inputLength);
      $('#error').slideDown('1s');
    } else {
      $counter.removeClass('invalid').text(140 - $inputLength);
      $('#error').slideUp('1s');
    }
  });

  // toggle view for tweet submission box
  $('#openTextBtn').on('click', function(event) {
    event.preventDefault();
    $('.box.new-tweet').toggle('1.5s');
    $('.question').focus();
  });
});


