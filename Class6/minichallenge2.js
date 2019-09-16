console.log("hello minichallenge2.js")
//1. Select the ul element and add the class "my-list" to it.
$("ul").addClass("my-list")
//2. Select the first <div> element and then use the .children() method to select the <h3> child of that <div>. (Hint: you'll need to pass a selector into the .children() method). Log the text of the <h3> element to the console.
console.log($("div").children("h3").text())

//3. Select the <section> element and then use the .children() method to select the <section> element's child with an id of "para-two". Append the following text to it: "jQuery is the coolest"
$("section").children("#para-two").append("It is the coolest")

//4. Select the element with class "replace-h3" and replace its text with "Some clever and hilarious text"
$(".replace-h3").replaceWith("<strong>Some clever and hilarious text</strong>")