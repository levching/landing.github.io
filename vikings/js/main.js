$(function(){

	$('[data-fancybox]').fancybox({
    youtube : {
        controls : 1,
        showinfo : 0
    }
	});

	 $('.heroes__img').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  prevArrow: '<button class="slick-btn slick-prev"><img src="images/arrow-left.svg" alt="Прошлый слайд"></button>',
	  nextArrow: '<button class="slick-btn slick-next"><img src="images/arrow-right.svg" alt="Следующий слайд"></button>',
	  asNavFor: '.heroes__info',
	  responsive: [
	    {
	      breakpoint: 620,
	      settings: {
	        arrows: false,
	        autoplay: true,
	      }
	    }
	  ]
	});
	$('.heroes__info').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  asNavFor: '.heroes__img',
	  arrows: false,
	  fade: true,
	});

});

function showMenu() {
	document.getElementsByClassName('menu__list')[0].classList.toggle("menu__list--js");
}

