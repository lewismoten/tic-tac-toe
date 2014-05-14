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
    var board = ticTacToe.new();
  });

  describe("new game", function() {

    it("has no winner", function() {
      expect(ticTacToe.hasWinner).toEqual(false);
    });
    
    it("has not ended", function() {
      expect(ticTacToe.hasEnded).toEqual(false);
    });

    it("is a new game", function() {
      expect(ticTacToe.isNewGame).toEqual(true);
    });
  });
  
  describe("mark", function() {
    beforeEach(function() {
      ticTacToe.new();
    });
    
    it("can mark an unoccupied cell", function(){
      ticTacToe.mark(0, 0);
    });
  });
  
});
