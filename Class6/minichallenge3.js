//1. Add a .click() event handler to the submit button using its id "submit-button" so that when the button is clicked, log to the console "Submit button was clicked
$("#submit-button").click(function() {
    console.log( "submit button for .click() called." );
    var emailField = $('#emailField').val();
  var password = $('#passwordField').val();
    console.log("credentials: " + emailField + " " + password)
  });
  //2. In the event handler function, get the values the user enters in the email and password fields in the form so that when the submit button is clicked, log to console, the values from the input fields in the form.
  // var emailField = $('#emailField').val();
  // var password = $('#passwordField').val
