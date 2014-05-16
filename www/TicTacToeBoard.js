function TicTacToeBoard() {
  
  var player = 1;
  var cell = new Array(9);
  var board = this;
  var winner = 0;
  var winningPaths = ["012","345","678","036","147","258","048","246"];

  // TODO: rename
  var po = function(order) {
    return {
      isFirst: order === 1,
      isSecond: order === -1
    };
   };
  
  this.getPlayer = function() { return po(player); };
  this.getWinner = function() { return po(winner); };
  this.at = function(x, y) { return getCell(x, y).data(); };
  this.mark = function(x, y) { return getCell(x, y).mark(); };
  this.hasWinner = function() { return winner !== 0; };
  this.isFull = function() { for(var i = 0; i < 9; i++) if(cell[i].data().isEmpty) return false; return true; };
  this.isEmpty = function() { for(var i = 0; i < 9; i++) if(!cell[i].data().isEmpty) return false; return true; };

  var getCell = function(x, y){
    if(x < 0 || x > 2 || y < 0 || y > 2) {
      throw new Error("Does not exist (" + x + ", " + y + ")");
      
    }
    return cell[(y*3)+x];
  };

  var onMarked = function() {
    for(var i = 0; i < winningPaths.length; i++) {
      var path = winningPaths[i];
      var a = cell[path[0]];
      if(a.data().isEmpty) continue;
      var b = cell[path[1]];
      if(!a.equalTo(b)) continue;
      var c = cell[path[2]];
      if(a.equalTo(c)) {
        winner = a.data().isFirstPlayer ? 1 : -1;
        break;
      }
    }
    player *= board.isGameOver() ? 0 : -1;
  };

  for(i = 0; i < 9; i++) {
    cell[i] = new TicTacToeMark(this.getPlayer, onMarked);
  }
}

TicTacToeBoard.prototype.isMatch = function(a, b) {
  return this.at(a.x, a.y).text === this.at(b.x, b.y).text;
};

TicTacToeBoard.prototype.isGameOver = function() {
  return this.hasWinner() || this.isFull();
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