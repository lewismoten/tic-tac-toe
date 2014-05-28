function TicTacToeTakeOppositeCornerStrategy() {

  var base = new TicTacToeBaseStrategy();

  this.getName = function() {
    return "Take Opposite Corner";
  };

  this.play = function(board) {

    base.validatePlayArguments(arguments);

    var decision = {
        canAct: false,
        action: null
      };

    if(board.isOpponentAt(1) && board.isEmptyAt(9)) {
      decision.canAct = true;
      decision.action = board.getPosition(9);
    }
    else if(board.isOpponentAt(9) && board.isEmptyAt(1)) {
      decision.canAct = true;
      decision.action = board.getPosition(1);
    }
    else if(board.isOpponentAt(3) && board.isEmptyAt(7)) {
      decision.canAct = true;
      decision.action = board.getPosition(7);
    }
    else if(board.isOpponentAt(7) && board.isEmptyAt(3)) {
      decision.canAct = true;
      decision.action = board.getPosition(3);
    }

    return decision;
  };
}
