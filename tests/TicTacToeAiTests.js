describe("TicTacToeAi", function() {
  var ai;
  var board;

  beforeEach(function() {
    ai = new TicTacToeAi();
    board = new TicTacToeBoard();
  });
  
  it("can play", function() {
    var play = ai.play(board);
    expect(play).not.toBeNull();
  });

  it("can not play a completed game", function() {
    board.importPlay(14253);
    var play = ai.play(board);
    expect(play).toBeNull();
  });
});
