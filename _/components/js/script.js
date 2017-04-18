/*
$("#ingredients-trigger").click(function(){
	
		$(".container").toggleClass("show").fadeIn(3000);
	
})
*/
$(function() {

	var displayPanel = document.getElementById("display-content");
	var ingredientContent = document.getElementById("ingredients-content").innerHTML;

  $('.panel').click(function(event) {
  	/*
  	alert(displayPanel);
  	*/
  	  	displayPanel.innerHTML=ingredientContent;

       if($("displayPanel").hasClass("show"))
      {
         // alert();
       $("displayPanel").slideToggle("slow", function() { 
         $("displayPanel").removeClass('show');
      });
        
      } else {
          
          //alert('no class');
      $("displayPanel").slideToggle("slow", function() { 
         $("displayPanel").addClass('show'); 

      });
      }
		
  });
  
});