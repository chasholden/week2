//We need a new *spirit of community*, a sense that we are all *in this together*, or the *American Dream* will continue to *wither*. Our destiny is bound up with the destiny of *every other American*.
var static1 = "We need a new ";
var static2 = ", a sense that we are all ";
var static3 = ", or the ";
var static4 = " will continue to ";
var static5 = ". Our destiny is bound up with the destiny of ";
var static6 = ".";

var button = document.getElementById("submit");

button.addEventListener("click", onClick, false);

function onClick(evt)
{
  evt.preventDefault(evt);
  
  var element1 = document.getElementById("form1").elements.item(0).value;
  var element2 = document.getElementById("form1").elements.item(1).value;
  var element3 = document.getElementById("form1").elements.item(2).value;
  var element4 = document.getElementById("form1").elements.item(3).value;
  var element5 = document.getElementById("form1").elements.item(4).value;
  console.log(static1 + element1 + static2 + element2 + static3 + element3 + static4 + element4 + static5 + element5 + static6);
  
}