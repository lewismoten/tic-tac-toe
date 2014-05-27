function TicTacToeForkStrategy() {

  var rows = ["123", "456", "789", "147", "258", "369", "159", "357"];

  this.getName = function() {
    return "Fork";
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

      if(
        isMeInRow(board, rows[i])
        && isEmptyInRow(board, rows[i])
        && !isOpponentInRow(board, rows[i])
        ) {
        for(var j = 0; j < rows.length; j++) {

          if(j === i) {
            continue;
          }

          if(
            isMeInRow(board, rows[j])
            && isEmptyInRow(board, rows[j])
            && !isOpponentInRow(board, rows[j])
            ) {

            var cell = overlap(rows[i], rows[j]);

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

  var overlap = function(row1, row2) {
    for(var i = 0; i < row1.length; i++) {
      if(row2.indexOf(row1[i]) !== -1) {
        return row1[i];
      }
    }
    return null;
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
