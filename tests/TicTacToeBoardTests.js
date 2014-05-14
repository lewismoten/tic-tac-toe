describe("TicTacToeBoard", function() {
  var board;
  beforeEach(function() {
    board = new TicTacToeBoard();
  });
  
  it("starts with player 1", function() {
    expect(board.player).toEqual(board.player1);
  });
  
  it("starts without a winner", function() {
    expect(board.winner).toEqual(board.empty);
  });

  it("can mark an unoccupied cell", function(){
    expect(board.mark(0, 0)).toEqual(true);
  });

  describe("mark corner", function() {
    beforeEach(function() {
      board.mark(0, 0);
    });
    
    it("occupies a cell", function() {
      expect(board.getMark(0, 0)).toEqual(board.player1);
    });
    
    it("changes the player", function() {
      expect(board.player).toEqual(board.player2);
    });
    
    it("can not mark an occupied cell", function(){
      expect(board.mark(0, 0)).toEqual(false);
    });
  });
  
  describe("on draw", function() {
    beforeEach(function() {
      board.mark(0, 0);
      board.mark(1, 0);
      board.mark(2, 0);
      board.mark(0, 1);
      board.mark(1, 1);
      board.mark(0, 2);
      board.mark(2, 1);
      board.mark(2, 2);
      board.mark(1, 2);
    });
    
    it("is no ones turn", function() {
      expect(board.player).toEqual(board.empty);
    });

    it("has no winner", function() {
      expect(board.winner).toEqual(board.empty);
    });
  });
  
  describe("on win", function() {
    beforeEach(function() {
      board.mark(0, 0);
      board.mark(0, 1);
      board.mark(1, 0);
      board.mark(1, 1);
      board.mark(2, 0);
    });
    it("does not have a current player", function() {
      expect(board.player).toEqual(board.empty);
    });
    it("has winner", function() {
      expect(board.winner).not.toEqual(board.empty);
    });
  });
  
  describe("can win", function() {
    it("by player 2", function() {
      board.mark(0, 0);
      board.mark(1, 0);
      board.mark(2, 0);
      board.mark(1, 1);
      board.mark(2, 1);
      board.mark(1, 2);
      expect(board.winner).toEqual(board.player2);
    });
    it("by player 1", function() {
      board.mark(0, 0);
      board.mark(0, 1);
      board.mark(1, 0);
      board.mark(1, 1);
      board.mark(2, 0);
      expect(board.winner).toEqual(board.player1);
    });
    it("with top row", function() {
      board.mark(0, 0);
      board.mark(0, 1);
      board.mark(1, 0);
      board.mark(1, 1);
      board.mark(2, 0);
      expect(board.winner).not.toEqual(board.empty);
    });
    
    it("with middle row", function() {
      board.mark(0, 1);
      board.mark(0, 0);
      board.mark(1, 1);
      board.mark(1, 0);
      board.mark(2, 1);
      expect(board.winner).not.toEqual(board.empty);
    });

    it("with bottom row", function() {
      board.mark(0, 2);
      board.mark(0, 0);
      board.mark(1, 2);
      board.mark(1, 0);
      board.mark(2, 2);
      expect(board.winner).not.toEqual(board.empty);
    });
    
    it("with left column", function() {
      board.mark(0, 0);
      board.mark(1, 0);
      board.mark(0, 1);
      board.mark(1, 1);
      board.mark(0, 2);
      expect(board.winner).not.toEqual(board.empty);
    });
    it("with right column", function() {
      board.mark(2, 0);
      board.mark(1, 0);
      board.mark(2, 1);
      board.mark(1, 1);
      board.mark(2, 2);
      expect(board.winner).not.toEqual(board.empty);
    });
    it("with center column", function() {
      board.mark(1, 0);
      board.mark(2, 0);
      board.mark(1, 1);
      board.mark(2, 1);
      board.mark(1, 2);
      expect(board.winner).not.toEqual(board.empty);
    });
    it("with top-right diagonal", function() {
      board.mark(2, 0);
      board.mark(1, 0);
      board.mark(1, 1);
      board.mark(0, 1);
      board.mark(0, 2);
      expect(board.winner).not.toEqual(board.empty);
    });
    it("with top-left diagonal", function() {
      board.mark(0, 0);
      board.mark(1, 0);
      board.mark(1, 1);
      board.mark(2, 1);
      board.mark(2, 2);
      expect(board.winner).not.toEqual(board.empty);
    });
  });
});
