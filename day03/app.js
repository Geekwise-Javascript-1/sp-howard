/*
var first = prompt("What is your first name?");
var last = prompt("What is your last name?");

console.log(first);
alert(last);

var bool = confirm("Whatever");

alert(bool);
*/

// console.log("5" == 5);

// var firstNum = parseInt(prompt("Input a number value"));
// var secondNum = parseInt(prompt("Input a second number value"));
//
// alert(firstNum+secondNum);

//alert((parseInt(prompt("Input a number value")))+(parseInt(prompt("Input another number value"))));

// var age = parseInt(prompt("How old are you?"));
// var gender = prompt("What's your gender, male or female?");
//
// if (age < 18 && gender === 'female') {
//   console.log("little girl");
// } else if (age < 18 && gender === 'male') {
//   console.log("little boy")
// } else if (age > 18 && age < 55 && gender === 'male'){
//   console.log("adult man");
// } else if (age > 18 && age < 55 && gender === 'female'){
// console.log("adult woman");
// } else {
//   console.log("Geezer!");
// }

// var age = parseInt(prompt("How old are you?"));
// var gender = prompt("What's your gender, male or female?");
//
// age < 18 ? alert('young') : alert('old');


var answer = prompt("Type something.")

if (answer.trim().length === 0) {
    alert("Come on! You gotta type SOMETHING");
} else {
  alert(answer);
  console.log(answer);
}
