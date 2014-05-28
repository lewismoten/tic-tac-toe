function TicTacToeBlockWinStrategy() {

  var base = new TicTacToeBaseStrategy();

  this.getName = function() {
    return "Block Win";
  };
  
  this.play = function(board) {

    base.validatePlayArguments(arguments);

    var decision = {
        canAct: false,
        action: null
      };

    for(var rowIndex = 0; rowIndex < base.rows.length; rowIndex++) {
      var row = base.rows[rowIndex];
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
