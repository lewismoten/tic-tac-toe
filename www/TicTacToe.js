function TicTacToe() {
  this.hasWinner = false;
  this.hasEnded = false;
  this.marks = new TicTacToeMarks();
  this.board = new TicTacToeBoard(this.marks.empty);
}

TicTacToe.prototype.new = function() {
  this.hasWinner = false;
  this.isNewGame = true;
  this.hasEnded = false;
  this.board = new TicTacToeBoard(this.marks.empty);
};

TicTacToe.prototype.isNewGame = function() {
  return this.board.allCellsEqual(this.marks.empty);
};

