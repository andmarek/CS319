var elements = document.getElementById("test").elements;

var toAdd = document.createElement("p");
var regExp = new RegExp("^[a-zA-Z0-9]*$");
// Let's create some text
var myNode = document.createTextNode("What's poppin'");
toAdd.append(myNode); 

function clickMe() {
    for (var i = 0, element; element = elements[i++];) {

        // Tests for alphanumeric
        if (regExp.test(element.value)) {
            alert("Must be alphanumeric");
        }
        if (element.type === "text" && element.value === "")
        //Let's write what HTML forms are empty
            alert(i + " forms empty.");
        //alpha numeric using regexp
        
    }
}