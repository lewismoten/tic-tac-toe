function TicTacToeWinStrategy() {

  var rows = ["123", "456", "789", "147", "258", "369", "159", "357"];

  this.getName = function() { return "Win"; };
  this.play = function(board) {
    if(arguments.length != 1) throw new Error("Unexpected number of arguments provided");
    if(board == null) throw new Error("Argument can not be null");

    var decision = {
        canAct: false,
        action: null
      };

    for(var rowIndex = 0; rowIndex < rows.length; rowIndex++) {
      var row = rows[rowIndex];
      var myCount = 0;
      var myWin = -1;

      for(cellIndex = 0; cellIndex < row.length; cellIndex++)
      {
        var cell = row[cellIndex];

        if(board.isPlayerAt(cell)) {
          myCount++;
        }
        else if(board.isEmptyAt(cell)) {
          myWin = cell;
        }
        else {
          break;
        }
      }

      if(myCount == 2 && myWin != -1) {
        decision.canAct = true;
        decision.action = board.getPosition(myWin);
        return decision;
      }
    }

    return decision;
  };
}
