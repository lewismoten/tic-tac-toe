function TicTacToeWinStrategy() {
  this.getName = function() { return "Win"; };
  this.play = function() {
    var decision = {
        canAct: true,
        action: { }
      };
    return decision;
  };
}