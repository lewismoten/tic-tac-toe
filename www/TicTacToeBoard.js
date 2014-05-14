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
  if(this.player == this.empty) return false;
  if(this.cell[column][row] != this.empty) return false;
  this.cell[column][row] = this.player;
  this.checkForWinner();
  this.changePlayer();
  return true;
};

TicTacToeBoard.prototype.changePlayer = function() {
  this.player *= -1;
  if(this.isFull()) this.player = this.empty;
  if(this.winner != this.empty) this.player = this.empty;
}

TicTacToeBoard.prototype.getMark = function(column, row) {
  return this.cell[column][row];
};

TicTacToeBoard.prototype.winnerOf = function(x, y, stepX, stepY) {
  var mark = this.cell[x][y];
  if(mark == this.empty) return this.empty;
  var i = 0;
  while(++i < 3)
  {
    var xx = x + (stepX * i);
    var yy = y + (stepY * i);
    if(mark != this.cell[xx][yy]) return this.empty;
  }
  return mark;
};

TicTacToeBoard.prototype.checkForWinner = function() {
  for(i = 0; i < 3; i++) {
    this.winner = this.winnerOf(i, 0, 0, 1);
    if(this.winner != this.empty) return;
    this.winner = this.winnerOf(0, i, 1, 0);
    if(this.winner != this.empty) return;
  }
  this.winner = this.winnerOf(0, 0, 1, 1);
  if(this.winner != this.empty) return;
  this.winner = this.winnerOf(0, 2, 1, -1);
};