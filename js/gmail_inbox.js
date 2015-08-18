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
  
});

