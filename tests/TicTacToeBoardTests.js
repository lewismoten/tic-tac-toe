describe("TicTacToeBoard", function() {
  var board;
  beforeEach(function() {
    board = new TicTacToeBoard();
  });
  
  it("starts with player 1", function() {
    expect(board.player).toEqual(board.player1);
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
      board.mark(2, 1);
      board.mark(1, 2);
      board.mark(0, 2);
      board.mark(2, 2);
    });
    
    it("is no ones turn", function() {
      expect(board.player).toEqual(board.empty);
    });
  });
  
  describe("win", function() {
    it("has three X on top row", function() {
      board.mark(0, 0);
      board.mark(0, 1);
      board.mark(1, 0);
      board.mark(1, 1);
      board.mark(0, 2);
      expect(board.winner).toEqual(board.player1);
    });
  });
});
