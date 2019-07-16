// $(document).ready(function() {
//   const $counter = $(".counter")['0'].innerText;
//   $counter = 100;
// });

$(document).ready(function() {
  $('.question').on('input', function(event) {
    const $parentSection = $(event.target).closest('section');
    const $counter = $parentSection.find('.counter');
    const $inputLength = $(this).val().length;
    if (140 - $inputLength < 0) {
      $counter.addClass('invalid').text(140 - $inputLength);
    } else {
      $counter.removeClass('invalid').text(140 - $inputLength);
    }
  });
});

// InputEvent {isTrusted: true, data: null, isComposing: false, inputType: "deleteContentBackward"