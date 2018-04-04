// VARIABLES~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Guessed right counter = 0
var rightCounter = 0;

// Guessed wrong counter = 0
var wrongCounter = 0;

// Timer display? starts at 15
var timer = 15;

// empty variable for us to fill later
var intervalID;

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
            correctDisplay();
            setTimeout(startTimer, 3000);
            setTimeout(nextQuestion, 3000, 1);
        },
        wrongAnswer: function() {
            $("#question-head").html("Wrong answer! It was " + this.option1);
            pusheenWrong();
            wrongCounter++;
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
            correctDisplay();
            setTimeout(startTimer, 3000);
            setTimeout(nextQuestion, 3000, 2);
        },
        wrongAnswer: function() {
            $("#question-head").html("Wrong answer! It was Grey Tabby.");
            pusheenWrong();
            wrongCounter++;
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
            correctDisplay();
            setTimeout(startTimer, 3000);
            setTimeout(nextQuestion, 3000, 3);
        },
        wrongAnswer: function() {
            $("#question-head").html("Wrong answer! It was 2010.");
            pusheenWrong();
            wrongCounter++;
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
            correctDisplay();
            setTimeout(startTimer, 3000);
            setTimeout(nextQuestion, 3000, 4);
        },
        wrongAnswer: function() {
            $("#question-head").html("Wrong answer! It was Irish.");
            pusheenWrong();
            wrongCounter++;
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
            correctDisplay();
            setTimeout(startTimer, 3000);
            setTimeout(nextQuestion, 3000, 5);
        },
        wrongAnswer: function() {
            $("#question-head").html("Wrong answer! It was Over 9.4 million.");
            pusheenWrong();
            wrongCounter++;
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
            correctDisplay();
            setTimeout(startTimer, 3000);
            setTimeout(nextQuestion, 3000, 6);
        },
        wrongAnswer: function() {
            $("#question-head").html("Wrong answer! It was Unbelievably cute.");
            pusheenWrong();
            wrongCounter++;
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
            correctDisplay();
            setTimeout(startTimer, 3000);
            setTimeout(nextQuestion, 3000, 7);
        },
        wrongAnswer: function() {
            $("#question-head").html("Wrong answer! It was Chicago.");
            pusheenWrong();
            wrongCounter++;
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
            correctDisplay();
            setTimeout(displayResults, 3000);
        },
        wrongAnswer: function() {
            $("#question-head").html('Wrong answer! It was "You find yourself wishing your real cat was Pusheen"');
            pusheenWrong();
            wrongCounter++;
            setTimeout(displayResults, 3000);
        }
    }
]


// FUNCTIONS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


// function startTimer will set the timer value back to 15, display the timer value, change the color back to black if it had turned red, and call the count function every second
function startTimer() {
    timer = 15;
    $("#time").text(timer);
    $("#time").css('color', 'black');
    intervalID = setInterval(count, 1000);
}

// function to display that the user has guessed correct answer and empty the button divs, and increment win count
function correctDisplay() {
    $("#question-head").text("Correct!");
    $("#buttons").html("<img src='assets/images/pusheen_unicorn.png' width='250px'>");
    rightCounter++;
}

// function to display the pusheen image associated with wrong answer
function pusheenWrong() { 
    $("#buttons").html("<img src='assets/images/pusheen_box.png' width='250px'>");
}

// function count will decrement timer and display it. it will also call two functions based on the timer's value
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

// function almostUp will change the timer to red which is SUPER COOL!!!
function almostUp() {
    $("#time").css('color', 'red');
}

// function timesUp tells the user they've run out of time, empties the #buttons div, displays the #select button and rewrites the text so it asks if they want to start again, and if they click it reloads the page
function timesUp() {
    $("#question-head").text("You're out of time!");
    $("#buttons").html("<img src='assets/images/pusheen_lay.png' width='250px'>");
    $("#select").css('display', 'inline');
    $("#select").text("Start over?");
    $("#select").click(function() {
        location.reload();
    });
}

// function stop will stop the timer
function stop() {
    clearInterval(intervalID);
}

// function nextQuestion loads the content for the next question based on a value that is passed in and will be used as an index number
function nextQuestion(i) {

    // Change the #question-head to the question 
    $("#question-head").text(quizQuestions[i].question);

    // Append button divs for each question answer option
    $("#buttons").html(
        ("<div><button type='button' class='btn btn-light btn-lg btn-block' id='button-1' value='1'>" + quizQuestions[i].option1 + "</button></div>") 
        + ("<div><button type='button' class='btn btn-light btn-lg btn-block' id='button-2' value='2'>" + quizQuestions[i].option2 + "</button></div>") 
        + ("<div><button type='button' class='btn btn-light btn-lg btn-block' id='button-3' value='3'>"+ quizQuestions[i].option3 + "</button></div>") 
        + ("<div><button type='button' class='btn btn-light btn-lg btn-block' id='button-4' value='4'>"+ quizQuestions[i].option4 + "</button></div>") );
    
    // listen for button clicks on any answer
    $("#button-1, #button-2, #button-3, #button-4").click(function () {

        // if they click the button whose value matches the correct answer value in the object array....
        if ($(this).val() == quizQuestions[i].correct) {

            // stop the timer and display the correctAnswer function for that question
            stop();
            quizQuestions[i].correctAnswer(); 
        }

        // otherwise...
        else {

            // 
            stop();
            quizQuestions[i].wrongAnswer();
        }
    });
}

// Function to display your results at the end of the game, with conditionals that classify the user's level of knowledge based on how many they got right
function displayResults() {
    $("#buttons").html("<p> Questions guessed correctly: " + rightCounter + "</p> <p> Questions guessed incorrectly: " + wrongCounter + "</p>");

    if (rightCounter == 0 || rightCounter == 1) {
        $("#question-head").text("You Don't Even Know Pusheen!");
        $("#buttons").append("<p><img src='assets/images/pusheen_bread.png' width='250px'></p>")
    }
    
    else if (rightCounter == 2 || rightCounter == 3 || rightCounter == 4 ) {
        $("#question-head").text("You Need to Learn More about Pusheen!");
        $("#buttons").append("<p><img src='assets/images/pusheen_pizza.png' width='250px'></p>")
    }
    
    else if (rightCounter == 5 || rightCounter == 6 || rightCounter == 7) {
        $("#question-head").text("You're Almost a Pusheen Master");
        $("#buttons").append("<p><img src='assets/images/pusheen_pink.png' width='250px'></p>")
    }

    else {
        $("#question-head").text("You Love Pusheen!!");
        $("#buttons").append("<p><img src='assets/images/pusheen_beautiful.png' width='250px'></p>")
    }

    
    $("#select").css('display', 'inline');
    $("#select").text("Play again!");
    $("#select").click(function() {
        location.reload();
    })
}

// GAME ITSELF~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Click listener on the #select button so that when the user clicks it, the game starts
$("#select").click(function() {
    // Hide the #select button
    $("#select").css('display', 'none');

    // call the nextQuestion function, starting at index 0 of the questions array. the rest of the calls for this function happen inside each object's methods
    nextQuestion(0);
    
    // Call the startTimer function
    startTimer();
});


