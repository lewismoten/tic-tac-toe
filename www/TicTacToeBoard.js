function TicTacToeBoard() {
  
  var player = 1;
  var cell = new Array(3);
  var board = this;

  this.empty = 0;
  this.player1 = 1;
  this.player2 = -1;
  var winner = new TicTacToeMark();

  this.getWinner = function() { return winner; };
  
  var onMarkCell = function() {
    if(board.getPlayer() == board.empty) return false;
    if(!this.isEmpty()) return false;
    if(player == board.player1)
    {
      this.markAsPlayer1();
    }
    else
    {
      this.markAsPlayer2();
    }
    board.checkForWinner();
    board.changePlayer();
    return true;
  };
  
  for(x = 0; x < 3; x++) {
    cell[x] = new Array(3);
    for(y = 0; y < 3; y++) {
      cell[x][y] = new TicTacToeMark(onMarkCell);
    }
  }
  
  this.mark = function(x, y) { return cell[x][y].mark(); };
  this.getPlayer = function() { return player; };
  this.at = function(column, row) { return cell[column][row].data(); };

  this.changePlayer = function() {
    player *= -1;
    if(this.isFull()) player = this.empty;
    if(!this.getWinner().isEmpty()) player = this.empty;
  };
}

TicTacToeBoard.prototype.checkForWinner = function() {
  for(i = 0; i < 3; i++) {
    if(this.findWinner(i, 0, 0, 1)) return;
    if(this.findWinner(0, i, 1, 0))  return;
  }
  if(this.findWinner(0, 0, 1, 1)) return;
  this.findWinner(0, 2, 1, -1);
};

TicTacToeBoard.prototype.isFull = function() {
  for(x = 0; x < 3; x++) {
    for(y = 0; y < 3; y++) {
      if(this.at(x, y).isEmpty) return false;
    }
  }
  return true;
};
  
TicTacToeBoard.prototype.isEmpty = function() {
  for(x = 0; x < 3; x++) {
    for(y = 0; y < 3; y++) {
      if(!this.at(x, y).isEmpty) return false;
    }
  }
  return true;
};

TicTacToeBoard.prototype.findWinner = function(x, y, stepX, stepY) {
  var first = this.at(x, y);
  if(first.isEmpty) return false;
  if(first != this.at(x + stepX, y + stepY)) return false;
  if(first != this.at(x + (stepX * 2), y + (stepY * 2))) return false;
  if(first.isPlayer1) this.getWinner().markAsPlayer1(); else this.getWinner().markAsPlayer2();
  return true;
};

TicTacToeBoard.prototype.toString = function() {
  sb = "[";
  for(x = 0; x < 3; x++) {
    if(x !== 0) sb += "|";
    for(y = 0; y < 3; y++) {
      sb += this.at(y, x).text;
    }
  }
  sb += "]";
  return sb;
};