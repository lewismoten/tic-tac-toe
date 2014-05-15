function TicTacToeMark(onMark) {
  var player1 = 1;
  var player2 = -1;
  var empty = 0;
  var value = empty;
  
  this.mark = onMark;

  this.isEmpty = function() {
    return value === empty;
  };
  
  this.isPlayer1 = function() {
    return value === player1;
  };
  
  this.isPlayer2 = function() {
    return value === player2;
  };
  
  this.markAsPlayer1 = function() {
    if(!this.isEmpty()) return false;
    value = player1;
    return true;
  };
  
  this.markAsPlayer2 = function() {
    if(!this.isEmpty()) return false;
    value = player2;
    return true;
  };
  
  this.data = function() {
    var s = this.isEmpty() ? ' ' : this.isPlayer1() ? 'X' : this.isPlayer2() ? 'O' : '?';
    return {
      isFirstPlayer: this.isPlayer1(),
      isSecondPlayer: this.isPlayer2(),
      isEmpty: this.isEmpty(),
      text: s
      };
  };
  
}

TicTacToeMark.prototype.equalTo = function(that) {
  return this.data().text == that.data().text;
};

