//back-end logic
// var leapYear = function(userNumber) {
//   if ((userNumber % 100 !== 0) && (userNumber % 4 === 0) || (userNumber % 400 === 0)) {
//     return true;
//   } else {
//     return false;
//   }
// };
// Turn user input into an array 

// Create array from user input
function  numberArray(userNumber) {
  var numbers = [];
  for (var i = 1; i <= userNumber; i++) {
    numbers.push(i);
  }
  return numbers;
}

// front-end logic
$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    event.preventDefault();
    // Store user input as a number
    var  userNumber = parseInt($("input#userNumber").val());
    console.log(userNumber);

    console.log(numberArray(userNumber));

    // var arrayFromUserInput = userNumber.numberArray();
    // console.log(arrayFromUserInput);

    // $(".userNumber").text(year);

    // if (!result) { // same as writing if (result === false)
    //   $(".not").text("not");
    // } else {
    //   $(".not").text("");
    // }

    // $("#result").show();
  });
});
