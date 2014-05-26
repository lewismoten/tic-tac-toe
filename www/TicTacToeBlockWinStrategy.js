function TicTacToeBlockWinStrategy() {

  var rows = ["123", "456", "789", "147", "258", "369", "159", "357"];

  this.getName = function() { return "Block Win"; };
  this.play = function(board) {
    if(arguments.length != 1) throw new Error("Unexpected number of arguments provided");
    if(board == null) throw new Error("Argument can not be null");

    var decision = {
        canAct: false,
        action: null
      };

    for(var rowIndex = 0; rowIndex < rows.length; rowIndex++) {
      var row = rows[rowIndex];
      var count = 0;
      var empty = -1;

      for(var cellIndex = 0; cellIndex < row.length; cellIndex++)
      {
        var cell = row[cellIndex];

        if(board.isOpponentAt(cell)) {
          count++;
        }
        else if(board.isEmptyAt(cell)) {
          empty = cell;
        }
        else {
          break;
        }
      }

      if(count == 2 && empty != -1) {
        decision.canAct = true;
        decision.action = board.getPosition(empty);
        return decision;
      }
    }

    return decision;
  };
}
