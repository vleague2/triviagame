# Trivia Game - Pusheen Edition

Continuing along with the Pusheen theme, this is an interactive trivia game centered around Pusheen.

How to play:
1. Press Start!
2. Choose a guess for each question that appears.
3. Don't let the timer reach 0! You only have 15 seconds to guess each question.

How the game works:
1. Static HTML loads basic page elements and start screen
2. When user clicks Start, the game loads the first question and starts the 15 second timer
3. If the timer reaches 0, the game ends and the user is presented with the option to restart
4. If the user selects the wrong answer, they are told what the correct answer was. The game automatically moves on to the next question
5. If the user selects the correct answer, they are congratulated. The game automatically moves on to the next question
6. At the end of the game, the number of questions answered correctly and incorrectly is displayed along with a measurement of their knowledge level

Limitations:
1. The Javascript code is a bit of a mess! The object array holding the questions is rather long and contains repeated code.