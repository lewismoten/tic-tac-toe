function TicTacToeBoard() {
  this.empty = 0;
  this.player1 = 1;
  this.player2 = -1;
  this.player = 1;
  
  this.cell = new Array(3);
  for(x = 0; x < this.cell.length; x++) {
    this.cell[x] = new Array(3);
    for(y = 0; y < this.cell[x].length; y++) {
      this.cell[x][y] = this.empty;
    }
  }
}

TicTacToeBoard.prototype.isEmpty = function() {
  for(x = 0; x < this.cell.length; x++) {
    for(y = 0; y < this.cell[x].length; y++) {
      if(this.cell[x][y] != this.empty) return false;
    }
  }
  return true;
};

TicTacToeBoard.prototype.mark = function(column, row) {

  if(this.cell[column][row] === this.empty) {
    this.cell[column][row] = this.player;
    this.player *= -1;
    return true;
  }
  return false;
};
