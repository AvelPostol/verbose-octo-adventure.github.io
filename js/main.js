//Adaptive functions
$(window).resize(function(event){
   adaptive_function();
});
function adaptive_header(w/*,h*/) {
      var headerMenu=$('.header-menu');
      var headerLang=$('.header-top-lang');
   if(w.matches){
      if(!headerLang.hasClass('done')){
         headerLang.addClass('done').appendTo(headerMenu);

      }
   }else{
      if(headerLang.hasClass('done')){
         headerLang.removeClass('done').prependTo($('.header-top'));
      }
   }
   if(w.matches){
      if(!$('.header-bottom-menu').hasClass('done')){
         $('.header-bottom-menu').addClass('done').appendTo(headerMenu);
      }
   }
   else{
      $.each($('.header-bottom-menu'), function(index, val) {
         if($(this).hasClass('right')){
            if($(this).hasClass('done')){
               $(this).removeClass('done').prependTo($('.header-right'));
            }
         }
         else{
            if($(this).hasClass('done')){
               $(this).removeClass('done').prependTo($('.header-left'));
            }
         }
         
      });
   }
}
/*function adaptive_function() {
   var w=$(window).outerWidth();
   var h=$(window).outerHeight();
   adaptive_header(w,h);
}
   adaptive_function();*/
   function adaptive_function() {
      var w=window.matchMedia('(max-width: 767px)');
      adaptive_header(w);
   }
      adaptive_function();

$('.header-menu__icon').click(function(event) {
   $(this).toggleClass('active');
   $('.header-menu').toggleClass('active');
   if($(this).hasClass('active')){
      $('body').data('scroll',$(window).scrollTop());
   }
      $('body').toggleClass('lock');
   if(!$(this).hasClass('active')){
      $('body,html').scrollTop(parseInt($('bode').data('scroll')));
   }
});

function ibg(){
   $.each($('.ibg'), function(index, val){
      if($(this).find('img').length>0){
         $(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
      }
   });
}
ibg();
/*$(this).find('img').lenght */
