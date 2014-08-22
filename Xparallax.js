
/*
* Horizontal parallax for vertical scroll
* author: Montgomery Hatch
*/

(function($){
	var $window = $(window);
	
	$.fn.Xparallax = function(speedFactor, ypos){
		var $$ = $(this);

		//default arguments
		if (arguments.length < 1 || speedFactor === null) speedFactor = 0.1;
		if (arguments.length < 2 || ypos === null) ypos = "50%";	
		
		//function called when window is scrolled
		function update(){
			var scrollPos = $window.scrollTop();
			
			$$.each(function(){
				//console.log('this.each');
				//console.log('scrollpos ', scrollPos)

				//calculation for x position
				var xpos = Math.round(-(scrollPos * speedFactor));
				
				//change background-position style attribute
				$$.css('background-position', xpos + "px " + ypos);
				
			});
		}

		$window.bind('scroll', update);
			update();
	};
})(jQuery);


// call function
(function($) {
  'use strict';

  $(document).ready(function() {

	$('#fixed-bg').Xparallax(1.2);

  });

})(jQuery);
