function TicTacToeAi() {
  this.play = function(board) {
    if(board.isGameOver()) throw new Error();
    return 1;
  };
}