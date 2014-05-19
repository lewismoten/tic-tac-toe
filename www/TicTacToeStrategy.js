function TicTacToeStrategy() {
  var strategies = [];
  
  this.add = function(name) {
    strategies.push(name);
  };
  
  this.getCommands = function() {
    return strategies;
  };

  this.add("win");
  this.add("block win");
  this.add("fork");
  this.add("block fork");
  this.add("take center");
  this.add("take opponents opposite corner");
  this.add("take empty corner");
  this.add("take empty side");
}

TicTacToeStrategy.prototype.priorityOf = function(name) {
  return this.getCommands().indexOf(name);
};
