function TicTacToeTakeSideStrategy() {

  var base = new TicTacToeBaseStrategy();

  this.getName = function() {
    return "Take Side";
  };

  this.play = function(board) {

    base.validatePlayArguments(arguments);

    var decision = {
        canAct: false,
        action: null
      };

    var cells = [2,4,6,8];
    for(var i = 0; i < cells.length; i++) {
      var cell = cells[i];
      if(board.isEmptyAt(cell)) {
        decision.canAct = true;
        decision.action = board.getPosition(cell);
        return decision;
      }
    }

    return decision;
  };
}
