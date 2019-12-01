//https://onextrapixel.com/how-to-use-jquery-to-make-slick-page-transitions/

$(document).ready(function() {
	
	$("body").css("display", "none");

    $("body").fadeIn(500);
    
	$("a.transition").click(function(event){
		event.preventDefault();
		linkLocation = this.href;
		$("body").fadeOut(500, redirectPage);		
	});
		
	function redirectPage() {
		window.location = linkLocation;
	}

});