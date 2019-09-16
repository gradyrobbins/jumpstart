//1. On page load, hide the unordered list with class "item-list".
$(document).ready(function() {
    $('.item-list').hide();
 });

 //2. When a user hovers over the h3 element with id "toggle-header", use the toggle jQuery method to show/hide the list with class "item-list".

 $("#toggle-header").hover(function(){
   $(".item-list").toggle();
   } )
 ;


 //3. Add a event listener to the input field with id "keypress-input" so that on keypress, the value in the input field is displayed in the div with id "output-target".



 $(document).ready(function(){
     $("#keypress-input").on("input", function(e){
         // Print entered value in a div box
         $("#output-target").text($(this).val());
     });
 });

 //4. When the mouse moves anywhere on the article with class "main-article", log to the console "The mouse is moving!".

 $(".main-article").mouseenter(function(){
   console.log("You entered main article!");
 });

 $(".main-article").mouseleave(function(){
   alert("Leaving so soon?");
 });