function TicTacToeBoard() {
  
  var player = 1;
  var cell = new Array(9);
  var board = this;
  var winner = 0;
  var winningScenarios = [0x07,0x38,0x49,0x54,0x92,0x0111,0x124,0x01C0];

  // TODO: rename
  var po = function(order) {
    return {
      isFirst: order === 1,
      isSecond: order === -1
    };
   };
  var getMask = function(p1) {
    var p = 0;
    for(i = 0; i < 9; i++)
    {
      if(cell[i].data().isFirstPlayer && p1) p |= 1 << (8 - i);
      else if(cell[i].data().isSecondPlayer && !p1) p |= 1 << (8 - i);
    }
    return p;
  };
  
  this.getPlayer = function() { return po(player); };
  this.getWinner = function() { return po(winner); };
  this.at = function(x, y) { return getCell(x, y).data(); };
  this.mark = function(x, y) { return getCell(x, y).mark(); };
  this.hasWinner = function() { return winner !== 0; };
  this.isFull = function() { return (getMask(true) | getMask(false)) === 0x01FF; };
  this.isEmpty = function() { return (getMask(true) | getMask(false)) === 0x00; };

  var getCell = function(x, y){
    if(x < 0 || x > 2 || y < 0 || y > 2) {
      throw new Error("Does not exist (" + x + ", " + y + ")");
    }
    return cell[(y*3)+x];
  };

  var onMarked = function() {
    var firstPlayerMarks = getMask(true);
    var secondPlayerMarks = getMask(false);
    for(var i = 0; i < winningScenarios.length; i++) {
      var scenario = winningScenarios[i];
      if((scenario & firstPlayerMarks) == scenario) {
        winner = 1;
        break;
      }
      else if((scenario & secondPlayerMarks) == scenario) {
        winner = -1;
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