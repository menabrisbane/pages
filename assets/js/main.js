<!-- ================================================== -->
<!-- =============== START STARTER JS ================ -->
<!-- ================================================== -->
	
jQuery(document).ready(function(){
	
	"use strict";



	// FitVides Option
	jQuery("html").fitVids({ customSelector: "iframe"});

	// LightBox Options
	jQuery(".attachment").find('a > img:not(.attachment-thumbnail)').parent().attr('rel','gallery').fancybox({
		fitToView: true,
		autoSize :  true,
		margin : 30,
		autoScale : true,
		width : '100%',
		height : '100%',
		showNavArrows: true,
		showCloseButton: true,
		helpers : {
			media : {}
		}
	});

    jQuery('#playlist-toggle').on('click', function(){
        jQuery('#playlist-wrapper').fadeToggle();
    });

	jQuery(".star").each(function() {
    	postars(jQuery('.cover').get(0)).init();
	});

	jQuery(".lightbox").attr('rel','gallery').fancybox({
		fitToView: true,
		autoSize :  true,
		margin : 30,
		autoScale : true,
		width : '100%',
		height : '100%',
		showNavArrows: true,
		showCloseButton: true,
		helpers : {
			media : {}
		}
	});

  jQuery('.slider-container.fixed .cover-container').each(function(){

    var fadeStart= 0
      ,fadeUntil= 400
      ,fading = jQuery(this);
      
    jQuery(window).bind('scroll', function(){
      var offset = jQuery(document).scrollTop()
        ,opacity=0;
      if( offset<=fadeStart ){
        opacity=1;
      }else if( offset<=fadeUntil ){
        opacity=1-offset/fadeUntil;
      }
      fading.css('opacity',opacity);
    });

  });

  // Go to top button
    jQuery(window).load(function(){
       jQuery(window).scroll(function(){

          if(jQuery(document).scrollTop() > 300)
          {    
              jQuery('.back-to-top').css({bottom:"50px"});
          }
          else
          {  
             jQuery('.back-to-top').css({bottom:"-80px"});
          }
      }); 
      jQuery('#overlay').fadeOut();
    });
     
  jQuery('.back-to-top').on("click",function(){
      jQuery('html, body').animate({scrollTop:0}, 'slow');
      return false;
  }); 
// End button top

	//LOGO
	jQuery('.change-logo').on('scrollSpy:enter', function() {
		jQuery('.logo-container-top').addClass('affix');

	});

	jQuery('.change-logo').on('scrollSpy:exit', function() {
		jQuery('.logo-container-top').removeClass('affix');
	});

	jQuery('.change-logo').scrollSpy();

	jQuery('.change-menu').on('scrollSpy:enter', function() {
		jQuery('.open-menu').addClass('affix');
	});

	jQuery('.change-menu').on('scrollSpy:exit', function() {
		jQuery('.open-menu').removeClass('affix');
	});

	jQuery('.change-menu').scrollSpy();

 jQuery('#back-to-top').on('click', function (e) {
        e.preventDefault();
        jQuery('html,body').animate({
            scrollTop: 0
        }, 900);
    });

	//Isotope
	function isotope() {

	  var container = jQuery('.list-albumsInner .filterIsotope');

	  container.imagesLoaded(function() {

	   container.isotope();

	  });

	  container.isotope();

	  var jQueryoptionSets = jQuery('.secondAlbumCategories .filterIsotope'),

	  jQueryoptionLinks = jQueryoptionSets.find('a');

	  jQueryoptionLinks.on("click", function(){

	   var jQuerythis = jQuery(this);

	   if ( jQuerythis.hasClass('selected') ) {

	    return false;

	   }
	   var jQueryoptionSet = jQuerythis.parents('.secondAlbumCategories .filterIsotope');

	   jQueryoptionSet.find('.selected').removeClass('selected');

	   jQuerythis.addClass('selected');

	   var options = {},

	    key = jQueryoptionSet.attr('data-option-key'),

	    value = jQuerythis.attr('data-option-value');

	   value = value === 'false' ? false : value;

	   options[ key ] = value;

	   if ( key === 'layoutMode' && typeof changeLayoutMode === 'function' ) {

	    changeLayoutMode( jQuerythis, options )

	   } else {

	    container.isotope( options );

	   }

	   return false;

	  });

	 };

	 isotope();

	 jQuery(window).resize(function(){

	  isotope();

	 });
	
	// "single-post-content" is the class of blog-single content container
	jQuery(".single-post-content").find('a > img').parent().attr('rel','gallery').fancybox({
		fitToView: true,
		autoSize :  true,
		margin : 30,
		autoScale : true,
		width : '100%',
		height : '100%',
		showNavArrows: true,
		showCloseButton: true,
		helpers : {
			media : {}
		}
	});

	// === Header Nav BG ===
    jQuery(window).scroll(function(){
        if(jQuery(document).scrollTop() > 200)
        {    
            jQuery('.topContainerHeader').addClass('scroll-BG');
        }
        else
        {  
           jQuery('.topContainerHeader').removeClass('scroll-BG');
        }
    });

    /***********************************************************************************************/
    /* BREAD */
    /***********************************************************************************************/
    var wH = jQuery(window).height() ;
    jQuery('.breadcrumb-fullscreen:not(.breadcrumbCustom)').css('height',wH);
    jQuery('.breadcrumb:not(.breadcrumb-fullscreen)').each(function(){
        
        jQuery('header.header').addClass('no-breadcrumb-fullscreen');

    });

    jQuery('.breadcrumb.breadcrumb-video-content').each(function(){
        
        jQuery('header.header').removeClass('no-breadcrumb-fullscreen');

    });

    //Br options
    jQuery(function(){

    "use strict";

    var breadcrumbH = jQuery('.breadcrumb').outerHeight();

    if (jQuery(window).width() >= 1200){  
      jQuery('.breadcrumb-video-content').each(function(){

        breadcrumbH = (jQuery('.breadcrumb').outerHeight() - 250);

      });
    };

    jQuery('.breadcrumb-video-content').each(function(){

      breadcrumbH = (jQuery('.breadcrumb').outerHeight() - 75);

    });

    jQuery('.breadcrumb-fullscreen-parent').after('<div class="before-affix-breadcrumb"></div>');

    var wH = jQuery(window).height();

    jQuery('.breadcrumb > *').each(function(){

      var fadeStart= 0
          ,fadeUntil= 400
          ,fading = jQuery(this);

      jQuery(window).bind('scroll', function(){
          var offset = jQuery(document).scrollTop()
              ,opacity=0
          ;
          if( offset<=fadeStart ){
              opacity=1;
          }else if( offset<=fadeUntil ){
              opacity=1-offset/fadeUntil;
          }
          fading.css('opacity',opacity);
      });

    });

    function affixPhoneMenu() {

      jQuery('header.header').addClass('phone-menu-bg');

      jQuery('.phone-menu-bg').affix({
          offset: {
            top: 50
          }
      });

    };

    function unAffixPhoneMenu() {

      jQuery('header.header').removeClass('phone-menu-bg');

    };

    if (jQuery(window).width() <= 768){
          affixPhoneMenu();
        } else {
         jQuery(window).resize(function(){
          if (jQuery(window).width() <= 768){
            affixPhoneMenu();
          }
      });
    };

    if (jQuery(window).width() >= 768){
          unAffixPhoneMenu();
        } else {
         jQuery(window).resize(function(){
          if (jQuery(window).width() >= 768){
            unAffixPhoneMenu();
          }
      });
    };

    jQuery('.breadcrumb-fullscreen-parent:not(.breadcrumbCustom)').affix({
        offset: {
          top: function () {
            return (this.top = ((jQuery(window).height() / 100 * 95) - 69))
          }
        }
    });

    jQuery('.breadcrumb-fullscreen-parent.breadcrumbCustom').affix({
        offset: {
          top: function () {
            return (this.top = breadcrumbH - 83);
          }
        }
    });

    jQuery('.eventBread .player').each(function(){
      var evH = jQuery(window).height() / 100 * 95;
      jQuery(this).css('height', evH);
    });

    jQuery('.sliderContainerBreadcrumb').each(function(){

      var vHCB = jQuery(window).height() / 100 * 95;

      // jQuery('.before-FullscreenSlider').css({'height':vHCB});

    });

    jQuery('header.header').affix({
        offset: {
          top: function () {
            return (this.top = (breadcrumbH - 120))
          }
        }
    });

    jQuery('header.header').on('affix.bs.affix', function () {

            jQuery('.project-single').addClass('affix');

        });

        jQuery('header.header').on('affix-top.bs.affix', function () {

            jQuery('.project-single').removeClass('affix');

        });

    function fullScreenBreadcrumb() {

        jQuery('.breadcrumb-fullscreen-parent:not(.breadcrumbCustom)').on('affix-top.bs.affix', function () {

            jQuery('.before-FullscreenSlider').css('height',0);

            if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {

              jQuery(this).css('bottom',0);

            };

        });

        jQuery('.breadcrumb-fullscreen-parent:not(.breadcrumbCustom)').on('affix.bs.affix', function () {

            jQuery('.before-FullscreenSlider').css('height',jQuery(window).height() / 100 * 95);

            if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {

              jQuery(this).css('bottom',wH - 69);

            };

        });

        jQuery('.breadcrumb-fullscreen-parent.breadcrumbCustom').on('affix-top.bs.affix', function () {

            jQuery('.before-FullscreenSlider').css('height',0);

            if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {

              jQuery(this).css('bottom',0);

            };

        });

        jQuery('.breadcrumb-fullscreen-parent.breadcrumbCustom').on('affix.bs.affix', function () {

            jQuery('.before-FullscreenSlider').css('height',breadcrumbH);

            if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {

              jQuery(this).css('bottom',wH - 69);

            };

        });

    };

    function splitEqual() {

        jQuery('.split-equal').each(function(){

          var bigImageH = jQuery(this).find('.big-image').outerHeight();

          jQuery('.padding-content > div').css('height', bigImageH - 160 );

        });

    };

    fullScreenBreadcrumb();

    jQuery(window).resize(function(){

        fullScreenBreadcrumb();

        splitEqual();

    });

});
	jQuery(function(){

  "use strict";

   function portfolioSingleAffix() {

        var breadcrumbHH = jQuery('.breadcrumb').outerHeight();

        if (jQuery('.breadcrumb-video-content').length) {

            breadcrumbHH = jQuery('.breadcrumb').outerHeight() - 70;

        };

        jQuery('.portfolio-single').affix({
            offset: {
              top: breadcrumbHH - 75
            }
        });

        jQuery('.portfolio-single').on('affix.bs.affix', function () {

            jQuery('header.header').addClass('affix');

        });

        jQuery('.portfolio-single').on('affix-top.bs.affix', function () {

            jQuery('header.header').removeClass('affix');

        });

        var portfolioSingleHeight = function() {

          var windowHeight = jQuery(window).height() ,
              portfolioSingleHeaderH = jQuery('.header-portfolio-single').outerHeight() ,
              portfolioSingleFooterH = jQuery('.footer-portfolio-single').outerHeight() ,
              footerH = jQuery('footer.footer').outerHeight() ,
              fromTopH = 229 + portfolioSingleHeaderH + portfolioSingleFooterH ,
              finalPortfolioSingleContentH = windowHeight - fromTopH - footerH ;

          jQuery('.content-portfolio-single').css({

            'max-height' : finalPortfolioSingleContentH ,

            'padding' : '0' ,

            'margin' : '40px 0'

          });

        }

        portfolioSingleHeight();

        jQuery(window).resize(function(){

          portfolioSingleHeight();

        });

    };

    portfolioSingleAffix();

    jQuery(window).resize(function(){

      portfolioSingleAffix();

    });

    jQuery('.portfolio-single .footer-portfolio-single .social-icons a i.fa-plus').parent().parent().css('display','inline-block');

    jQuery('.portfolio-single .footer-portfolio-single .social-icons a i.fa-plus').parent().on('click',function(e){

      e.preventDefault();

      jQuery('.portfolio-single .footer-portfolio-single .social-icons li').css('display','inline-block');

      jQuery(this).parent().hide();

    });

});
  
  jQuery(function(){

    jQuery(function(){

        var videoID = jQuery('.video-bg').attr('id');

        jQuery('.video-bg').okvideo({ 
           source: videoID,
           volume: 0,
           loop: true,
           hd:true,
           adproof: true,
           annotations: false
        });

    });

    jQuery(".breadcrumb").fitVids({ customSelector: "iframe"});

  });
   /***********************************************************************************************/
   /* END BREAD */
   /***********************************************************************************************/

   /***********************************************************************************************/
   /* SEARCH FORM */
   /***********************************************************************************************/
   // jQuery( ".searchWidgetS" ).on('click',
   //    function() {
   //      jQuery(".albumsSecondContainer secondAlbumCategories").addClass( "click" );
   //    }, function() {
   //      jQuery(".albumsSecondContainer secondAlbumCategories").removeClass( "click" );
   //    }
   //  );
   /***********************************************************************************************/
   /* END SEARCH FORM */
   /***********************************************************************************************/

	/***********************************************************************************************/
	/* CAROUSEL */
	/***********************************************************************************************/
	jQuery("#owl-demo").owlCarousel({
    items:1,
    navigation:true,
    pagination:false,
    navText: ['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>']
	});
  // Custom Navigation Events

  //Page Loader

    jQuery('.page-loader').delay(800).fadeOut('slow');

    //Page Loader Ends
    
	/***********************************************************************************************/
	/* END CROUSEL */
	/***********************************************************************************************/

	/***********************************************************************************************/
	/* MENU */
	/***********************************************************************************************/
	jQuery('.open-menu').on('click', function(){

		jQuery(this).toggleClass('active');

		jQuery('.menu-fixed-container').toggleClass('open');

	});

	jQuery('.x-filter').on('click',function(){

		jQuery('.open-menu').toggleClass('active');

		jQuery('.menu-fixed-container').toggleClass('open');

	});

	jQuery('.menu-fixed-container > nav > ul > li > a').on('click',function(){

        jQuery(this).parent().siblings().toggleClass('no-hovered');
        jQuery(this).parent().toggleClass('click');
        jQuery(this).parent().siblings().removeClass('click'); 
    });

    // jQuery('.menu-fixed-container > nav > ul > li > .sub-menu').hover(function(){

    //     jQuery(this).parent().siblings().toggleClass('no-hovered');

    // });

    jQuery('.menu-fixed-container > nav > ul > li > .sub-menu').parent().addClass('hover-sub-menu');

    jQuery('.menu-fixed-container > nav > ul > li  > .sub-menu').on('click',function(){

        jQuery(this).parent().toggleClass('hovered-sub-menu ');

    });

    jQuery('.menu-fixed-container nav ul li .sub-menu').parent().find('> a').on('click', function(e){

    	e.preventDefault();

    });

	/***********************************************************************************************/
	/* END MENU */
	/***********************************************************************************************/
	
	/***********************************************************************************************/
	/* ROYAL SLIDER */
	/***********************************************************************************************/
	function royalSliderAva() {

		jQuery('#ava-slider').each(function(){

			var wH = jQuery(window).height();

			jQuery(this).parent().css('height',wH);
			
			jQuery(this).css('height',wH);

			jQuery(this).royalSlider({
			  arrowsNav: true,
			  loop: false,
			  keyboardNavEnabled: true,
			  controlsInside: false,
			  fadeinLoadedSlide: true,
			  imageScaleMode: 'fill',
			  arrowsNavAutoHide: false,
			  autoScaleSlider: false,
			  controlNavigation: false,
			  thumbsFitInViewport: false,
			  navigateByClick: true,
			  startSlideId: 0,
			  autoPlay: false,
			  transitionType:'move',
			  globalCaption: false,
			  slidesSpacing: 0,
			  deeplinking: {
		    enabled: true,
		    change: false,

			  },
			});
		});
	};

  function afterRSInit() {

    jQuery('.rsContent .rsImg').each(function(){

      var thisSrc = jQuery(this).attr('src');

      jQuery(this).hide();

    });

    jQuery(window).scroll(function(){

      var actualScroll = jQuery(window).scrollTop() * 0.5;

      jQuery('.rsContent').css({
        'background-position': '50% ' + actualScroll + 'px'
      });

      console.log(actualScroll);

    });

  }

  afterRSInit();

	royalSliderAva();

	jQuery(window).resize(function(){

    afterRSInit();

		royalSliderAva();

	});
	/***********************************************************************************************/
	/* END ROYAL SLIDER */
	/***********************************************************************************************/

  // Open Close Player on scroll
  jQuery(".homeNormal").addClass("close-down");
  jQuery(window).on("scroll", function () {
//      if (jQuery(this).scrollTop() > -1) {
//          jQuery(".homeNormal").addClass("close-down");
//          jQuery("#h-player").addClass("rotate");
//      }
//      else {
//          jQuery(".homeNormal").removeClass("close-down");
//          jQuery("#h-player").removeClass("rotate");
//      }
  });
  jQuery(window).on("scroll", function () {
      if (jQuery(this).scrollTop() > 5500) {
          jQuery(".homeCustom").addClass("close-down");
          jQuery("#h-player").addClass("rotate");
      }
      else {
          jQuery(".homeCustom").removeClass("close-down");
          jQuery("#h-player").removeClass("rotate");
      }
  });
  // Open Close Player Button
  jQuery('#h-player').on('click', function() {
      jQuery(this).toggleClass("rotate")
      jQuery(".jplayer-home").toggleClass("close-down");
  });

  jQuery(window).on("scroll", function () {
      if (jQuery(this).scrollTop() > 5) {
          jQuery(".buttonBar").addClass("close-video");
      }
      else {
          jQuery(".buttonBar").removeClass("close-video");
      }
  });

  
	/***********************************************************************************************/
	/*  RATE*/
	/***********************************************************************************************/
	function starRate() {

    jQuery('.formShop form .stars span a.active').each(function(){

        jQuery(this).prev().addClass('hover-02')

        jQuery(this).prev().prev().addClass('hover-02')

        jQuery(this).prev().prev().prev().addClass('hover-02')

        jQuery(this).prev().prev().prev().prev().addClass('hover-02')

        jQuery(this).next().removeClass('hover-02')

        jQuery(this).next().next().removeClass('hover-02')

        jQuery(this).next().next().next().removeClass('hover-02')

        jQuery(this).next().next().next().next().removeClass('hover-02')

    });
};
	/***********************************************************************************************/
	/* END RATE */
	/***********************************************************************************************/
	
	/***********************************************************************************************/
	/* INSTAGRAM */
	/***********************************************************************************************/
	var feedSidebar = new Instafeed({
        //get: 'tagged',
        //tagName: 'NichifyPerspectives', // place your tage here
        get: 'user',
        userId: 2143300160,
        sortBy: 'most-liked',
        clientId: 'b65a53a5cc0540769b7cf79ea333348c', // place the client id here
        template: '<li><a href="{{link}}" target="_blank"><img class="img-responsive" src="{{image}}" /></a></li>',
        target: 'instagram-sidebar-widget',
        limit: 6,
        resolution: 'low_resolution',
    });
    if (jQuery('#instagram-sidebar-widget').length>0) {
        feedSidebar.run();
    }
    /***********************************************************************************************/
    /* END INSTAGRAM */
    /***********************************************************************************************/
	
	/***********************************************************************************************/
	/* VIDEO */
	/***********************************************************************************************/
	jQuery(function(){
      jQuery(".player").YTPlayer();
    });
	/***********************************************************************************************/
	/* END VIDEO */
	/***********************************************************************************************/

	//Border
	// if (jQuery().length > 0) {}
	// 	else{
	// 		jQuery(".topContainerHeader").addClass("borderSolid");
	// 	};
	//End BOrder

  //Button
    //Button
    jQuery('.jplayerButton').on('click', function(){

    jQuery(this).toggleClass('active');

    jQuery('.playlist-toggle').toggleClass('open');

  });


	/***********************************************************************************************/
	/* COUNTER */
	/***********************************************************************************************/
	if ( jQuery( '.sm-countdown' ).length > 0 ) {
	
			jQuery( '.sm-countdown' ).each( function() {
				var jQuerythis = jQuery( this );
				jQuerythis.ccountdown( jQuerythis.data( 'date' ) );
			} );
			jQuery( '.sm-countdown.sm-style1 .element' ).knob({
				draw : function () {
					var a = this.angle(this.cv)  // Angle
						, sa = this.startAngle		 // Start angle
						, ea = sa + a				 // End angle
						, r = true
						, delta_deg = 6
						, delta_rad = delta_deg / 180 * Math.PI;
	
					this.g.lineWidth = this.lineWidth;
	
					this.g.strokeStyle = r ? this.o.fgColor : this.fgColor ;
					var sa_deg = parseInt(sa / Math.PI * 180, 10) % 360;
					var ea_deg = parseInt(ea / Math.PI * 180, 10) % 360;
					var idx =0 ;
					if (ea_deg < sa_deg) ea_deg += 360;
					var ea_deg_round = Math.round(ea_deg / delta_deg) * delta_deg;
					for (var ta_deg = sa_deg; ta_deg <= ea_deg_round; ta_deg += delta_deg) {
						this.g.beginPath();
						var ta_rad = ta_deg / 180 * Math.PI;
						this.g.arc(this.xy, this.xy, this.radius, -( ta_rad - delta_rad / 4 ), -( ta_rad + delta_rad / 4 ), true); 
						this.g.stroke();
					}
					var rs_deg = ea_deg_round + delta_deg;
					for (var ta_deg = rs_deg; ta_deg < sa_deg + 360; ta_deg += delta_deg) {
						this.g.beginPath();
						var ta_rad = ta_deg / 180 * Math.PI;
						this.g.strokeStyle = this.o.bgColor;
						this.g.arc(this.xy, this.xy, this.radius, -( ta_rad - delta_rad / 4) , -( ta_rad + delta_rad / 4 ), true); 
						this.g.stroke();
					}
					return false;
				}
			} );
		}
	/***********************************************************************************************/
	/* END COUNTER */
	/***********************************************************************************************/

	/***********************************************************************************************/
	/* JPLAYER */
	/***********************************************************************************************/
	

        // jQuery('.btnPlay').on('click',function(e){

        //   e.preventDefault();
        //   jQuery(".jPlayer-fixed").removeClass("close-down");
        //   var thisSong = jQuery(this).attr('data-song'),
        //       thisTitle = jQuery(this).attr('data-title'),
        //       thisArtist = jQuery(this).attr('data-artist');

        //   console.log(thisSong,thisTitle,thisArtist);

        //   jQuery("#jquery_jplayer_1").jPlayer("setMedia", {
        //     title: thisTitle,
        //     mp3: thisSong,
        //     artist: thisArtist
        //   }).jPlayer("play");

        // });
	/***********************************************************************************************/
	/* END JPLAYER */
	/***********************************************************************************************/
});


<!-- ================================================== -->
<!-- =============== END STARTER JS ================ -->
<!-- ================================================== -->
