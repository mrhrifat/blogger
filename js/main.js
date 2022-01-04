$(document).ready(function(){

	//Owl Carousel
	$('#blog .owl-carousel').owlCarousel({
		loop:true,
		autoplay:true,
		autoplayTimeout:3000,
		dots:false,
		nav:true,
		navText:[ $('.owl-navigation .owl-nav-prev'),
		$('.owl-navigation .owl-nav-next')],
		responsive:{
			0:{
				items:1
			},
			544:{
				items:2
			},
			767:{
				items:3
			}
		}
	});


	// Navbar Fixed

	let nav_offset_top=$('#header').height()+50;

	function navbarFixed(){
		if($('#header').length){
			$(window).scroll(function(){
				let scroll = $(window).scrollTop();

				if(scroll >= nav_offset_top){
					$('#header  .main').addClass('navbar_fixed');
				}else{
					$('#header .main').removeClass('navbar_fixed');
				}
			});
		}
	}
	navbarFixed();


	// Click to Scroll Up
	$('footer .move span').click(function(){
		$('html,body').animate({
			scrollTop:0
		},1500);
	});


	// Aos Isntance
	AOS.init();


// 	let $btns = $('#portfolio .button-group button');

// 	$btns.click(function(e){

// 		$('#portfolio .button-group button').removeClass('active');

// 		e.target.classList.add('active');


// 		let selector = $(e.target).attr('data-filter');

// 		$('#portfolio .grid').isotope({
// 			filter:selector
// 		});

// 		return false;
// 	});


// 	$('#portfolio .button-group #btn1').trigger('click');

// 	$('#portfolio .grid .test-popup-link').magnificPopup({
// 		type: 'image',
// 		gallery:{enabled:true}
// 	});


});