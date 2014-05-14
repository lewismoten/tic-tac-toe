function TicTacToeBoard(emptyMark) {
  this.cell = new Array(3);
  this.emptyMark = emptyMark;
  for(x = 0; x < this.cell.length; x++) {
    this.cell[x] = new Array(3);
    for(y = 0; y < this.cell[x].length; y++) {
      this.cell[x][y] = this.emptyMark;
    }
  }
}

TicTacToeBoard.prototype.allCellsEqual = function(expectedMark) {
  for(x = 0; x < this.cell.length; x++) {
    for(y = 0; y < this.cell[x].length; y++) {
      if(this.cell[x][y] != expectedMark) return false;
    }
  }
  return true;
};

TicTacToeBoard.prototype.mark = function(column, row, mark) {
  if(this.cell[column][row] === this.emptyMark) {
    this.cell[column][row] = mark;
    return true;
  }
  return false;
};

function TicTacToeMarks() {
  this.playerOne = 'X';
  this.playerTwo = 'O';
  this.empty = ' ';
}

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

