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

  this.marks = function() { return firstPlayerMarks | secondPlayerMarks; };
  this.getPlayer = function() { return playerToken(player === 1, player === -1); };
  this.getWinner = function() { return playerToken(winner === 1, winner === -1); };
  this.isMarked = function(x, y) { var i = this.getIndex(x, y); return (this.marks() & i) == i; };
  this.at = function(x, y) {
    var i = this.getIndex(x, y);
    var first = (firstPlayerMarks & i) == i;
    var second = (secondPlayerMarks & i) == i;
    return playerToken(first, second);
  };
  
  var playerToken = function(isFirst, isSecond) {
    return isFirst ? board.firstPlayerToken : isSecond ? board.secondPlayerToken : board.noPlayerToken;
  };

  var applyMark = function(x, y) {
    var i = board.getIndex(x, y);
    if(player == 1) firstPlayerMarks |= i; else secondPlayerMarks |= i;
  };
  
  var discoverWinner = function() {
    for(var i = 0; i < winningScenarios.length; i++) {
      var scenario = winningScenarios[i];
      if((scenario & firstPlayerMarks) == scenario) {
        return 1;
      }
      else if((scenario & secondPlayerMarks) == scenario) {
        return -1;
      }
    }
    return 0;
  };
  
  var setNextPlayer = function() {
    player *= board.isGameOver() ? 0 : -1;
  };
  
  this.mark = function(x, y) {
    if(winner !== 0) return false;
    if(this.isMarked(x, y)) return false;
    applyMark(x, y);
    winner = discoverWinner();
    setNextPlayer();
    return true;
  };
}

TicTacToeBoard.prototype.getIndex = function(x, y){
  if(x < 0 || x > 2 || y < 0 || y > 2) {
    throw new Error();
  }
  return 1 << (8 - ((y*3)+x));
};

TicTacToeBoard.prototype.isFull = function() {
  return this.marks() === 0x01FF;
};

TicTacToeBoard.prototype.isEmpty = function() {
  return this.marks() === 0x00;
};

TicTacToeBoard.prototype.isGameOver = function() {
  return this.hasWinner() || this.isFull();
};

TicTacToeBoard.prototype.hasWinner = function() {
  return this.noPlayerToken !== this.getWinner();
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

TicTacToeBoard.prototype.importPlay = function(marks) {
  marks += "";
  for(var i = 0; i < marks.length; i++)
  {
    var x = -1;
    var y = -1;
    switch(marks[i])
    {
      case "1": x = 0; y = 0; break;
      case "2": x = 1; y = 0; break;
      case "3": x = 2; y = 0; break;
      case "4": x = 0; y = 1; break;
      case "5": x = 1; y = 1; break;
      case "6": x = 2; y = 1; break;
      case "7": x = 0; y = 2; break;
      case "8": x = 1; y = 2; break;
      case "9": x = 2; y = 2; break;
    }
    if(x == -1 || y == -1) throw new Error("can not find cell for " + marks[i]);
    var marked = this.mark(x, y);
    if(!marked) throw new Error("Could not mark cell for " + marks[i]);
  }
};