function TicTacToeStrategy() {
  var strategies = [];
  
  this.add = function(name) {
    strategies += name;
  };
  
  this.getAll = function() {
    return strategies;
  };
}
