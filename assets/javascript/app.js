$( document ).ready(function(){
	console.log("document loaded");

  $("#questions").hide();
  $("#end").hide();

  $("button").click(function(){
    $("#questions").show();
    $("#start").hide();


var userAnswer1 = null;
var userAnswer2 = null;
var userAnswer3 = null;
var userAnswer4 = null;
var userAnswer5 = null;
var userAnswer6 = null;

$("input:radio[name=q1]").click(function(){
   userAnswer1 = $('input:radio[name=q1]:checked').val();
   console.log(userAnswer1);
});


// Score Variables
var numCorrect = 0;
var numIncorrect = 0;
var numUnanswered = 0;

// Send the scores to the "end" div to display on the page
  $(".numCorrect").html("Correct Answers: " + numCorrect);
  $(".numIncorrect").html("Incorrect Answers: " + numIncorrect);
  $(".numUnanswered").html("Unanswered: " + numUnanswered);

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


})
    });
