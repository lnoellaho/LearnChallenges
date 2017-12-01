function hiLoGame() {
  var userName = prompt("Enter username.");
  var secret = Math.floor(Math.random() * 101);
  for (turn = 0; turn < 7; turn ++) {
  var guess = prompt("Pick a number from 1 to 100.");
    if (guess == null) {
      return;
    }
    if (isNaN(guess)) {
      console.log("Must enter valid number.");
    }
    else if (guess == secret) {
      console.log(userName + " wins!");
      return;
    }
    else if (guess > secret) {
      console.log(guess + " is too big.");
    }
    else if (guess < secret) {
      console.log(guess + " is too small.");
    }
    else {
      console.log("error");
    }
  }
  alert("player has reached maximum turns.");
