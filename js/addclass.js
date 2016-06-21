$(function(){
  $("#button").click(function() {
    $('[id^=right]').toggleClass('anim1');
    $('[id^=left]').toggleClass('anim2');
    $('[id^=rightleave]').toggleClass('anim3');
    $('[id^=navLeave]').toggleClass('anim4');
    $('[id^=verticaleNav]').toggleClass('anim5');
    $('[id^=InfoAside]').toggleClass('anim6');
    $('[id^=InfoCenter]').toggleClass('anim7');
  });
});
