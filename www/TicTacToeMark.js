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
    return {
      isPlayer1: this.isPlayer1(),
      isPlayer2: this.isPlayer2(),
      isEmpty: this.isEmpty(),
      text: this.toString()
      };
  };
}

TicTacToeMark.prototype.toString = function() {
  if(this.isEmpty()) return ' ';
  if(this.isPlayer1()) return 'X';
  if(this.isPlayer2()) return 'O';
  return '?';
};

TicTacToeMark.prototype.equalTo = function(mark) {
  return this.isEmpty() == mark.isEmpty()
  && this.isPlayer1() == mark.isPlayer1()
  && this.isPlayer2() == mark.isPlayer2();
};