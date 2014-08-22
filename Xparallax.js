
/*
* Horizontal scrolling parallax
* author: Montgomery Hatch
*/

(function($){
	var $window = $(window);
	
	$.fn.Xparallax = function(speedFactor, ypos){
		var $$ = $(this);

		//default arguments
		if (arguments.length < 1 || speedFactor === null) speedFactor = 0.1;
		if (arguments.length < 2 || ypos === null) ypos = "50%";	
		
		console.log('ypos ', ypos);
		//function called when window is scrolled
		function update(){
			var scrollpos = $window.scrollTop();
			console.log('funct call');
			$$.each(function(){
			console.log('this.each');
			console.log('scrollpos ', scrollpos)
				//calculation for x position
				var xpos = Math.round(-(scrollpos * speedFactor));
				console.log('xpos ', xpos);
				//change inline style position attribute
				$$.css('background-position', xpos + "px " + ypos);
				console.log('background-position', xpos + "px " + ypos);
			});
		}

		$window.bind('scroll', update);
			update();
	};
})(jQuery);


// call
(function($) {
  'use strict';

  $(document).ready(function() {

	$('#fixed-bg').Xparallax(1.2);

  });

})(jQuery);
