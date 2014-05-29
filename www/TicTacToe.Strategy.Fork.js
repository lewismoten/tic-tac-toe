function TicTacToeForkStrategy() {

  var base = new TicTacToeBaseStrategy();

  this.getName = function() {
    return "Fork";
  };

  this.play = function(board) {

    base.validatePlayArguments(arguments);

    for(var i = 0; i < base.rows.length; i++) {

      if(
        base.isMeInRow(board, base.rows[i])
        && base.isEmptyInRow(board, base.rows[i])
        && !base.isOpponentInRow(board, base.rows[i])
        ) {
        for(var j = i + 1; j < base.rows.length; j++) {

          if(
            base.isMeInRow(board, base.rows[j])
            && base.isEmptyInRow(board, base.rows[j])
            && !base.isOpponentInRow(board, base.rows[j])
            ) {

            var cell = board.overlappingCell(base.rows[i], base.rows[j]);

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

TicTacToeForkStrategy.prototype = new TicTacToeBaseStrategy();
