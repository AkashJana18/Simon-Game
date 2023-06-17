# Simon Game
Simon Game is a simple browser-based game where players have to memorize and repeat a sequence of colored buttons. This project consists of HTML, CSS, and JavaScript code to create the game interface, handle user input, and generate random sequences for the game.

# Game Mechanics
The game follows these mechanics:

1. When the user starts the game by pressing any key, the nextSequence() function is called to generate the first color in the sequence and display it to the user.
2. The user then clicks on the colored buttons to repeat the sequence.
3. Each time the user clicks a button, the checkAnswer() function is called to compare the user's input with the current element in the game sequence.
4. If the user's input matches the game sequence up to the current level, the game continues to the next level by calling nextSequence().
5. If the user makes a mistake and their input doesn't match the game sequence, the game ends. * The user is notified of the game over status, and they can restart the game by pressing any key.
6. The game keeps track of the user's current level and updates the level display accordingly.
# File Structure
The project consists of the following files:

1. index.html: The main HTML file that contains the game interface and includes the necessary CSS and JavaScript files.
2. styles.css: The CSS file that defines the styles for the game interface.
3. game.js: The JavaScript file that implements the game logic.

# Usage
To play the Simon Game, follow these steps:

1. Open the index.html file in a web browser.
Press any key to start the game.
2. Observe the sequence of colored buttons displayed on the screen.
3. Click on the colored buttons to repeat the sequence.
4. Continue playing and try to reach the highest level possible.
5. If you make a mistake, the game will end, and you can restart by pressing any key.
# Dependencies
The project relies on the following dependencies:

* jQuery: v3.7.0
The project includes a link to the jQuery library from a CDN (code.jquery.com) to handle DOM manipulation and event handling.
