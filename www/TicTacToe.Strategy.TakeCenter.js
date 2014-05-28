function TicTacToeTakeCenterStrategy() {

  var base = new TicTacToeBaseStrategy();

  this.getName = function() {
     return "Take Center";
  };

  this.play = function(board) {

    base.validatePlayArguments(arguments);

    var decision = {
        canAct: false,
        action: null
      };

    if(board.isEmptyAt(5)) {
      decision.canAct = true;
      decision.action = board.getPosition(5);
    }

    return decision;
  };
}
