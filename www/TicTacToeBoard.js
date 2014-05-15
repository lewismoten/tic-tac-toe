function TicTacToeBoard() {
  this.empty = 0;
  this.player1 = 1;
  this.player2 = -1;
  this.player = 1;
  
  this.winner = this.empty;
  
  var cell = new Array(3);
  for(x = 0; x < cell.length; x++) {
    cell[x] = new Array(3);
    for(y = 0; y < cell[x].length; y++) {
      cell[x][y] = this.empty;
    }
  }
  
  this.isEmpty = function() {
    for(x = 0; x < cell.length; x++) {
      for(y = 0; y < cell[x].length; y++) {
        if(cell[x][y] != this.empty) return false;
      }
    }
    return true;
  };

  this.mark = function(column, row) {
    if(this.player == this.empty) return false;
    if(cell[column][row] != this.empty) return false;
    cell[column][row] = this.player;
    this.checkForWinner();
    this.changePlayer();
    return true;
  };

  this.findWinner = function(x, y, stepX, stepY) {
    var mark = cell[x][y];
    if(mark == this.empty) return false;
    var i = 0;
    while(++i < 3)
    {
      var xx = x + (stepX * i);
      var yy = y + (stepY * i);
      if(mark != cell[xx][yy]) return false;
    }
    this.winner = mark;
    return true;
  };

  this.isFull = function() {
    for(x = 0; x < cell.length; x++) {
      for(y = 0; y < cell[x].length; y++) {
        if(cell[x][y] == this.empty) return false;
      }
    }
    return true;
  };

  this.getMark = function(column, row) {
    return cell[column][row];
  };
}

TicTacToeBoard.prototype.changePlayer = function() {
  this.player *= -1;
  if(this.isFull()) this.player = this.empty;
  if(this.winner != this.empty) this.player = this.empty;
};

TicTacToeBoard.prototype.checkForWinner = function() {
  for(i = 0; i < 3; i++) {
    if(this.findWinner(i, 0, 0, 1)) return;
    if(this.findWinner(0, i, 1, 0)) return;
  }
  if(this.findWinner(0, 0, 1, 1)) return;
  this.findWinner(0, 2, 1, -1);
};