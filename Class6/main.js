console.log("hello world main.js");



$("#sonnet").css("color", "red")

console.log($("#sonnet").text())

$("#my-form").hide()

$("#show-form-btn").click( function() {
  $("#my-form").show()
})



// Grab the text from a form input
function handleClick(){
  var inputValue = $("#thingInput").val();
  console.log("User typed in: ", inputValue);
}

$("#addBtn").click(handleClick);

// Make stuff move!!!
$("#songHider").click(function () {
  $("#container").toggle();
});




// There are other kinds of events, too, like keyboard events:
$("#firstName").keyup(function () { //event listener
  $(".echo").html($(this).val());
});

// $("#container").find("h1").css( "color", "blue" )
// $("#container").children().css( "color", "blue" )
