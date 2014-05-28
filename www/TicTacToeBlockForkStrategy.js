function TicTacToeBlockForkStrategy() {

  var rows = ["123", "456", "789", "147", "258", "369", "159", "357"];

  this.getName = function() {
    return "Block Fork";
  };

  this.play = function(board) {
    if(arguments.length != 1) {
      throw new Error("Unexpected number of arguments provided");
    }

    if(board == null) {
      throw new Error("Argument can not be null");
    }

    var decision = {
        canAct: false,
        action: null
      };

    for(var i = 0; i < rows.length; i++) {

      var row1 = rows[i];

      if(
        !isMeInRow(board, row1)
        && isEmptyInRow(board, row1)
        && isOpponentInRow(board, row1)
        ) {

        for(var j = i + 1; j < rows.length; j++) {

          var row2 = rows[j];

          if(
            !isMeInRow(board, row2)
            && isEmptyInRow(board, row2)
            && isOpponentInRow(board, row2)
            ) {

            var cell = board.overlappingCell(row1, row2);

            if(cell === null) {
              continue;
            }

            if(board.isEmptyAt(cell)) {
              decision.canAct = true;
              decision.action = board.getPosition(cell);
              return decision;
            }
          }
        }
      }
    }

    return decision;
  };

  var isOpponentInRow = function(board, row) {
    return board.getMarks(row).indexOf(board.getOpponent()) !== -1;
  };

  var isMeInRow = function(board, row) {
    return board.getMarks(row).indexOf(board.getPlayer()) !== -1;
  };

  var isEmptyInRow = function(board, row) {
    return board.getMarks(row).indexOf(board.noPlayerToken) !== -1;
  };
}
