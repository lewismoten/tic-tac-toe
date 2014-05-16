function TicTacToeBoard() {
  
  var player = 1;
  var cell = new Array(9);
  var board = this;
  var winner = 0;
  var winningScenarios = [0x07,0x38,0x49,0x54,0x92,0x0111,0x124,0x01C0];
  var firstPlayerMarks = 0;
  var secondPlayerMarks = 0;

  // TODO: rename
  var po = function(order) {
    return {
      isFirst: order === 1,
      isSecond: order === -1
    };
   };

  this.getPlayer = function() { return po(player); };
  this.getWinner = function() { return po(winner); };
  this.at = function(x, y) {
    var i = 1 << 8 - getIndex(x, y);
    var cellMark = {
      isFirstPlayer: (firstPlayerMarks & i) == i,
      isSecondPlayer: (secondPlayerMarks & i) == i,
      isEmpty: ((firstPlayerMarks | secondPlayerMarks) & i) === 0x00,
      text: " "
      };
    if(cellMark.isFirstPlayer) {
      cellMark.text = "X";
    } else if(cellMark.isSecondPlayer) {
      cellMark.text = "O";
    }
    return cellMark;
  };
  this.mark = function(x, y) {
    if(winner !== 0) return false;
    var i = 1 << 8 - ((y*3)+x);
    if((firstPlayerMarks & i) == i) return false;
    if((secondPlayerMarks & i) == i) return false;
    if(player == 1) {
      firstPlayerMarks |= i;
    } else {
      secondPlayerMarks |= i;
    }
    return getCell(x, y).mark();
  };
  this.hasWinner = function() { return winner !== 0; };
  this.isFull = function() { return (firstPlayerMarks | secondPlayerMarks) === 0x01FF; };
  this.isEmpty = function() { return (firstPlayerMarks | secondPlayerMarks) === 0x00; };

  var getIndex = function(x, y){
    if(x < 0 || x > 2 || y < 0 || y > 2) {
      throw new Error("Does not exist (" + x + ", " + y + ")");
    }
    return (y*3)+x;
  };
  var getCell = function(x, y){
    return cell[getIndex(x, y)];
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