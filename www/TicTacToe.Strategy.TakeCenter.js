function TicTacToeTakeCenterStrategy() {

  var base = new TicTacToeBaseStrategy();

  this.getName = function() {
     return "Take Center";
  };

  this.play = function(board) {

    base.validatePlayArguments(arguments);

    if(board.isEmptyAt(5)) {
      return this.decision(board, 5);
    }

    return this.noDecision();
  };
}

TicTacToeTakeCenterStrategy.prototype = new TicTacToeBaseStrategy();
