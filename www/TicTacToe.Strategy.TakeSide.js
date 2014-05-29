function TicTacToeTakeSideStrategy() {

  var base = new TicTacToeBaseStrategy();

  this.getName = function() {
    return "Take Side";
  };

  this.play = function(board) {

    base.validatePlayArguments(arguments);

    var cells = [2,4,6,8];
    for(var i = 0; i < cells.length; i++) {
      var cell = cells[i];
      if(board.isEmptyAt(cell)) {
        return this.decision(board, cell);
      }
    }

    return this.noDecision();
  };
}

TicTacToeTakeSideStrategy.prototype = new TicTacToeBaseStrategy();
