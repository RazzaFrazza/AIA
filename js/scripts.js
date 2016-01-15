$('document').ready(function(){

	$(function() {
	  $('body').on("click", "a[href*=#]:not([href=#])", function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top
	        }, 1000);
	        return false;
	      }
	    }
	  });
	});

	$('.flip-container').click(function(){
		$(this).toggleClass('hover');
	});

	$('.flip-container .back a').click(function(e){
		e.stopPropagation();
	});

	$('.flip-container .front a').click(function(e){
		e.preventDefault();
		$(this).parent().parent().toggleClass('hover');
	});

	$('.who-uses .column').click(function(){
		$(this).find('.overlay').toggleClass('slideInUp slideOutDown').show();
	});

	$('.who-uses .column > a').click(function(e){
		e.preventDefault();
	});

	$('.two-col:not(.links)').click(function(e){
		e.preventDefault();
		$(this).children('.overlay').removeClass('flipOutX').show().addClass('flipInX');
	});






	$('.history-container .history, .history-menu-link').click(function(e){

		//$('body').addClass('fixed');

		$('.history-overlay').removeClass('slideOutDown').show().addClass('slideInUp');

		setTimeout(function(){

			//overlay top is cutoff after first time.  this scrolls to the top when the overlay is brought in.

	        // $('#history-overlay-container').animate({
	        //   scrollTop: 0
	        // }, 800);

		}, 300);
	});

	$('.history-overlay .history, .close-button').click(function(){
		
		$('body').removeClass('fixed');
		$('.inner-wrap').css('display', 'block');
		$('.history-overlay').removeClass('slideInUp').addClass('slideOutDown').fadeOut();



	});



	$('#openMe, .small-circle-button').click(function(e){
		$('#what-are-aia-contract-documents').css('display', 'none');
		$('#history-menu-link-history').css('display', 'none')
	});	


	$('#closeMe, .close-button, .small-circle').click(function(e){
		$('#what-are-aia-contract-documents').css('display', 'block');
	});


	$('.history-menu-link').click(function(e){
		$('#history-overlay-container').css('display', 'none');
		$('#what-are-aia-contract-documents').css('display', 'block');
	});	





	var dashedLine = $('.dashed'),
	tl;

	// START OF: animation city building when once in the viewport =====
	var animateCity = {
		DOM: {
			$svgBox: $('.js-city-building-block')
		},
		start: function () {
			$('body').addClass('animation-draw-city-build-shapes');
		},
		bind: function () {
			var self = this;
			$(window).scroll(function() {
				if( $(window).scrollTop() > self.DOM.$svgBox.offset().top - 100 ) {
					self.start();
				}
			});
		}
	};
	animateCity.bind();
	// ===== END OF: animation city building when once in the viewport
});