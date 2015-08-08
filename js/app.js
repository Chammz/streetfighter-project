$(document).ready(function() {
	doIntro();

	$('.ryu').mouseenter(function() {
    	$('.ryu-still').hide();
		$('.ryu-ready').show();
  })
	.mouseleave(function() {
    $('.ryu-ready').hide();
	$('.ryu-still').show();
	})
	.mousedown(function() {
    	playHadouken();
    	$('.ryu-ready').hide();
    	$('.ryu-throwing').show();
    	$('.hadouken').finish().show().animate(
  {'left': '1020px'},
  500,
  function() {
    $(this).hide();
    $(this).css('left', '520px');
  }
);
  })
  .mouseup(function() {
    console.log('mouseup');
    $('.ryu-ready').show();
    $('.ryu-throwing').hide();
    ;
    // ryu goes back to his ready position
	});
});

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}

function playcool () {
  $('#cool')[0].volume = 0.5;
  $('#cool')[0].play();
}

$(document).keydown(function(e) {
    if (e.keyCode == 88) {
      playcool();
      $('.ryu-ready').hide();
      $('.ryu-cool').show();
    }


  }).keyup(function(e) {
    if (e.keyCode == 88) {
       $('#cool')[0].pause();
       $('#cool')[0].load();
      $('.ryu-cool').hide();
      $('.ryu-ready').show();
    }
  });


function doIntro() {
  $('.sf-logo').fadeIn(3500, function() {
    $(this).fadeOut(1000, function() {
      $('.brought-by').fadeIn(1500, function() {
        $(this).fadeOut(1000, function() {
          $('.jquery-logo').fadeIn(1500, function() {
            $(this).fadeOut(1500, function() {
              $('.how-to').fadeIn(1000);
            });
          })
        })
      })
    })
  })
}