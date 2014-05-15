function TicTacToeMark(onMark) {
  var player1 = "X";
  var player2 = "O";
  var empty = " ";
  var value = " ";
  
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
    return {
      isFirstPlayer: value == player1,
      isSecondPlayer: value == player2,
      isEmpty: value == empty,
      text: value
      };
  };
  
}

TicTacToeMark.prototype.equalTo = function(that) {
  return this.data().text == that.data().text;
};

