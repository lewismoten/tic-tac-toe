function TicTacToeStrategy() {
  var strategies = [];
  
  this.add = function(name) {
    strategies.push(name);
  };
  
  this.getAll = function() {
    return strategies;
  };
}
