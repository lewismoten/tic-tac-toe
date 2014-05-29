function TicTacToeTakeOppositeCornerStrategy() {

  var base = new TicTacToeBaseStrategy();

  this.getName = function() {
    return "Take Opposite Corner";
  };

  this.play = function(board) {

    base.validatePlayArguments(arguments);

    var corners = [
      [1, 9],
      [9, 1],
      [3, 7],
      [7, 3]
    ];

    for(var i = 0; i < corners.length; i++) {

      var corner = corners[i][0];

      var oppositeCorner = corners[i][1]

      if(board.isOpponentAt(corner)
      && board.isEmptyAt(oppositeCorner)) {
        return this.decision(board, oppositeCorner);
      }
    }

    return this.noDecision();
  };
}

TicTacToeTakeOppositeCornerStrategy.prototype = new TicTacToeBaseStrategy();
