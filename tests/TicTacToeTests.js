describe("TicTacToe", function() {
  var ticTacToe;

  beforeEach(function() {
    ticTacToe = new TicTacToe();
  });

  describe("marks", function() {
    var marks;
    
    beforeEach(function() {
      marks = ticTacToe.marks;
    });
    
    it("exists", function() {
      expect(marks).not.toBeNull();
    });
    
    it("has ' ' for empty cell", function() {
      expect(marks.empty).toEqual(' ');
    });
    
    it("has 'X' for player 1", function() {
      expect(marks.playerOne).toEqual('X');
    });
    
    it("has 'O' for player 2", function() {
      expect(marks.playerTwo).toEqual('O');
    });
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
