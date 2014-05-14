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
