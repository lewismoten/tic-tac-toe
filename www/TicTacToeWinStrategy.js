function TicTacToeWinStrategy() {
  this.getName = function() { return "Win"; };
  this.play = function() {
    var decision = {
        canAct: true,
        action: { column: 3, row: 1 }
      };
    return decision;
  };
}