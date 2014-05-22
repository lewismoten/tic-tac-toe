describe("TicTacToeAi", function() {
  var ai;
  var board;

  beforeEach(function() {
    ai = new TicTacToeAi();
    board = new TicTacToeBoard();
  });
  
  it("can play", function() {
    expect( function(){ ai.play(board);} ).not.toThrow();
  });

  it("can not play a completed game", function() {
    board.importPlay(14253);
    expect( function(){ ai.play(board);} ).toThrow();
  });
  
  describe("play", function() {
    var play;
    afterEach(function() {
      expect(board.mark(play.x, play.y)).toEqual(true);
    });
    
    it("returns x coordinate", function() {
      play = ai.play(board);
      expect(play.x).toBeDefined();
    });
    
    it("returns y coordinate", function() {
      play = ai.play(board);
      expect(play.y).toBeDefined();
    });
    
    it("completes a row", function() {
      board.importPlay(1425);
      play = ai.play(board);
      expect(play).toEqual({x: 2, y: 0});
    });
  
    it("blocks opponent when row can not be completed", function() {
      board.importPlay(1475);
      play = ai.play(board);
      expect(play).toEqual({x: 2, y: 1});
    });
    
    it("forks when opponent can not be blocked", function() {
      board.importPlay(1489);
      play = ai.play(board);
      expect(play).toEqual({x: 1, y: 0});
    });
  
    it("blocks opponents fork", function() {
      board.importPlay(159);
      play = ai.play(board);
      expect(play).not.toEqual({x:2, y:0});
      expect(play).not.toEqual({x:0, y:2});
    });
  });
});
