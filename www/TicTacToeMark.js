function TicTacToeMark(onMark) {
  var player1 = 1;
  var player2 = -1;
  var empty = 0;
  var value = empty;
  
  this.mark = onMark;

  this.markAsPlayer1 = function() {
    if(value !== empty) return false;
    value = player1;
    return true;
  };
  
  this.markAsPlayer2 = function() {
    if(value != empty) return false;
    value = player2;
    return true;
  };
  
  this.data = function() {
    var s = value == empty ? ' ' :
      value == player1 ? 'X' :
      value == player2 ? 'O' : '?';
    return {
      isFirstPlayer: value == player1,
      isSecondPlayer: value == player2,
      isEmpty: value == empty,
      text: s
      };
  };
  
}

TicTacToeMark.prototype.equalTo = function(that) {
  return this.data().text == that.data().text;
};

