$(document).ready(function() {
  $("#owl-demo").owlCarousel({
      navigation : false, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
      autoPlay: true
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });
  
  $("#owl-photo").owlCarousel({
      autoPlay: 5000, //Set AutoPlay to 3 seconds
      items : 1,
      itemsDesktop : [600],
      itemsDesktopSmall : [600]
  });
 
});