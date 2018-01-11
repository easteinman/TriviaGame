$("#questions").hide();
$("#end").hide();

$("button").click(function(){
        $("#questions").show();
        $("#start").hide();
    });


// Countdown variable
var number = 30;

//  Variable that will hold our interval ID when we execute
//  the "run" function
var intervalId;

//  The run function sets an interval
//  that runs the decrement function once a second.
function run() {
  intervalId = setInterval(decrement, 1000);
    }

    //  The decrement function.
    function decrement() {

      //  Decrease number by one.
      number--;

      //  Show the number in the #show-number tag.
      $("#show-number").html("<h2> Time Remaining: " + number + " Seconds </h2>");


      //  Once number hits zero...
      if (number === 0) {

        //  Alert the user that time is up.
        $("#end").show();
        $("#questions").hide();
      }
    }

run();

