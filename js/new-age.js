
  (function($) {
  "use strict"; // Start of use strict
  //smooth scroll
    // Select all links with hashes
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top - 50
          }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      }
    });

  // init Masonry
  var $grid = $('.grid').masonry({
    
  });
  // layout Masonry after each image loads
  $grid.imagesLoaded().progress( function() {
    $grid.masonry('layout');
  });

  //SLIDER

  $('.slider').slick({
    autoplay: true,
  });

  //APP VIEW
  $('.appview .changeview button').click(function(){
    var target = $(this).attr("data-target");

    $('.active').removeClass('active');
    $(this).addClass('active');
    $('.'+target).addClass('active');
  });

  if ($(window).width() < 960) {
    console.log('petit');
    $('.hidesmall').hide();
    $('.showsmall').show();
  }
  else {
    console.log('grand');
    $('.hidesmall').show();
    $('.showsmall').hide();
  }


})(jQuery); // End of use strict
