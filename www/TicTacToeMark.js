function TicTacToeMark(onGetPlayer, onMarked) {
  var firstPlayer = "X";
  var secondPlayer = "O";
  var empty = " ";
  var value = " ";
  
  this.mark = function() {
    if(value !== empty) return false;
    if(onGetPlayer){

    var player = onGetPlayer();
    if(player.isFirst) {
      value = firstPlayer;
    } else if(player.isSecond) {
      value = secondPlayer;
    } else {
      return false;
    }
    if(onMarked) onMarked();
    return true;
    }
    throw new Error("Can not mark without knowing the player.")
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

