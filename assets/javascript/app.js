$( document ).ready(function(){
	console.log("document loaded");
  
  // When the page load the quetions and end score divs are automatically hidden
  $("#questions").hide();
  $("#end").hide();
  
  //When the start button is clicked it will hide the start button div and reveal the questions div
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

    // Registering user input when the radio button q1 is clicked.
    // The comments for Question 1 apply for all questions, 1-6.
    
    // Question 1
    $("input:radio[name=q1]").click(function(){
      // Empty userAnswer1 on click immediately in case the user changes their mind and chooses a different answer.
      $(userAnswer1).empty();
      // The value of the q1 radio button clicked is set as variable userAnswer1
      userAnswer1 = $('input:radio[name=q1]:checked').val();
      console.log(userAnswer1);

    });

    // Question 2
    $("input:radio[name=q2]").click(function(){
      $(userAnswer2).empty();
      userAnswer2 = $('input:radio[name=q2]:checked').val();
      console.log(userAnswer2);

    });
    // Question 3
    $("input:radio[name=q3]").click(function(){
      $(userAnswer3).empty();
      userAnswer3 = $('input:radio[name=q3]:checked').val();
      console.log(userAnswer3);

    });

    // Question 4
    $("input:radio[name=q4]").click(function(){
      $(userAnswer4).empty();
      userAnswer4 = $('input:radio[name=q4]:checked').val();
      console.log(userAnswer4);

    });

    // Question 5
    $("input:radio[name=q5]").click(function(){
      $(userAnswer5).empty();
      userAnswer5 = $('input:radio[name=q5]:checked').val();
      console.log(userAnswer5);

    });

    // Question 6
    $("input:radio[name=q6]").click(function(){
      $(userAnswer6).empty();
      userAnswer6 = $('input:radio[name=q6]:checked').val();
      console.log(userAnswer6);


    });


// Countdown variable
var number = 45;

// Variable that will hold our interval ID when we execute the "run" function
var intervalId;

// The run function sets an interval that runs the decrement function once a second.
function run() {
  intervalId = setInterval(decrement, 1000);

    }

    // The decrement function.
    function decrement() {
      
      // Show the var number in the #count-down div.
      $("#count-down").html("<h2> Time Remaining: " + number + " Seconds </h2>");

      // Decrease number by one.
      number--;

      // Once number hits zero...
      if (number === 0) {

        // // Questions 1: Get Score
        // The notes below for Question 1 apply for all questions, 1-6.

        // Use and 'if statement' to see is userAnswer1 = 'correct'.
        if (userAnswer1 == "correct") {
          // If userAnswer1 is 'correct', increase the numCorrect variable by 1.
          numCorrect++;
          console.log(numCorrect);
         }

        // Use an 'else if' statement to check if the answer is 'wrong' if it does not equal 'correct'.
        else if (userAnswer1 == "wrong") {

          // If userAnswer1 is 'wrong', increase the numIncorrect variable by 1.
          numIncorrect++;
          console.log(numIncorrect);
         }

        // Finally, use an 'else' statement if neither of the above statements are correct. This is how I register the number of 'unanswered' questions.
        else {

          // If userAnswer1 is unanswered, increase the numUnanswered var by 1.
          numUnanswered++;
          console.log(numUnanswered);
         }

        // Questions 2: Get Score
        if (userAnswer2 == "correct") {
          numCorrect++;
          console.log(numCorrect);

         }

        else if (userAnswer2 == "wrong") {
          numIncorrect++;
          console.log(numIncorrect);

         }

        else {
          numUnanswered++;
          console.log(numUnanswered);
         }

        // Questions 3: Get Score
        if (userAnswer3 == "correct") {
          numCorrect++;
          console.log(numCorrect);
         }

        else if (userAnswer3 == "wrong") {
          numIncorrect++;
          console.log(numIncorrect);
         }

        else {
          numUnanswered++;
          console.log(numUnanswered);
         }

        // Questions 4: Get Score
        if (userAnswer4 == "correct") {
          numCorrect++;
          console.log(numCorrect);
         }

        else if (userAnswer4 == "wrong") {
          numIncorrect++;
          console.log(numIncorrect);
         }

        else {
          numUnanswered++;
          console.log(numUnanswered);
         }

        // Questions 5: Get Score
        if (userAnswer5 == "correct") {
          numCorrect++;
          console.log(numCorrect);
         }

        else if (userAnswer5 == "wrong") {
          numIncorrect++;
          console.log(numIncorrect);
         }

        else {
          numUnanswered++;
          console.log(numUnanswered);
         }

        // Questions 6: Get Score
        if (userAnswer6 == "correct") {
          numCorrect++;
          console.log(numCorrect);
         }

        else if (userAnswer6 == "wrong") {
          numIncorrect++;
          console.log(numIncorrect);
         }

        else {
          numUnanswered++;
          console.log(numUnanswered);
         }

        // Send the scores to the "end" div to display on the page
        $(".numCorrect").html("Correct Answers: " + numCorrect);
        $(".numIncorrect").html("Incorrect Answers: " + numIncorrect);
        $(".numUnanswered").html("Unanswered: " + numUnanswered);

        //  Show the results "end" div and hide the "questions" div.
        $("#questions").hide();
        $("#end").show();
      }

    }

  })
});
