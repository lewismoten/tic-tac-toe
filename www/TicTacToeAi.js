function TicTacToeAi() {
  this.play = function(board) {
    if(board.isGameOver()) return null;
    return 1;
  };
}