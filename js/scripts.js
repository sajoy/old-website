$(function(){


  $('#miniGame').hover(function() {
    $('.bottoms').each(function(idx){
      $(this).css('right', idx * 20);
      $(this).css('width', Math.floor(Math.random() * (40-20) + 20));
      $(this).css('height', Math.floor(Math.random() * (40-20) + 20));
    })
    $('.mids').each(function(idx){
      $(this).css('right', idx * 22);
      $(this).css('width', Math.floor(Math.random() * (40-20) + 20));
      $(this).css('height', Math.floor(Math.random() * (60-30) + 20));
    })
    $('.tops').each(function(idx){
      $(this).css('right', idx * 20);
      $(this).css('width', Math.floor(Math.random() * (40-20) + 20));
      $(this).css('height', Math.floor(Math.random() * (70-30) + 20));
    })
    // $('#rain').append('<li>')
    $('#cloud').show();
    $('#rain').show();
    $('#miniGame').addClass('noCursor');

  }, function() {
    $('#cloud').hide();
    $('#rain').hide();
  } );

  $('#miniGame').mousemove(function(cloud) {
    $('#cloud').css({
      left: cloud.pageX, top: cloud.pageY });
    $('#rain').css({
      left: cloud.pageX, top: cloud.pageY + 100 });
  });



})
