function TicTacToeTakeCornerStrategy() {

  var base = new TicTacToeBaseStrategy();

  this.getName = function() {
    return "Take Corner";
  };

  this.play = function(board) {

    base.validatePlayArguments(arguments);

    var corners = [1, 3, 7, 9];

    for(var i = 0; i < corners.length; i++) {
      var cell = corners[i];
      if(board.isEmptyAt(cell)) {
        return this.decision(board, cell);
      }
    }

    return this.noDecision();
  };
}

TicTacToeTakeCornerStrategy.prototype = new TicTacToeBaseStrategy();
