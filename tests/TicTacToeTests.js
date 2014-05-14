describe("TicTacToe", function() {
  var ticTacToe;

  beforeEach(function() {
    ticTacToe = new TicTacToe();
  });

  it("has marks", function() {
    expect(ticTacToe.marks).not.toBeNull();
  });
  
  it("specifies an empty cell mark", function() {
    expect(ticTacToe.marks.empty).toEqual(' ');
  });
  
  it("specifies the player 1 mark", function() {
    expect(ticTacToe.marks.playerOne).toEqual('X');
  });
  
  it("specifies the player 2 mark", function() {
    expect(ticTacToe.marks.playerTwo).toEqual('O');
  });
  
  it("may start a new game", function() {
    var board = ticTacToe.start();
  });

  describe("when a game has been started", function() {
    beforeEach(function() {
      ticTacToe.start();
    });

    it("must be no winner", function() {
      expect(ticTacToe.hasWinner).toEqual(false);
    });
    
    it("must be a new game", function() {
      expect(ticTacToe.isNewGame).toEqual(true);
    });
  });
  
});
