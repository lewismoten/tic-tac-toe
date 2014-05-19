function TicTacToeStrategy() {
  var strategies = [];
  
  this.add = function(name) {
    strategies.push(name);
  };
  
  this.getAll = function() {
    return strategies;
  };

  this.add("win");
  this.add("block win");
  this.add("fork");
  this.add("block fork");
  this.add("take center");
  this.add("take corner");
}

TicTacToeStrategy.prototype.priorityOf = function(name) {
  return this.getAll().indexOf(name);
};
