function TicTacToeBlockForkStrategy() {

  var base = new TicTacToeBaseStrategy();

  this.getName = function() {
    return "Block Fork";
  };

  this.play = function(board) {

    base.validatePlayArguments(arguments);

    for(var i = 0; i < base.rows.length; i++) {

      var row1 = base.rows[i];

      if(
        !base.isMeInRow(board, row1)
        && base.isEmptyInRow(board, row1)
        && base.isOpponentInRow(board, row1)
        ) {

        for(var j = i + 1; j < base.rows.length; j++) {

          var row2 = base.rows[j];

          if(
            !base.isMeInRow(board, row2)
            && base.isEmptyInRow(board, row2)
            && base.isOpponentInRow(board, row2)
            ) {

            var cell = board.overlappingCell(row1, row2);

            if(cell === null) {
              continue;
            }

            if(board.isEmptyAt(cell)) {
              return this.decision(board, cell);
            }
          }
        }
      }
    }

    return this.noDecision();
  };

}

TicTacToeBlockForkStrategy.prototype = new TicTacToeBaseStrategy();
