$(document).ready(function(){  
    //Slider header
    $(".slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        focusOnSelect: false,
        arrows: true,
    });

    //menu
    $('.btn').click(function(){
    $('.nav').toggleClass('active');
    $('.btn').toggleClass('active');
  });
    
    //Slider testimonials
    $(".comments").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        focusOnSelect: false,
        arrows: true,
    });
    
    //scroll
    
    $("#nav").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});

});