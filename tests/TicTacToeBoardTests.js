describe("TicTacToeBoard", function() {
  var board;
  beforeEach(function() {
    board = new TicTacToeBoard();
  });
  
  it("can mark an unoccupied cell", function(){
    expect(board.mark(0, 0)).toEqual(true);
  });
  
  it("can not mark an occupied cell", function(){
    board.mark(0, 0);
    expect(board.mark(0, 0)).toEqual(false);
  });
});
