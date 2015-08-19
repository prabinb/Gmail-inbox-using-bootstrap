$(document).ready(function(){
  $('#newMessage').hide();
  
  $('.glyphicon-star-empty').click(function(){
    var thisobj = $(this);
    if(thisobj.hasClass('glyphicon-star-empty')){
      $(this).removeClass('glyphicon-star-empty').addClass('glyphicon-star');
    } else {
      $(this).removeClass('glyphicon-star').addClass('glyphicon-star-empty');
    }
  });

  $('.glyphicon-heart-empty').click(function(){
    var thisobj = $(this);
    if (thisobj.hasClass('glyphicon-heart-empty')){
      $(this).removeClass('glyphicon-heart-empty').addClass('glyphicon-heart');
    }else {
      $(this).removeClass('glyphicon-heart').addClass('glyphicon-heart-empty');
    }
  });

  $('#removeMessage > .glyphicon-remove').click(function(){
    $('#newMessage').hide();
  });

  $('#composeMail').click(function(){
    $('#newMessage').show();
  });
  
  $('#selectAllMessages').click(function(){
    $('#messageTabs > .active input[type=checkbox]').click();
  });
  
  $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    //var target = $(e.target).attr("href") // activated tab
    $('#selectAllMessages').attr('checked', false);
    $('#messageTabs > .active input[type=checkbox]').attr('checked', false);
    
  });
  
  $('[data-toggle=offcanvas]').click(function() {
      $('.row-offcanvas').toggleClass('active');
    });
    
  $('#emailTabs > li.active').click(function(){
    var thisobj = $('#emailTabs');
    if (thisobj.hasClass('mobile-open')){
      thisobj.removeClass('mobile-open');
    }else{
      thisobj.addClass('mobile-open');
    }
  });
  
});


function load() {
  var template = $('#mailTemplate').html();
  
  var primary_inbox = Mustache.to_html(template, primary);
  $('#primary').html(primary_inbox);
  
  var social_inbox = Mustache.to_html(template, social);
  $('#social').html(social_inbox);
  
  var promotions_inbox = Mustache.to_html(template, promotions);
  $('#promotions').html(promotions_inbox);
  
  var updates_inbox = Mustache.to_html(template, updates);
  $('#updates').html(updates_inbox);
  
  var forums_inbox = Mustache.to_html(template, forums);
  $('#forums').html(forums_inbox);
};
