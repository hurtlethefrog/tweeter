/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


// Test / driver code (temporary). Eventually will get this from the server.
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]


  const renderTweets = function(tweets) {
    $.each(tweets, (index, tweet) => {
      $('.container').append(createTweetElement(tweet))
    });  
  }
  
  const createTweetElement = function(tweet) {
    const $tweetContainer = 
      $('<section>').addClass('tweetContainer shadow hovered').append([
      $('<span>').addClass('account').prepend(`<img src=${tweet.user.avatars} />`),
      $('<span>').addClass('account').text(tweet.user.name),
      $('<span>').addClass('userHandle transparent').text(tweet.user.handle),
      $('<span>').addClass('clear'),
      $('<span>').addClass('theTweet').text(tweet.content.text),
      $('<span>').addClass('timeStamp').text(tweet.created_at),
      $('<span>').addClass('buttons').text('❤️🚩️🔁️')
    ]);
  
    return $tweetContainer;
  };

$(document).ready(function(){
  renderTweets(data);
})  