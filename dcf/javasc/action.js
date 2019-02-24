$(function() {
var h = $(window).height(); //ブラウザウィンドウの高さを取得
$('#main-contents').css('display','none'); //初期状態ではメインコンテンツを非表示
$('#loader-bg ,#loader').height(h).css('display','block'); //ウィンドウの高さに合わせでローディング画面を表示
});
$(window).load(function () {
$('#loader-bg').delay(900).fadeOut(800); //$('#loader-bg').fadeOut(800);でも可
$('#loader').delay(600).fadeOut(300); //$('#loader').fadeOut(300);でも可
$('#main-contents').css('display', 'block'); // ページ読み込みが終わったらメインコンテンツを表示する
});





function slideSwitch(){
    var $active = $('#slideshow img.active');
    
    if ($active.length == 0)$active = $('#slideshow img:last');
    
    var $next = $active.next().length ? $active.next()
    : $('#slideshow img:first');
    
    $active.addClass('last-active');
    
    $next.css({opacity: 0.0})
        .addClass('active')
        .animate({opacity: 1.0}, 1000, function(){
            $active.removeClass('active last-active');
        });
}

$(function(){
    setInterval("slideSwitch()", 5000);
});

$(function() {
    $('#demo').pickadate();
});