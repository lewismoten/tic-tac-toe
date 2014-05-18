describe("TicTacToeAi", function() {
  var ai;
  var board;

  beforeEach(function() {
    ai = new TicTacToeAi();
    board = new TicTacToeBoard();
  });
  
  it("can play", function() {
    expect( function(){ ai.play(board);} ).not.toThrow();
  });

  it("can not play a completed game", function() {
    board.importPlay(14253);
    expect( function(){ ai.play(board);} ).toThrow();
  });
});
