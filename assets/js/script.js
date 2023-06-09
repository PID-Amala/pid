/**
 * Makes "skip to content" link work correctly in IE9, Chrome, and Opera
 * for better accessibility.
 *
 */

 ( function() {
    'use strict';
    var ua = navigator.userAgent.toLowerCase();

    if ( ( ua.indexOf( 'webkit' ) > -1 || ua.indexOf( 'opera' ) > -1 || ua.indexOf( 'msie' ) > -1 ) &&
        document.getElementById && window.addEventListener ) {

        window.addEventListener( 'hashchange', function() {
            var element = document.getElementById( location.hash.substring( 1 ) );

            if ( element ) {
                if ( ! /^(?:a|select|input|button|textarea)$/i.test( element.nodeName ) ) {
                    element.tabIndex = -1;
                }

                element.focus();
            }
        }, false );
}
} )();

/*!
 * EventEmitter v4.2.6 - git.io/ee
 * Oliver Caldwell
 * MIT license
 * @preserve
 */

 (function () {

    'use strict';
    $(window).on('load', function (e){
        $('#preloader').fadeOut('slow',function(){$(this).remove();});
    });
    // search form
    $('.close-search-form').on('click', function (e){
        $('.full-top-search-form').removeClass('show');
    });
    // full top search
    $('.button-show-search').on('click', function (e){
        $('.full-top-search-form').toggleClass('show');
    });

    // scroll map
    $('.kc-google-maps').on('click', function (e) {
        $('.kc-google-maps iframe').css("pointer-events", "auto");
    });
})(jQuery)

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires+";path=/";
}

function getCookie(cname) {
    'use strict';
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
}


(function ($) { 
    'use strict';
    $('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');

    $('.tab ul.tabs li a').on('click' , function () { 
        var tab = $(this).closest('.tab'), 
        index = $(this).closest('li').index();

        tab.find('ul.tabs > li').removeClass('current');
        $(this).closest('li').addClass('current');

        tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
        tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();

        return false;
    } );
})(jQuery)

$('.counterup').counterUp({
    delay: 10,
    time: 2000
});


var animTime = 300,
clickPolice = false;

$(document).on('touchstart click', '.acc-btn', function() {
    if (!clickPolice) {
      clickPolice = true;

      var currIndex = $(this).index('.acc-btn'),
      targetHeight = $('.acc-content-inner').eq(currIndex).outerHeight();

      $('.acc-btn h1').removeClass('selected');
      $(this).find('h1').addClass('selected');

      $('.acc-content').stop().animate({
        height: 0
    }, animTime);
      $('.acc-content').eq(currIndex).stop().animate({
        height: targetHeight
    }, animTime);

      setTimeout(function() {
        clickPolice = false;
    }, animTime);
  }

});

$('.testimonials-body').owlCarousel({
    loop:true,
    margin:30,
    nav:false,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true,
        },
        400:{
            items:1,
            nav:true,
        },
        600:{
            items:1,
            nav:true,
        },
        700:{
            items:2,
            nav:true,
        },
        1000:{
            items:2,
            nav:true,
            loop:false,

        }
    },
})
$('.partner-sllide-content').owlCarousel({
    loop:true,
    margin:30,
    nav:false,
    responsiveClass:true,
    responsive:{
        0:{
            items:2,
            nav:true,
        },
        400:{
            items:2,
            nav:true,
        },
        600:{
            items:4,
            nav:true,
        },
        700:{
            items:5,
            nav:true,
        },
        1000:{
            items:6,
            nav:true,
            loop:false,

        }
    },
})

$('.testimonial-slide-content').owlCarousel({
    loop:true,
    margin:30,
    nav:false,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true,
        },
        400:{
            items:1,
            nav:true,
        },
        600:{
            items:1,
            nav:true,
        },
        700:{
            items:1,
            nav:true,
        },
        1000:{
            items:1,
            nav:true,
            loop:false,

        }
    },
})

$('.who-we-are-slide-content').owlCarousel({
    loop:true,
    margin:30,
    nav:false,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true,
        },
        400:{
            items:1,
            nav:true,
        },
        600:{
            items:1,
            nav:true,
        },
        700:{
            items:1,
            nav:true,
        },
        1000:{
            items:1,
            nav:true,
            loop:false,

        }
    },
})

$('.who-we-are-slide-conten-2').owlCarousel({
    loop:true,
    margin:30,
    responsiveClass:true,
    navText: [ '<i class="fa fa-angle-left" aria-hidden="true"></i>' , '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    responsive:{
        0:{
            items:1,
            nav:true,
        },
        400:{
            items:1,
            nav:true,
        },
        600:{
            items:1,
            nav:true,
        },
        700:{
            items:1,
            nav:true,
        },
        1000:{
            items:1,
            nav:true,
            loop:false,

        }
    },
})


$('.popup-video').magnificPopup({
    disableOn: 200,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
});



$( document ).ready(function() {
    'use strict';
    /* activate jquery isotope */
    var $container = $('#posts').isotope({
        itemSelector : '.item',
        isFitWidth: true
    });

    $container.isotope({ filter: '*' });

    // filter items on button click
    $('#filters').on( 'click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $container.isotope({ filter: filterValue });
    });
    $('.btn-primary').click(function() {

    //console.log("Clicked");
    $('.btn-primary.active').removeClass('active');
    $(this).addClass('active');
});
});

        // mobile menu
    // mobile menu
    $('[data-toggle="offcanvas"], .btn-offcanvas').on('click', function (e) {
        e.stopPropagation();
        $('#wrapper-container').toggleClass('active');
        $('#apus-mobile-menu').toggleClass('active');           
    });
    
    $('body').click(function() {
        if ($('#wrapper-container').hasClass('active')) {
            $('#wrapper-container').toggleClass('active');
            $('#apus-mobile-menu').toggleClass('active');
        }
    });
    $('#apus-mobile-menu').on('click', function (e) {
        e.stopPropagation();
    });



    // Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Contact Form Submition
	function checkRequire(formId , targetResp){
		targetResp.html('');
		var email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
		var url = /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/;
		var image = /\.(jpe?g|gif|png|PNG|JPE?G)$/;
		var mobile = /^[\s()+-]*([0-9][\s()+-]*){6,20}$/;
		var facebook = /^(https?:\/\/)?(www\.)?facebook.com\/[a-zA-Z0-9(\.\?)?]/;
		var twitter = /^(https?:\/\/)?(www\.)?twitter.com\/[a-zA-Z0-9(\.\?)?]/;
		var google_plus = /^(https?:\/\/)?(www\.)?plus.google.com\/[a-zA-Z0-9(\.\?)?]/;
		var check = 0;
		$('#er_msg').remove();
		var target = (typeof formId == 'object')? $(formId):$('#'+formId);
		target.find('input , textarea , select').each(function(){
			if($(this).hasClass('require')){
				if($(this).val().trim() == ''){
					check = 1;
					$(this).focus();
					targetResp.html('You missed out some fields.');
					$(this).addClass('error');
					return false;
				}else{
					$(this).removeClass('error');
				}
			}
			if($(this).val().trim() != ''){
				var valid = $(this).attr('data-valid');
				if(typeof valid != 'undefined'){
					if(!eval(valid).test($(this).val().trim())){
						$(this).addClass('error');
						$(this).focus();
						check = 1;
						targetResp.html($(this).attr('data-error'));
						return false;
					}else{
						$(this).removeClass('error');
					}
				}
			}
		});
		return check;
	}
	$(".submitForm").on("click", function() {
		var _this = $(this);
		var targetForm = _this.closest('form');
		var errroTarget = targetForm.find('.response');
		var check = checkRequire(targetForm , errroTarget);
		if(check == 0){
			var formDetail = new FormData(targetForm[0]);
			formDetail.append('form_type' , _this.attr('form-type'));
			$.ajax({
				method : 'post',
				url : 'ajax.php',
				data:formDetail,
				cache:false,
				contentType: false,
				processData: false
			}).done(function(resp){
				if(resp == 1){
					targetForm.find('input').val('');
					targetForm.find('textarea').val('');
					errroTarget.html('<p style="color:green;">Mail has been sent successfully.</p>');
				}else{
					errroTarget.html('<p style="color:red;">Something went wrong please try again latter.</p>');
				}
			});
		}
	});





