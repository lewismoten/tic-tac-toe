pavlov.specify("Pavlov Example", function(){
  describe("xxxTicTacToeAi", function() {
    var ai;
    var board;

    before(function() {
      ai = new TicTacToeAi();
      board = new TicTacToeBoard();
    });

    it("can play", function() {
      assert(ai.play(board)).isNotNull();
    });

    it("can not play a completed game", function() {
      board.importPlay(14253);
      assert( function(){ ai.play(board);} ).throwsException();
    });

    describe("play", function() {
      var play;
      after(function() {
        assert(board.mark(play.x, play.y)).equals(true);
      });

      it("returns x coordinate", function() {
        play = ai.play(board);
        assert(play.x).isDefined();
      });

      it("returns y coordinate", function() {
        play = ai.play(board);
        assert(play.y).isDefined();
      });

      it("completes a row", function() {
        board.importPlay(1425);
        play = ai.play(board);
        assert(play).isSameAs(board.getPosition(3));
      });

      it("blocks opponent when row can not be completed", function() {
        board.importPlay(1475);
        play = ai.play(board);
        assert(play).equals({x: 2, y: 1});
      });

      it("forks when opponent can not be blocked", function() {
        board.importPlay(1489);
        play = ai.play(board);
        assert(play).equals({x: 1, y: 0});
      });

      it("blocks opponents fork", function() {
        board.importPlay(159);
        play = ai.play(board);
        assert(play).not.toEqual({x:2, y:0});
        assert(play).not.toEqual({x:0, y:2});
      });
    });
  });
});
