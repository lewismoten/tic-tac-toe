function TicTacToeBoard() {
  
  var player = 1;
  var board = this;
  var winner = 0;
  var winningScenarios = [0x07,0x38,0x49,0x54,0x92,0x0111,0x124,0x01C0];
  var firstPlayerMarks = 0;
  var secondPlayerMarks = 0;
  
  this.firstPlayerToken = "X";
  this.secondPlayerToken = "O";
  this.noPlayerToken = " ";

  // TODO: rename
  var po = function(order) {
    return {
      isFirst: order === 1,
      isSecond: order === -1
    };
   };

  this.getPlayer = function() { return playerToken(player === 1, player === -1); };
  this.getWinner = function() { return playerToken(winner === 1, winner === -1); };
  this.at = function(x, y) {
    var i = getIndex(x, y);
    var first = (firstPlayerMarks & i) == i;
    var second = (secondPlayerMarks & i) == i;
    return playerToken(first, second);
  };
  var playerToken = function(isFirst, isSecond) {
    return isFirst ? board.firstPlayerToken : isSecond ? board.secondPlayerToken : board.noPlayerToken;
  };

  this.mark = function(x, y) {
    if(winner !== 0) return false;
    var i = getIndex(x, y);
    if((firstPlayerMarks & i) == i) return false;
    if((secondPlayerMarks & i) == i) return false;
    if(player == 1) {
      firstPlayerMarks |= i;
    } else {
      secondPlayerMarks |= i;
    }
    onMarked();
    return true;
  };
  this.hasWinner = function() { return winner !== 0; };
  this.marks = function() { return firstPlayerMarks | secondPlayerMarks; };
  this.isFull = function() { return this.marks() === 0x01FF; };
  this.isEmpty = function() { return this.marks() === 0x00; };

  var getIndex = function(x, y){
    if(x < 0 || x > 2 || y < 0 || y > 2) {
      throw new Error();
    }
    return 1 << (8 - ((y*3)+x));
  };

  var onMarked = function() {
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
}

TicTacToeBoard.prototype.isGameOver = function() {
  return this.hasWinner() || this.isFull();
};

TicTacToeBoard.prototype.toString = function() {
  sb = "[";
  for(x = 0; x < 3; x++) {
    if(x !== 0) sb += "|";
    for(y = 0; y < 3; y++) {
      sb += this.at(y, x);
    }
  }
  sb += "]";
  return sb;
};