function TicTacToeTakeCornerOnFirstMoveStrategy() {

  var base = new TicTacToeBaseStrategy();

  this.getName = function() {
    return "Take Corner On First Move";
  };

  this.play = function(board) {

    base.validatePlayArguments(arguments);

    if(board.isEmpty()) {
      return this.decision(board, 1);
    }

    return this.noDecision();

  };
}

TicTacToeTakeCornerOnFirstMoveStrategy.prototype = new TicTacToeBaseStrategy();
