$(function(){

  $('#miniGame').hover(function() {
    $('#cloud').show();
    $('#miniGame').addClass('noCursor');

  }, function() {
    $('#cloud').hide();
  } );

  $('#miniGame').mousemove(function(cloud) {
    $('#cloud').css({
      left: cloud.pageX, top: cloud.pageY + 10
    });
  });



})
