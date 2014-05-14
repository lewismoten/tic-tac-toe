function TicTacToeMarks() {
  this.playerOne = 'X';
  this.playerTwo = 'O';
  this.empty = ' ';
}

function TicTacToe() {
  this.hasWinner = false;
  this.isNewGame = true;
  this.marks = new TicTacToeMarks();
}

TicTacToe.prototype.new = function() {
  this.hasWinner = false;
  this.isNewGame = true;
};
