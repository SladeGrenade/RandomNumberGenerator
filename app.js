// jshint esversion:6

var number = 0;
var inputmax = 0;

function myFunction() {
  inputmax = document.getElementById("maxvalue").value;
  number = Math.floor(Math.random()*inputmax);
  document.getElementById("Text").innerHTML = number;


}






// var slider = document.getElementById("myRange");
// var output = document.getElementById("demo");
// output.innerHTML = slider.value;
//
// slider.oninput = function() {
//   output.innerHTML = this.value;
// }
