$( document ).ready(function(){
	console.log("document loaded");

  $("#questions").hide();
  $("#end").hide();

  $("button").click(function(){
    $("#questions").show();
    $("#start").hide();
    run();


  // Score Variables
  var numCorrect = 0;
  var numIncorrect = 0;
  var numUnanswered = 0;

  // Empty User Answer Variables
  var userAnswer1 = null;
  var userAnswer2 = null;
  var userAnswer3 = null;
  var userAnswer4 = null;
  var userAnswer5 = null;
  var userAnswer6 = null;

    // Question 1: Registering user input...
    $("input:radio[name=q1]").click(function(){
      $(userAnswer1).empty();
      userAnswer1 = $('input:radio[name=q1]:checked').val();
      console.log(userAnswer1);

    });

    // Question 2: Registering user input...
    $("input:radio[name=q2]").click(function(){
      $(userAnswer2).empty();
      userAnswer2 = $('input:radio[name=q2]:checked').val();
      console.log(userAnswer2);

    });
    // Question 3: Registering user input...
    $("input:radio[name=q3]").click(function(){
      $(userAnswer3).empty();
      userAnswer3 = $('input:radio[name=q3]:checked').val();
      console.log(userAnswer3);

    });

    // Question 4: Registering user input...
    $("input:radio[name=q4]").click(function(){
      $(userAnswer4).empty();
      userAnswer4 = $('input:radio[name=q4]:checked').val();
      console.log(userAnswer4);

    });

    // Question 5: Registering user input...
    $("input:radio[name=q5]").click(function(){
      $(userAnswer5).empty();
      userAnswer5 = $('input:radio[name=q5]:checked').val();
      console.log(userAnswer5);

    });

    // Question 6: Registering user input...
    $("input:radio[name=q6]").click(function(){
      $(userAnswer6).empty();
      userAnswer6 = $('input:radio[name=q6]:checked').val();
      console.log(userAnswer6);


    });


// Countdown variable
var number = 45;

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
      
      //  Show the number in the #show-number tag.
      $("#count-down").html("<h2> Time Remaining: " + number + " Seconds </h2>");

      //  Decrease number by one.
      number--;

      //  Once number hits zero...
      if (number === 0) {

        //  Get score for question 1...
        if (userAnswer1 == "correct") {
          numCorrect++;
          console.log(numCorrect);
          $(".numCorrect").html("Correct Answers: " + numCorrect);

         }

        else if (userAnswer1 == "wrong") {
          numIncorrect++;
          console.log(numIncorrect);
          $(".numIncorrect").html("Incorrect Answers: " + numIncorrect);

         }

        else {
          numUnanswered++;
          console.log(numUnanswered);
          $(".numUnanswered").html("Unanswered Answers: " + numUnanswered);

         }

        //  Get score for question 2...
        if (userAnswer2 == "correct") {
          numCorrect++;
          console.log(numCorrect);
          $(".numCorrect").html("Correct Answers: " + numCorrect);

         }

        else if (userAnswer2 == "wrong") {
          numIncorrect++;
          console.log(numIncorrect);
          $(".numIncorrect").html("Incorrect Answers: " + numIncorrect);

         }

        else {
          numUnanswered++;
          console.log(numUnanswered);
          $(".numUnanswered").html("Unanswered Answers: " + numUnanswered);

         }

        //  Get score for question 3...
        if (userAnswer3 == "correct") {
          numCorrect++;
          console.log(numCorrect);
          $(".numCorrect").html("Correct Answers: " + numCorrect);

         }

        else if (userAnswer3 == "wrong") {
          numIncorrect++;
          console.log(numIncorrect);
          $(".numIncorrect").html("Incorrect Answers: " + numIncorrect);

         }

        else {
          numUnanswered++;
          console.log(numUnanswered);
          $(".numUnanswered").html("Unanswered Answers: " + numUnanswered);

         }

        //  Get score for question 4...
        if (userAnswer4 == "correct") {
          numCorrect++;
          console.log(numCorrect);
          $(".numCorrect").html("Correct Answers: " + numCorrect);

         }

        else if (userAnswer4 == "wrong") {
          numIncorrect++;
          console.log(numIncorrect);
          $(".numIncorrect").html("Incorrect Answers: " + numIncorrect);

         }

        else {
          numUnanswered++;
          console.log(numUnanswered);
          $(".numUnanswered").html("Unanswered Answers: " + numUnanswered);

         }

        //  Get score for question 5...
        if (userAnswer5 == "correct") {
          numCorrect++;
          console.log(numCorrect);
          $(".numCorrect").html("Correct Answers: " + numCorrect);

         }

        else if (userAnswer5 == "wrong") {
          numIncorrect++;
          console.log(numIncorrect);
          $(".numIncorrect").html("Incorrect Answers: " + numIncorrect);

         }

        else {
          numUnanswered++;
          console.log(numUnanswered);
          $(".numUnanswered").html("Unanswered Answers: " + numUnanswered);

         }

        //  Get score for question 6...
        if (userAnswer1 == "correct") {
          numCorrect++;
          console.log(numCorrect);
          $(".numCorrect").html("Correct Answers: " + numCorrect);

         }

        else if (userAnswer6 == "wrong") {
          numIncorrect++;
          console.log(numIncorrect);
          $(".numIncorrect").html("Incorrect Answers: " + numIncorrect);

         }

        else {
          numUnanswered++;
          console.log(numUnanswered);
          $(".numUnanswered").html("Unanswered Answers: " + numUnanswered);

         }

        // Send the scores to the "end" div to display on the page
        $(".numCorrect").html("Correct Answers: " + numCorrect);
        $(".numIncorrect").html("Incorrect Answers: " + numIncorrect);
        $(".numUnanswered").html("Unanswered: " + numUnanswered);

        //  Show the reults div and hide the questions div.
        $("#questions").hide();
        $("#end").show();
      }

    }

  })
});
