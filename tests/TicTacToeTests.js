describe("TicTacToe", function() {
  var ticTacToe;

  beforeEach(function() {
    ticTacToe = new TicTacToe();
  });

  it("may start a new game", function() {
    ticTacToe.new();
  });

  describe("new", function() {
      beforeEach(function() {
        ticTacToe.new();
      });

    it("has no winner", function() {
      expect(ticTacToe.board.getWinner().isEmpty()).toEqual(true);
    });
    
    it("has empty board", function() {
      expect(ticTacToe.board.isEmpty()).toEqual(true);
    });
    
    describe("marked", function(){
      beforeEach(function() {
        ticTacToe.board.mark(0, 0);
      });
      
      it("does not have an empty board", function() {
        expect(ticTacToe.board.isEmpty()).toEqual(false);
      });

      describe("new", function(){
        beforeEach(function() {
          ticTacToe.new();
        });
        
        it("has an empty board", function() {
          expect(ticTacToe.board.isEmpty()).toEqual(true);
        });
      });

    });
  });
});
