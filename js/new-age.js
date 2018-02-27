
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
    $('.hidesmall').hide();
    $('.showsmall').show();
  }
  else {
    $('.hidesmall').show();
    $('.showsmall').hide();
  }

  //stack cards
 var content = $('.content');
    var currentItem = content.filter('.active');
    var steps = $('.card').filter('.steps');
    var inactive1 = $('.inactive-1');
    var inactive2 = $('.inactive-2');

    $('.button').click(function() {
        var nextItem = currentItem.next();
        var lastItem = content.last();
        var contentFirst = content.first();
      
        currentItem.removeClass('active');

        if (currentItem.is(lastItem)) {
            currentItem = contentFirst.addClass('active');
            currentItem.css({'right': '10%', 'opacity': '1'});
            $('.step').animate({width: '33%'});
            inactive1.animate({height: '8px', marginLeft:'20px', marginRight:'20px'}, 100);
            inactive2.animate({height: '8px', marginLeft:'10px', marginRight:'10px'}, 100);
          
        } else if (currentItem.is(contentFirst)) {
            currentItem.animate({opacity: 0}, 1000);
            currentItem = nextItem.addClass('active');
            $('.step').animate({width: '66%'});
            inactive2.animate({height: '0', marginLeft:'0px', marginRight:'0px'}, 100);
          
        } else {
            currentItem = nextItem.addClass('active');
            $('.step').animate({width: '100%'});
            inactive1.animate({height: '0', marginLeft:'0px', marginRight:'0px'}, 100);
        } 
    });
  
})(jQuery); // End of use strict
