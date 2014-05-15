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
      expect(ticTacToe.board.winner).toEqual(ticTacToe.board.empty);
    });
    
    it("has empty board", function() {
      expect(ticTacToe.board.isEmpty()).toEqual(true);
    });
    
    describe("marked", function(){
      beforeEach(function() {
        ticTacToe.board.at(0, 0).mark();
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
