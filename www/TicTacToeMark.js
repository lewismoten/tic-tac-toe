function TicTacToeMark(onMark) {
  var firstPlayer = "X";
  var secondPlayer = "O";
  var empty = " ";
  var value = " ";
  
  this.mark = onMark;

  this.markAsFirstPlayer = function() {
    if(value !== empty) return false;
    value = firstPlayer;
    return true;
  };
  
  this.markAsSecondPlayer = function() {
    if(value != empty) return false;
    value = secondPlayer;
    return true;
  };
  
  this.data = function() {
    return {
      isFirstPlayer: value == firstPlayer,
      isSecondPlayer: value == secondPlayer,
      isEmpty: value == empty,
      text: value
      };
  };
  
}

TicTacToeMark.prototype.equalTo = function(that) {
  return this.data().text == that.data().text;
};

