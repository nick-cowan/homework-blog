
// Matt, I tried to use - $('.readmore').on('click'), function() - but it didn't work, and I kept getting
// syntax errors when in the console. I changed it to use - .click - instead and it seemed to work.
// I couldn't work out why - .on - wasn't working.

$(function(){
  $('.readmore').click(function(){
    $('#show-this-on-click').slideDown();
    $(this).hide();
    $('.readless').show();
    event.preventDefault();
  })

  $('.readless').click(function(){
    $('#show-this-on-click').fadeOut();
    $('.readmore').show("slow");
    $(this).hide();
    event.preventDefault();
  })

  $('.learnmore').click(function(){
    $('#learnmoretext').fadeIn();
    $(this).hide();
    event.preventDefault();
  })

});
