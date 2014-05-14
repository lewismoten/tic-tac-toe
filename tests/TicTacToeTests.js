describe("TicTacToe", function() {
  var ticTacToe;

  beforeEach(function() {
    ticTacToe = new TicTacToe();
  });

  it("has marks", function() {
    expect(ticTacToe.marks).not.toBeNull();
  });

  it("may start a new game", function() {
    ticTacToe.new();
  });

  describe("new game", function() {

    it("has no winner", function() {
      expect(ticTacToe.hasWinner).toEqual(false);
    });
    
    it("has not ended", function() {
      expect(ticTacToe.hasEnded).toEqual(false);
    });

    it("is a new game", function() {
      expect(ticTacToe.isNewGame()).toEqual(true);
    });
    
    describe("mark first cell", function(){
      beforeEach(function() {
        ticTacToe.board.mark(0, 0);
      });
      
      it("is not a new game", function() {
        expect(ticTacToe.isNewGame()).toEqual(false);
      });
    });
  });
  
  describe("player", function() {
    beforeEach(function() {
      ticTacToe.new();
    });
    
    it("can mark an unoccupied cell", function(){
      expect(ticTacToe.board.mark(0, 0)).toEqual(true);
    });
    
    it("can not mark an occupied cell", function(){
      ticTacToe.board.mark(0, 0);
      expect(ticTacToe.board.mark(0, 0)).toEqual(false);
    });
  });
  
});
