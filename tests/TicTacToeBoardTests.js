describe("TicTacToeBoard", function() {
  var board;
  beforeEach(function() {
    board = new TicTacToeBoard();
  });
  
  it("starts with player 1", function() {
    expect(board.getPlayer()).toEqual(board.player1);
  });
  
  it("starts without a winner", function() {
    expect(board.winner).toEqual(board.empty);
  });

  it("can mark an unoccupied cell", function(){
    expect(board.mark(0, 0)).toEqual(true);
  });

  describe("the first mark", function() {
    beforeEach(function() {
      board.mark(0, 0);
    });
    
    it("occupies a cell", function() {
      expect(board.getMark(0, 0)).toEqual(board.player1);
    });
    
    it("changes the player", function() {
      expect(board.getPlayer()).toEqual(board.player2);
    });
    
    it("can not be changed", function(){
      expect(board.mark(0, 0)).toEqual(false);
      expect(board.getMark(0, 0)).toEqual(board.player1);
    });
  });
  
  describe("the game has come to a draw", function() {
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
      expect(board.getPlayer()).toEqual(board.empty);
    });

    it("does not have a winner", function() {
      expect(board.winner).toEqual(board.empty);
    });
  });
  
  describe("the game has been won", function() {
    beforeEach(function() {
      board.mark(0, 0);
      board.mark(0, 1);
      board.mark(1, 0);
      board.mark(1, 1);
      board.mark(2, 0);
    });
    
    it("is no ones turn", function() {
      expect(board.getPlayer()).toEqual(board.empty);
    });
    
    it("has a winner", function() {
      expect(board.winner).not.toEqual(board.empty);
    });
    
    it("can not mark an empty cell", function(){
      expect(board.mark(2, 2)).toEqual(false);
      expect(board.getMark(2, 2)).toEqual(board.empty);
    });
  });
  
  describe("a qualified win", function() {
    it("can be by player 2", function() {
      board.mark(0, 0);
      board.mark(1, 0);
      board.mark(2, 0);
      board.mark(1, 1);
      board.mark(2, 1);
      board.mark(1, 2);
      expect(board.winner).toEqual(board.player2);
    });
    it("can be by player 1", function() {
      board.mark(0, 0);
      board.mark(0, 1);
      board.mark(1, 0);
      board.mark(1, 1);
      board.mark(2, 0);
      expect(board.winner).toEqual(board.player1);
    });
    it("can be the top row", function() {
      board.mark(0, 0);
      board.mark(0, 1);
      board.mark(1, 0);
      board.mark(1, 1);
      board.mark(2, 0);
      expect(board.winner).not.toEqual(board.empty);
    });
    
    it("can be the middle row", function() {
      board.mark(0, 1);
      board.mark(0, 0);
      board.mark(1, 1);
      board.mark(1, 0);
      board.mark(2, 1);
      expect(board.winner).not.toEqual(board.empty);
    });

    it("can be the bottom row", function() {
      board.mark(0, 2);
      board.mark(0, 0);
      board.mark(1, 2);
      board.mark(1, 0);
      board.mark(2, 2);
      expect(board.winner).not.toEqual(board.empty);
    });
    
    it("can be the left column", function() {
      board.mark(0, 0);
      board.mark(1, 0);
      board.mark(0, 1);
      board.mark(1, 1);
      board.mark(0, 2);
      expect(board.winner).not.toEqual(board.empty);
    });
    it("can be the right column", function() {
      board.mark(2, 0);
      board.mark(1, 0);
      board.mark(2, 1);
      board.mark(1, 1);
      board.mark(2, 2);
      expect(board.winner).not.toEqual(board.empty);
    });
    it("can be the center column", function() {
      board.mark(1, 0);
      board.mark(2, 0);
      board.mark(1, 1);
      board.mark(2, 1);
      board.mark(1, 2);
      expect(board.winner).not.toEqual(board.empty);
    });
    it("can be the top-right diagonal", function() {
      board.mark(2, 0);
      board.mark(1, 0);
      board.mark(1, 1);
      board.mark(0, 1);
      board.mark(0, 2);
      expect(board.winner).not.toEqual(board.empty);
    });
    it("can be the top-left diagonal", function() {
      board.mark(0, 0);
      board.mark(1, 0);
      board.mark(1, 1);
      board.mark(2, 1);
      board.mark(2, 2);
      expect(board.winner).not.toEqual(board.empty);
    });
  });
});
