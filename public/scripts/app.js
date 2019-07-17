const renderTweets = function(tweets) {
  $.each(tweets, (index, tweet) => {
    $('.container').append(createTweetElement(tweet))
  });  
}
  
const createTweetElement = function(tweet) {
  const $tweetContainer = 
    $('<section>').addClass('tweetContainer shadow').append([
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
  .fail(error => console.log(error))

  }

$(document).ready(function(){
  loadTweets();
})  