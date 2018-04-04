// Array of questions. Very long.
var quizQuestions = [
    {
        question: "What breed of cat is Pusheen?",
        option1: "Domestic shorthair",
        option2: "British shorthair",
        option3: "Russian blue",
        option4: "Maine coon",
        correct: 1,
        correctAnswer: function () {
            $("#question-head").text("Correct!");
            $("#buttons").html("");
            rightCounter ++;
            setTimeout(startTimer, 3000);
            setTimeout(nextQuestion, 3000, 1);
        },
        wrongAnswer: function() {
            $("#question-head").html("Wrong answer! It was Domestic shorthair.");
            $("#buttons").html("");
            wrongCounter ++;
            setTimeout(startTimer, 3000);
            setTimeout(nextQuestion, 3000, 1);
        }
    },
    {
        question: "What type of coat does Pusheen have?",
        option1: "Tortoiseshell", 
        option2: "Grey bi-color",
        option3: "Grey Tabby",
        option4: "Solid grey",
        correct: 3,
        correctAnswer: function () {
            $("#question-head").text("Correct!");
            $("#buttons").html("");
            rightCounter ++;
            setTimeout(startTimer, 3000);
            setTimeout(nextQuestion, 3000, 2);
        },
        wrongAnswer: function() {
            $("#question-head").html("Wrong answer! It was Grey Tabby.");
            $("#buttons").html("");
            wrongCounter ++;
            setTimeout(startTimer, 3000);
            setTimeout(nextQuestion, 3000, 2);
        }
    },
    {
        question: "What year was Pusheen created?",
        option1: "2014",
        option2: "2010",
        option3: "2012",
        option4: "2016",
        correct: 2,
        correctAnswer: function () {
            $("#question-head").text("Correct!");
            $("#buttons").html("");
            rightCounter ++;
            setTimeout(startTimer, 3000);
            setTimeout(nextQuestion, 3000, 3);
        },
        wrongAnswer: function() {
            $("#question-head").html("Wrong answer! It was 2010.");
            $("#buttons").html("");
            wrongCounter ++;
            setTimeout(startTimer, 3000);
            setTimeout(nextQuestion, 3000, 3);
        }
    },
    {
        question: "What language is Pusheen's name derived from?",
        option1: "Malaysian",
        option2: "Arabic",
        option3: "French",
        option4: "Irish", 
        correct: 4,
        correctAnswer: function () {
            $("#question-head").text("Correct!");
            $("#buttons").html("");
            rightCounter ++;
            setTimeout(startTimer, 3000);
            setTimeout(nextQuestion, 3000, 4);
        },
        wrongAnswer: function() {
            $("#question-head").html("Wrong answer! It was Irish.");
            $("#buttons").html("");
            wrongCounter ++;
            setTimeout(startTimer, 3000);
            setTimeout(nextQuestion, 3000, 4);
        }
    },
    {
        question: "How many fans does Pusheen have on Facebook?",
        option1: "Over 9.4 million",
        option2: "Over 20 million",
        option3: "Over 1 million",
        option4: "Over 15 million",
        correct: 1,
        correctAnswer: function () {
            $("#question-head").text("Correct!");
            $("#buttons").html("");
            rightCounter ++;
            setTimeout(startTimer, 3000);
            setTimeout(nextQuestion, 3000, 5);
        },
        wrongAnswer: function() {
            $("#question-head").html("Wrong answer! It was Over 9.4 million.");
            $("#buttons").html("");
            wrongCounter ++;
            setTimeout(startTimer, 3000);
            setTimeout(nextQuestion, 3000, 5);
        }
    },
    {
        question: "How cute is Pusheen?",
        option1: "Pretty cute",
        option2: "Very cute",
        option3: "Extremely cute",
        option4: "Unbelievably cute",        
        correct: 4,
        correctAnswer: function () {
            $("#question-head").text("Correct!");
            $("#buttons").html("");
            rightCounter ++;
            setTimeout(startTimer, 3000);
            setTimeout(nextQuestion, 3000, 6);
        },
        wrongAnswer: function() {
            $("#question-head").html("Wrong answer! It was Unbelievably cute.");
            $("#buttons").html("");
            wrongCounter ++;
            setTimeout(startTimer, 3000);
            setTimeout(nextQuestion, 3000, 6);
        }
    },
    {
        question: "What city is the Pusheen Corporation based in?",
        option1: "San Francisco",
        option2: "Denver",
        option3: "Chicago",
        option4: "New York City",
        correct: 3,
        correctAnswer: function () {
            $("#question-head").text("Correct!");
            $("#buttons").html("");
            rightCounter ++;
            setTimeout(startTimer, 3000);
            setTimeout(nextQuestion, 3000, 7);
        },
        wrongAnswer: function() {
            $("#question-head").html("Wrong answer! It was Chicago.");
            $("#buttons").html("");
            wrongCounter ++;
            setTimeout(startTimer, 3000);
            setTimeout(nextQuestion, 3000, 7);
        }
    },
    {
        question: "What happens if your real cat plays with your Pusheen plushie?",
        option1: "Pusheen growls at your cat",
        option2: "Your real cat morphs into Pusheen",
        option3: "Your real cat suddenly gains 20 pounds",
        option4: "You find yourself wishing your real cat was Pusheen",
        correct: 4,
        correctAnswer: function () {
            $("#question-head").text("Correct!");
            $("#buttons").html("");
            rightCounter ++;
        },
        wrongAnswer: function() {
            $("#question-head").html('Wrong answer! It was "You find yourself wishing your real cat was Pusheen"');
            $("#buttons").html("");
            wrongCounter ++;
        }
    }
]

// Guessed right counter = 0
var rightCounter = 0;

// Guessed wrong counter = 0
var wrongCounter = 0;

// Timer display? starts at 15
var timer = 15;

// empty variable for us to fill later
var intervalID;

// function timesUp tells the user they've run out of time, empties the #buttons div, displays the #select button and rewrites the text so it asks if they want to start again, and if they click it reloads the page
function timesUp() {
    $("#question-head").text("You're out of time!");
    $("#buttons").html("");
    $("#select").css('display', 'inline');
    $("#select").text("Start over?");
    $("#select").click(function() {
        document.reload();
    });
}

// function startTimer will USE SETINTERVAL!!!!
function startTimer() {
    timer = 15;
    $("#time").text(timer);
    $("#time").css('color', 'black');
    intervalID = setInterval(count, 1000);
}

// function count will decrement timer and display it
function count() {
    timer--;
    $("#time").text(timer);

    if (timer === 5) {
        almostUp();
    }

    if (timer === 0) {
        stop();
        timesUp();
    }
}

// function almostUp will change the timer to red
function almostUp() {
    $("#time").css('color', 'red');
}

// function stop will stop the timer at 0
function stop() {
    clearInterval(intervalID);
}

// function nextQuestion loads the content for the next question. currently super WET(tm)
function nextQuestion(i) {

    // Change the #question-head to the question 
    $("#question-head").text(quizQuestions[i].question);

    // Append button divs for each question answer option
    $("#buttons").html(
        ("<div><button type='button' class='btn btn-light btn-lg btn-block' id='button-1' value='1'>" + quizQuestions[i].option1 + "</button></div>") 
        + ("<div><button type='button' class='btn btn-light btn-lg btn-block' id='button-2' value='2'>" + quizQuestions[i].option2 + "</button></div>") 
        + ("<div><button type='button' class='btn btn-light btn-lg btn-block' id='button-3' value='3'>"+ quizQuestions[i].option3 + "</button></div>") 
        + ("<div><button type='button' class='btn btn-light btn-lg btn-block' id='button-4' value='4'>"+ quizQuestions[i].option4 + "</button></div>") );
    
    $("#button-1, #button-2, #button-3, #button-4").click(function () {

        if ($(this).val() == quizQuestions[i].correct) {
            stop();
            quizQuestions[i].correctAnswer(); 
        }

        else {
            stop();
            quizQuestions[i].wrongAnswer();
        }
    });
}





// GAME ITSELF~~~~~



// Click listener on the #select button so that when the user clicks it, the game starts
$("#select").click(function() {
    // Hide the #select button
    $("#select").css('display', 'none');

    // call the nextQuestion function, starting at index 0 of the questions array
    nextQuestion(0);
    
    // Call the startTimer function
    startTimer();
});




// function startGame will 
    // call the startTimer function
    // change #question-head to array.question
    // Append four buttons to the #button div:
        // <button type="button" class="btn btn-light btn-lg btn-block">array.answer1</button>
        // Repeat for answer2, answer3, answer4
    // Hide #select button (display:none?)
    // Set guessed right and guessed wrong to 0

    // while timer > 0 ??
        // If answer1 is clicked, then....
        // Else if answer2 is clicked, then...
        // Else if answer3 is clicked, then...
        // Else if answer4 is clicked, then...

    // When you've reached the end of the questions array
        // remove button divs
        // if guessed right <=1, change #question-head to You Don't Even Know Pusheen!
            // else if guessed right < 3, change #question-head to You Need to Learn More about Pusheen!    
            // else if guessed right < 6, change #question-head to You're Almost a Pusheen Master     
            // else if guessed right = array.length, change #question-head to You Love Pusheen!
        // Make a new div and
            // display guessed right counter with preface text "Correct answers:"
            // display guessed wrong counter with preface text "Wrong answers:"
        // show #select button and change text to "Play again?"
        // If you click the select button, call startGame

        


