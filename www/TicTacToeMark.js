/*

var mark = new TicTacToeMark(onGetPlayer, onMarked);
mark.mark() - marks the cell if it is not filled based on results from onGetPlayer();
mark.data() - gets data that represents the cell;
mark.equalTo(otherMark) - compares two marks to see if they match

onGetPlayer - expected to return {isFirst: [boo], isSecond [boo]} to determine who is marking the cell
onMarked - calback after the mark has changed for callee to perform actions afterwards
*/

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

TicTacToeMark.prototype.equalTo = function(otherMark) {
  return this.data().text == otherMark.data().text;
};

