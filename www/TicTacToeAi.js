function TicTacToeAi() {
  var ai = this;
  var rows = ["123", "456", "789", "147", "258", "369", "159", "357"];

  var getStrategy = function() {
    return [
      gameOverStrategy,
      winStrategy,
      blockWinStrategy,
      forkStrategy
      ];
  };

  this.play = function(board) {

    var strategies = getStrategy();

    for(i = 0; i < strategies.length; i++) {
      var move = strategies[i](board);
      if(move !== null) return move;
    }

    return {x: 1, y: 0};
  };

  // var forkStrategy = function(board) {
  //   for(var i = 0; i < rows.length; i++) {
  //     if(isMeInRow(board, rows[i]) && isEmptyInRow(board, rows[i] && !isOpponentInRow(board, rows[i]))) {
  //       for(var j = 0; j < rows.length; j++) {
  //         if(j === i) continue;
  //         if(isMeInRow(board, rows[j]) && isEmptyInRow(board, rows[j] && !isOpponentInRow(board, rows[j]))) {
  //           var cell = overlap(rows[i], rows[j]);
  //           if(cell === null) continue;
  //           throw "HELLO";
  //           if(isEmptyAt(board, cell)) return ai.cellToCoordinates(cell);
  //         }
  //       }
  //     }
  //   }
  //
  //   return null;
  // };
  //
  // var overlap = function(row1, row2) {
  //   for(var i = 0; i < row1.length; i++) {
  //     if(row2.indexOf(row1[i]) !== -1) {
  //       return row1[i];
  //     }
  //   }
  //   return null;
  // };

  // var isEmptyInRow = function(board, row) {
  //   for(var i = 0; i < row.length; i++) {
  //     if(isEmptyAt(board, row[i])) {
  //       return true;
  //     }
  //   }
  //   return false;
  // };
  //
  // var isOpponentInRow = function(board, row) {
  //   for(var i = 0; i < row.length; i++) {
  //     if(isOpponentAt(board, row[i])) {
  //       return true;
  //     }
  //   }
  //   return false;
  // };
  //
  // var isMeInRow = function(board, row) {
  //   for(var i = 0; i < row.length; i++) {
  //     if(isMeAt(board, row[i])) {
  //       return true;
  //     }
  //   }
  //   return false;
  // };
  //
  // var isOpponentAt = function(board, cell) {
  //   return !(isMeAt(board, cell) || isEmptyAt(board, cell));
  // };
  //
  // var isMeAt = function(board, cell) {
  //   var position = ai.cellToCoordinates(cell);
  //   return board.at(position.x, position.y) == board.getPlayer();
  // };
  //
  // var isEmptyAt = function(board, cell) {
  //   var position = ai.cellToCoordinates(cell);
  //   return board.at(position.x, position.y) == board.noPlayerToken;
  // };
  //
}
