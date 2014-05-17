describe("TicTacToeAi", function() {
  var ai;

  beforeEach(function() {
    ai = new TicTacToeAi();
  });
  
  it("can play", function() {
    var play = ai.play();
    expect(play).not.toBeNull();
  });
});
