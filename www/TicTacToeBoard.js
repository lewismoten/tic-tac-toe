function TicTacToeBoard() {
  this.empty = 0;
  this.player1 = 1;
  this.player2 = -1;
  this.player = 1;
  this.winner = this.empty;
  
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

TicTacToeBoard.prototype.isFull = function() {
  for(x = 0; x < this.cell.length; x++) {
    for(y = 0; y < this.cell[x].length; y++) {
      if(this.cell[x][y] == this.empty) return false;
    }
  }
  return true;
};

TicTacToeBoard.prototype.mark = function(column, row) {

  if(this.cell[column][row] === this.empty) {
    this.cell[column][row] = this.player;
    this.checkForWinner();
    this.player *= -1;
    if(this.isFull()) this.player = this.empty;
    return true;
  }
  return false;
};

TicTacToeBoard.prototype.getMark = function(column, row) {
  return this.cell[column][row];
}

TicTacToeBoard.prototype.checkForWinner = function() {
  this.winner = this.player1;
}