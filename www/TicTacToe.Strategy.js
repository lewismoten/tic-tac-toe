function TicTacToeStrategy() {
  var strategies = [];

  this.add = function(name) {
    strategies.push(name);
  };

  this.getCommands = function() {
    return strategies;
  };

  this.play = function(board) {
    for(var i = 0; i < strategies.length; i++) {
      var decision = strategies[i].play(board);
      if(decision.canAct) {
        return decision;
      }
    }

    return decision = {
      canAct: false,
      action: null
    };

  };

  this.add(new TicTacToeWinStrategy());
  this.add(new TicTacToeBlockWinStrategy());
  this.add(new TicTacToeForkStrategy());
  this.add(new TicTacToeBlockForkStrategy());
  this.add(new TicTacToeTakeCornerOnFirstMoveStrategy());
  this.add(new TicTacToeTakeCenterStrategy());
  this.add(new TicTacToeTakeOppositeCornerStrategy());
  this.add(new TicTacToeTakeCornerStrategy());
  this.add(new TicTacToeTakeSideStrategy());
}

TicTacToeStrategy.prototype.priorityOf = function(name) {
  var strategies = this.getCommands();
  for(var i = 0; i < strategies.length; i++) {
    if(strategies[i].getName() === name) {
      return i;
    }
  }

  return -1;
};

TicTacToeStrategy.prototype.hasStrategy = function(name) {
  return this.priorityOf(name) != -1;
};
