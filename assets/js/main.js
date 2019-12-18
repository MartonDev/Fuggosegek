jQuery(function($) {

  $(document).ready(function() {

    $('.scroll-down').click(function() {

      $([document.documentElement, document.body]).animate({

        scrollTop: $('.landing').height()

      }, 700);

    });

  });

});
