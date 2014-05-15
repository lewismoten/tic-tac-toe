function TicTacToeBoard() {
  
  var player = 1;
  var cell = new Array(3);
  var board = this;

  this.empty = 0;
  this.player1 = 1;
  this.player2 = -1;
  
  this.winner = this.empty;
  
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
  
  this.getPlayer = function() {
    return player;
  };

  this.at = function(column, row) {
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
    if(this.findWinner(0, i, 1, 0))  return;
  }
  if(this.findWinner(0, 0, 1, 1)) return;
  this.findWinner(0, 2, 1, -1);
};

TicTacToeBoard.prototype.isFull = function() {
  for(x = 0; x < 3; x++) {
    for(y = 0; y < 3; y++) {
      if(this.at(x, y).isEmpty()) return false;
    }
  }
  return true;
};
  
TicTacToeBoard.prototype.isEmpty = function() {
  for(x = 0; x < 3; x++) {
    for(y = 0; y < 3; y++) {
      if(!this.at(x, y).isEmpty()) return false;
    }
  }
  return true;
};

TicTacToeBoard.prototype.findWinner = function(x, y, stepX, stepY) {
  var first = this.at(x, y);
  if(first.isEmpty()) return false;
  var second = this.at(x + stepX, y + stepY);
  if(!first.equalTo(second)) return false;
  var third = this.at(x + (stepX * 2), y + (stepY * 2));
  if(!first.equalTo(third)) return false;
  this.winner = first.isPlayer1() ? this.player1 : this.player2;
  return true;
};

TicTacToeBoard.prototype.toString = function() {
  sb = "[";
  for(x = 0; x < 3; x++) {
    if(x !== 0) sb += "|";
    for(y = 0; y < 3; y++) {
      sb += this.at(y, x).toString();
    }
  }
  sb += "]";
  return sb;
};