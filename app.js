// jshint esversion:6

var number = 0;
var inputmax = 0;

function myFunction() {
  inputmax = document.getElementById("maxvalue").value;
  number = Math.floor(Math.random()*(inputmax+1));
  document.getElementById("Text").innerHTML = number;


}

function generatePassword() {
    var length = 8,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    document.getElementById("Text1").innerHTML = retVal;
}




// var slider = document.getElementById("myRange");
// var output = document.getElementById("demo");
// output.innerHTML = slider.value;
//
// slider.oninput = function() {
//   output.innerHTML = this.value;
// }
