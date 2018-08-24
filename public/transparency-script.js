/*Colorization effects*/
$('#contact-button').hover(
  function() {
    $('#one').removeClass("greyscale");
    $(this).removeClass("btn-outline");
    $(this).addClass("btn-primary");
  }, function() {
    $('#one').addClass("greyscale");
    $(this).addClass("btn-outline");
    $(this).removeClass("btn-primary");
  }
);

$('#blog-button').hover(
  function() {
    $('#two').removeClass("greyscale");
    $(this).removeClass("btn-outline");
    $(this).addClass("btn-primary");
  }, function() {
    $('#two').addClass("greyscale");
    $(this).addClass("btn-outline");
    $(this).removeClass("btn-primary");
  }
);

$('#next-button').hover(
  function() {
    $('#two').removeClass("greyscale");
    $(this).removeClass("btn-outline");
    $(this).addClass("btn-primary");
  }, function() {
    $('#two').addClass("greyscale");
    $(this).addClass("btn-outline");
    $(this).removeClass("btn-primary");
  }
);

$('#resume-button').hover(
  function() {
    $('#three').removeClass("greyscale");
    $(this).removeClass("btn-outline");
    $(this).addClass("btn-primary");
  }, function() {
    $('#three').addClass("greyscale");
    $(this).addClass("btn-outline");
    $(this).removeClass("btn-primary");
  }
);

$('#gallery-button').hover(
  function() {
    $('#four').removeClass("greyscale");
    $(this).removeClass("btn-outline");
    $(this).addClass("btn-primary");
  }, function() {
    $('#four').addClass("greyscale");
    $(this).addClass("btn-outline");
    $(this).removeClass("btn-primary");
  }
);

$('.card').hover(
  function() {
    $('#four').removeClass('greyscale');
  }, function() {
    $('#four').addClass('greyscale');
  }
)

$('#job-button').hover(
  function() {
    $('#five').removeClass("greyscale");
    $(this).removeClass("btn-outline");
    $(this).addClass("btn-primary");
  }, function() {
    $('#five').addClass("greyscale");
    $(this).addClass("btn-outline");
    $(this).removeClass("btn-primary");
  }
);




$('body').scrollspy({ target: '#nav-custom', offset: 50});

/* Animating Scrollspy */

// Add smooth scrolling on all links inside the navbar
$("#nav-custom a").on('click', function(event) {

  // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {

    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function(){

    // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
    });

  } // End if

});

$(".btn-jumbo").on('click', function(event) {

  // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {

    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function(){

    // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
    });

  } // End if

});
