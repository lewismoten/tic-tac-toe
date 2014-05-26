function TicTacToeTakeCenterStrategy() {

  this.getName = function() { return "Take Center"; };
  this.play = function(board) {
    if(arguments.length != 1) throw new Error("Unexpected number of arguments provided");
    if(board == null) throw new Error("Argument can not be null");

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
