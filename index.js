(function ($) {
   $.fn.modal = function () {
      $(this).on({
         click: function () {
            let modal = $(this).attr('data-modal');
            let cont = $(this).attr('data-container');
            $(modal).addClass('modal2');
            $('[close]').on({
               click:function () {
                  $(modal).fadeOut();
                  $(cont).fadeOut();
                  $('[data-modal]').removeClass('showed')
               }
            })
            if ($(this).hasClass('showed')) {

               $(modal).fadeOut();
               $(cont).fadeOut();
               $(this).toggleClass('showed');

            } else {

               $(modal).fadeIn().css('display', 'inline-flex');
               $(cont).fadeIn().css('display', 'flex');
               $(this).toggleClass('showed');

            }
         }
      })
      return this;
   };
})(jQuery);