function TicTacToeStrategy() {
  var strategies = [];
  
  this.add = function(name) {
    strategies.push(name);
  };
  
  this.getAll = function() {
    return strategies;
  };

  this.add("win");
  this.add("block");
}

TicTacToeStrategy.prototype.priorityOf = function(name) {
  return this.getAll().indexOf(name);
};
