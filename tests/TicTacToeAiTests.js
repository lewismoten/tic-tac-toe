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
  
  it("returns x coordinate", function() {
    var play = ai.play(board);
    expect(play.x).toBeDefined();
  });
  
  it("returns y coordinate", function() {
    var play = ai.play(board);
    expect(play.y).toBeDefined();
  });
});
