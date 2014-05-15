function TicTacToeBoard() {
  
  var player = 1;
  var cell = new Array(3);
  var board = this;
  var winner = 0;

  // TODO: rename
  var po = function(order) {
    return {
      isFirst: order === 1,
      isSecond: order === -1
    };
   };
  
  this.getPlayer = function() { return po(player); };
  
  this.isMatch = function(pointA, pointB) {
    return cell[pointA.x][pointA.y].equalTo(cell[pointB.x][pointB.y]);
  };

  var onMarked = function() {
    board.checkForWinner();
    board.changePlayer();
  };

  this.getWinner = function() { return po(winner); };
  
  for(x = 0; x < 3; x++) {
    cell[x] = new Array(3);
    for(y = 0; y < 3; y++) {
      cell[x][y] = new TicTacToeMark(this.getPlayer, onMarked);
    }
  }
  
  this.mark = function(x, y) {
    return cell[x][y].mark();
  };
  
  this.at = function(column, row) { return cell[column][row].data(); };

  this.changePlayer = function() {
    if(this.isGameOver()) {
      player = this.empty;
    } else {
      player *= -1;
    }
  };
  
  this.findWinner = function(x, y, stepX, stepY) {
    if(this.isWinningPath(x, y, stepX, stepY)) {
      winner = this.at(x, y).isFirstPlayer ? 1 : -1;
      return true;
    }
    return false;
  };
  
}

TicTacToeBoard.prototype.isGameOver = function() {
  return this.hasWinner() || this.isFull();
};

TicTacToeBoard.prototype.hasWinner = function() {
  return this.getWinner().isFirst || this.getWinner().isSecond;
};

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


TicTacToeBoard.prototype.isWinningPath = function(x, y, stepX, stepY) {
  if(this.at(x, y).isEmpty) return false;
  var first = {x: x, y: y};
  var second = {x: first.x + stepX, y: first.y + stepY};
  var third = {x: second.x + stepX, y: second.y + stepY};
  return this.isMatch(first, second) && this.isMatch(first, third);
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