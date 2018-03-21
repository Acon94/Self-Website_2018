$(window).scroll(function(event) {
	function footer()
    {
        var scroll = $(window).scrollTop();
        if(scroll > 5)
        {
            $(".footer").fadeIn("slow").addClass("show");
        }
        else
        {
            $(".footer").fadeOut("slow").removeClass("show");
        }

        clearTimeout($.data(this, 'scrollTimer'));
        $.data(this, 'scrollTimer', setTimeout(function() {
            if ($('.footer').is(':hover')) {
	        	footer();
    		}
            else
            {
            	$(".footer").fadeOut("slow");
            }
		}, 7000));
    }
    footer();
});
