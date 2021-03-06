$(function(){
  // 絞り込み
  var $btn = $('.btn [data-filter]'),
  $list = $('.list [data-category]');
  $btn.on('click', function(e) {
    e.preventDefault();
    var $btnTxt = $(this).attr('data-filter');
    if ($btnTxt == 'all'){
      $list.fadeOut().promise().done(function() {
        $list.fadeIn();
      });
    } else {
      $list.fadeOut().promise().done(function() {
        $list.filter('[data-category = "' + $btnTxt + '"]').fadeIn();;
      });
    }
  });
  
  $(".list-btn").on('click', function() {
    $(".list-btn").removeClass("list-btn-add");
    $(this).addClass("list-btn-add");
  })
});
