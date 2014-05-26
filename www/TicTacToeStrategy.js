function TicTacToeStrategy() {
  var strategies = [];

  this.add = function(name) {
    strategies.push(name);
  };

  this.getCommands = function() {
    return strategies;
  };

  this.add(new TicTacToeWinStrategy());
  this.add(new TicTacToeBlockWinStrategy());
  this.add(new TicTacToeBaseStrategy("fork"));
  this.add(new TicTacToeBaseStrategy("block fork"));
  this.add(new TicTacToeTakeCenterStrategy());
  this.add(new TicTacToeBaseStrategy("take opponents opposite corner"));
  this.add(new TicTacToeBaseStrategy("take empty corner"));
  this.add(new TicTacToeBaseStrategy("take empty side"));
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

function TicTacToeBaseStrategy(name) {
  this.getName = function() { return name; };
}
