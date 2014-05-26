function TicTacToeTakeSideStrategy() {

  this.getName = function() { return "Take Side"; };
  this.play = function(board) {
    if(arguments.length != 1) throw new Error("Unexpected number of arguments provided");
    if(board == null) throw new Error("Argument can not be null");

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
