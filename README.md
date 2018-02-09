# Trivia Game

by Rich Budek 02/09/2018

Project location for viewing   [richbu.github.io](https://richbu.github.io/Game_Quiz/)

Description:
This is a trivia game.  Eventually the questions will be pulled from a JSON file.  For now, they are manually loaded and displayed. Each question has the option of being a multiple question or an image question.  As the question is displayed, a timer is started for each slide,  The user must answer in the allotted time or the slide moves to the next one.

Startup Screen:
The top row returns the user back to the portfolio
![Start up Screen](/assets/images/screen_caps/QuizGame_01.png)

The user must pick start a new game before he can play as well as to reset the game.  This is done by clicking on the "play" followed by the "New Game" button.

![New game](/assets/images/screen_caps/QuizGame_02.png)


Eventually there will be a selection box for the topic or quiz to pick.  For now, a manual entry must be made to select which topic/quiz to use.  Enter a zero or a numerical 1.

![Topic Selection](/assets/images/screen_caps/QuizGame_03.png)

After selecting the topic, the first question pops up.  The user selects one answer and the computer figures out if the answer is correct or not and then moves on to the next question.

![Typical Question](/assets/images/screen_caps/QuizGame_04.png)


The modal window can be cleared using either the close button or by hitting a blank area on the screen:



Technolgies used:
1. HTML for general page layout.  Handcoded to match porfolio pages
2. Responsive design
3. BootStrap for nice buttons and menu
4. Javascript for program functions
5. JQuery to talk to the HTML elements
6. Timers to time the entire game and the pop for wrong or right answers
7. Modal windows to give clean pop ups

Internal design
1. Javascript manupulates the HTML elements directly using jQuery.
2. Most of code re-written as object and methods to make it clearer and easier to handle
3. Data is stored in an object and laid out to match a JSON file layout.  Have coded in options for displaying graphics for each question. Not quite finished yet.
4. One timer times each question and another timer is set to display a pop up with correct or wrong answer

Left to do:
1. Read the questions in from a JSON file.
3. Game settings to be toggles and buttons
4. High score recording
5. Stats on game questions



