describe("TicTacToeMarks", function() {
  var marks;
  
  beforeEach(function() {
    marks = new TicTacToeMarks();
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
