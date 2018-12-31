// arrays and variables 
// set wins and losses to 0
// set how many guesses the user can make
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var userChoice = [];
    
// computer generates a random letter from array 
// Sets the computerGuess variable equal to a random letter from computerChoice array.
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

// when user presses a key... document onkeyup 
// subtract guess from guessesLeft everytime user hits a key 
document.onkeyup = function(event) {
    guessesLeft--;

// string.fromCharCode turns usersGuess into corresponding keys (otherwise we would see them come up as numbers),
// must also use .toLowerCase(); function because otherwise letters come out capitalized
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

//if statement that prevents user from choosing a key that's not part of the alphabet (a = unicode 65, z = unicode 90)
// (however an incorrect response still counts as a guess and will show as 'letterGuessed)
if (event.keyCode < 65 || event.keyCode > 90) {
    alert("Please enter a letter!");
}

//else if statement to stop user from guessing a letter they already guessed
else if (userChoice.indexOf(userGuess) >=0) {
            alert("You already guessed that letter!");
}

// declaring countGuessesLeft, countUsersGuesses, and restart functions
countGuessesLeft();
countUsersGuesses();

// declare same variables as when starting the game
var restart = function() {
    guessesLeft = 9;
    userChoice = [];
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
}


// pushes the user's guess into our empty userChoice array
    userChoice.push(userGuess);

    function countGuessesLeft() {
        document.getElementById("guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
    }
    
    function countUsersGuesses() {
        document.getElementById("lettersGuessed").innerHTML = "Your Guesses so far: " + userChoice.join(' ');
    }


// if userGuess equals computer guess..
    // add one to wins and document.interHTML
        // restart game after win
	if (userGuess === computerGuess){
		wins++;
		document.getElementById("wins").innerHTML = "Wins: " + wins;
		restart();
    } 
// if guessesLeft equals 0...
    // add one to losses and document.innerHTML
        // restart game after lost
    else if (guessesLeft === 0) {
		losses++;
		document.getElementById("losses").innerHTML = "Loses: " + losses;
		restart();
	}
  };








