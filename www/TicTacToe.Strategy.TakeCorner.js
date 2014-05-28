function TicTacToeTakeCornerStrategy() {

  var base = new TicTacToeBaseStrategy();

  this.getName = function() {
    return "Take Corner";
  };
  
  this.play = function(board) {

    base.validatePlayArguments(arguments);

    var decision = {
        canAct: false,
        action: null
      };

    var cells = [1,3,7,9];
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
