
$(document).ready(function(){
 $("#nav-toggle").click(function(){
     $(".nav-menu").addClass("show-menu")

 });

 $("#nav-close").click(function(){
    $(".nav-menu").removeClass("show-menu")

});

/* pop */
$('.pop').magnificPopup({
    type:'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
    
  
  
  });

  $(window).scroll(function(){
    var scr=$(this).scrollTop();
    
    
    //Scroll Top Btn
    if ( scr > 500) { // Fade The Scroll Top Btn
          
      $('.scrollTop').fadeIn();
      
    } else {
      
      $('.scrollTop').fadeOut();
      
    }
    
    
    });
    
    // Scroll to Top
    $('.scrollTop').click(function(){
    $('body,html').animate({
    scrollTop : 0
    },300);
    });
    
  

});