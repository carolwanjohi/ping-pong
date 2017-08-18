// Back-end logic

// Create array from user input
function  numberArray(userNumber) {
  var numbers = [];
  for (var i = 1; i <= userNumber; i++) {
    if ( i % 5 === 0) {
      numbers.push("pong")
    }else if ( i % 3 === 0){
      numbers.push("ping")
    } else {
        numbers.push(i)
      }
  }
  return numbers;
}

// Front-end logic
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
