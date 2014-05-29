function TicTacToeWinStrategy() {

  var base = new TicTacToeBaseStrategy();

  this.getName = function() {
    return "Win";
  };

  this.play = function(board) {

    base.validatePlayArguments(arguments);

    for(var rowIndex = 0; rowIndex < base.rows.length; rowIndex++) {
      var row = base.rows[rowIndex];
      var myCount = 0;
      var myWin = -1;

      for(var cellIndex = 0; cellIndex < row.length; cellIndex++)
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
        return this.decision(board, myWin);
      }
    }

    return this.noDecision();
  };
}

TicTacToeWinStrategy.prototype = new TicTacToeBaseStrategy();
