function TicTacToeMarks() {
  this.playerOne = 'X';
  this.playerTwo = 'O';
  this.empty = ' ';
}

function TicTacToe() {
  this.hasWinner = false;
  this.isNewGame = true;
  this.hasEnded = false;
  this.marks = new TicTacToeMarks();
  this.cell = [[0,0,0],[0,0,0],[0,0,0]];
  
}

TicTacToe.prototype.new = function() {
  this.hasWinner = false;
  this.isNewGame = true;
  this.hasEnded = false;
};

TicTacToe.prototype.mark = function(column, row) {
  if(this.cell[column][row] === 0) {
    this.cell[column][row] = 1;
    return true;
  }
  return false;
};
