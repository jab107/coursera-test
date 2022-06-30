// DOM manipulation
// console.log(document.getElementById("title"));
// console.log(document instanceof HTMLDocument);

// Step 1 - Get Name //
// function sayHello () {
//   console.log(
//     document.getElementById("name").value
//   );
// }

// Step 2 - Whole Function //
function sayHello () {
    var name = document.getElementById("name").value;
    var message = "<h2>Hello " + name + "!</h2>";

    document.getElementById("content").innerHTML = message;

    if (name === "student"){
      var title = 
        document.querySelector("#title").textContent;
        title += " & Lovin' it!";
        document.querySelector("h1").textContent = title;
    }
  }


//  Unobstrusive Event Binding

document.querySelector("button").addEventListener("click", sayHello);