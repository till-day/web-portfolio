$(function(){
   //Cache the window object
   var $window = $(window);

   // Parallax background effect
   $('section[data-type="background"]').each(function(){
      var $bgobj = $(this);
      $(window).scroll(function() {
         // scroll at a var speed
         // the yPos is negative because its scrolling up

         var yPos = -($window.scrollTop() / $bgobj.data('speed'));

         // Put together our position
         var coords = '50% '+yPos + 'px';

         // move the background
         $bgobj.css({backgroundPosition: coords});

      });
   });
 });
