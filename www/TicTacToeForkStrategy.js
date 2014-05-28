function TicTacToeForkStrategy() {

  var base = new TicTacToeBaseStrategy();

  this.getName = function() {
    return "Fork";
  };

  this.play = function(board) {

    base.validatePlayArguments(arguments);

    var decision = {
        canAct: false,
        action: null
      };

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
}
