function TicTacToeBoard() {
  
  var player = 1;
  var cell = new Array(3);

  this.empty = 0;
  this.player1 = 1;
  this.player2 = -1;
  
  this.winner = this.empty;
  
  for(x = 0; x < cell.length; x++) {
    cell[x] = new Array(3);
    for(y = 0; y < cell[x].length; y++) {
      cell[x][y] = this.empty;
    }
  }
  
  this.getPlayer = function() {
    return player;
  };
  
  this.isEmpty = function() {
    for(x = 0; x < cell.length; x++) {
      for(y = 0; y < cell[x].length; y++) {
        if(cell[x][y] != this.empty) return false;
      }
    }
    return true;
  };

  this.mark = function(column, row) {
    if(this.getPlayer() == this.empty) return false;
    if(cell[column][row] != this.empty) return false;
    cell[column][row] = player;
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

  this.changePlayer = function() {
    player *= -1;
    if(this.isFull()) player = this.empty;
    if(this.winner != this.empty) player = this.empty;
  };
}

TicTacToeBoard.prototype.checkForWinner = function() {
  for(i = 0; i < 3; i++) {
    if(this.findWinner(i, 0, 0, 1)) return;
    if(this.findWinner(0, i, 1, 0)) return;
  }
  if(this.findWinner(0, 0, 1, 1)) return;
  this.findWinner(0, 2, 1, -1);
};