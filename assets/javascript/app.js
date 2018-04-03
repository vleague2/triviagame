// Array of questions. For each:
    // Question
    // Answer option1
    // Answer option2
    // Answer option3
    // Answer option4
    // function: Display "Correct!" when guessed right and increment right counter. wait 3000 and then call startTimer and show next question
    // function: Display "Nope, it was X" when guessed wrong and increment wrong counter. wait 3000 and then call startTimer and show next question
var quizQuestions = [
    question1 = {
        question: "What breed of cat is Pusheen?",
        option1: "Domestic shorthair",
        option2: "British shorthair",
        option3: "Russian blue",
        option4: "Maine coon",
        correct: 1
    },
    question2 = {
        question: "What type of coat does Pusheen have?",
        option1: "Tortoiseshell", 
        option2: "Grey bi-color",
        option3: "Grey Tabby",
        option4: "Solid grey",
        correct: 3
    },

    question3 = {
        question: "What year was Pusheen created?",
        option1: "2014",
        option2: "2010",
        option3: "2012",
        option4: "2016",
        correct: 2
    },

    question4 = {
        question: "What language is Pusheen's name derived from?",
        option1: "Malaysian",
        option2: "Arabic",
        option3: "French",
        option4: "Irish", 
        correct: 4
    }
]



// Guessed right counter = 0

// Guessed wrong counter = 0

// Timer display? starts at 15

// function timesUp will 
    // show array.guessedwrong
    // show #select button but change text to Start over?

// function almostUp will change the timer to red

// function startTimer will USE SETINTERVAL!!!! setTimeout(almostUp, 10000);and setTimeout(timesUp, 15000);

// function clearTimer will clearTimeout(almostUp); clearTimeout(timesUp);

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

        


