function TicTacToeBaseStrategy() {

  this.rows = ["123", "456", "789", "147", "258", "369", "159", "357"];

  this.validatePlayArguments = function(args) {

    if(args.length != 1) {
      throw new Error("Unexpected number of arguments provided");
    }

    if(args[0] == null) {
      throw new Error("Argument can not be null");
    }

  };

  this.getName = function() {
    return "Unnamed";
  };

  this.isOpponentInRow = function(board, row) {
    return board.getMarks(row).indexOf(board.getOpponent()) !== -1;
  };

  this.isMeInRow = function(board, row) {
    return board.getMarks(row).indexOf(board.getPlayer()) !== -1;
  };

  this.isEmptyInRow = function(board, row) {
    return board.getMarks(row).indexOf(board.noPlayerToken) !== -1;
  };

  this.noDecision = function() {
    return {
      name: this.getName(),
      canAct: false,
      action: null
    };
  }

  this.decision = function(board, cell) {
    return {
      name: this.getName(),
      canAct: true,
      action: board.getPosition(cell)
    };

  }
}
