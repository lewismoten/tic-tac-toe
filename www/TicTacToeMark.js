function TicTacToeMark() {
  var player1 = 1;
  var player2 = -1;
  var empty = 0;
  var mark = empty;
  
  this.isEmpty = function() {
    return mark === empty;
  }
  this.isPlayer1 = function() {
    return mark === player1;
  }
  this.isPlayer2 = function() {
    return mark === player2;
  }
  this.markAsPlayer1 = function() {
    if(!this.isEmpty()) return false;
    mark = player1;
    return true;
  };
  this.markAsPlayer2 = function() {
    if(!this.isEmpty()) return false;
    mark = player2;
    return true;
  };
}

TicTacToeMark.prototype.toString = function() {
  if(this.isEmpty()) return ' ';
  if(this.isPlayer1()) return 'X';
  if(this.isPlayer2()) return 'O';
  return '?';
};