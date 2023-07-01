;(function( $ ){

	jQuery( document ).ready( function(){
		$floatingWidth = $( '#demo-slide-content' ).outerWidth();
		// toggle
		$("#demobtn-open").click(function(){
		  	$("#demo-slide-content").toggleClass("demo-slide-open");
			$(this).css( 'right', $floatingWidth );
			$(this).css("visibility","hidden");
			$(this).css("opacity","0");

			$('#demobtn-close').css("visibility","visible");
			$('#demobtn-close').css("opacity","1");
			$('#demobtn-close').css( 'right', $floatingWidth );
		});

		$("#demobtn-close").click(function(){
		  	$("#demo-slide-content").toggleClass("demo-slide-open");
			$(this).css( 'right', '0' );
			$(this).css("visibility","hidden");
			$(this).css("opacity","0");
			
			$('#demobtn-open').css("visibility","visible");
			$('#demobtn-open').css("opacity","1");
			$('#demobtn-open').css( 'right', '0' );
		});

		// left slide close
		$(".import-close-btn").click(function(){
		  	$(".demo-floating-right").hide();
		});
	});

	$(window).on( 'scroll' , function(){
  		if( $(window).scrollTop() > 100 ){
      		$(".demo-floating-right").addClass("show-in");
  		}
	});

})( jQuery );