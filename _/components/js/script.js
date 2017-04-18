// Add trigger to display content
$(function() {

  $(".trigger").click(function(event) {
  
    var contentElement = this.nextElementSibling; // Variable for the content element

    // Check the class status 
    if($(contentElement).hasClass("content")){
     
      $(contentElement).slideToggle("slow", function() { 
        $(contentElement).removeClass('content');
      });
      
    } else {  

      $(contentElement).slideToggle("slow", function() { 
        $(contentElement).addClass('content'); 
      });

    }
      
  });
  
});
