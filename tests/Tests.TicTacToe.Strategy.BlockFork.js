pavlov.specify("Block Fork Strategy", function(){

  describe("Block Fork Strategy", function() {

    var strategy;
    var board;

    before(function() {
      strategy = new TicTacToeBlockForkStrategy();
      board = new TicTacToeBoard();
    });

    it("has correct name", function(){
      assert(strategy.getName()).equals("Block Fork");
    });

    describe("play()", function() {

      it("expects arguments", function() {
        assert(function(){strategy.play();})
          .throwsException("Unexpected number of arguments provided");
      });

      it("expects non-null arguments", function() {
        assert(function(){strategy.play(null);})
          .throwsException("Argument can not be null");
      });

      describe("decision", function() {

        it("is returned", function() {
          var decision = strategy.play(board);
          assert(decision).isNotNull();
        });

        it("has #canAct", function() {
          var decision = strategy.play(board);
          assert(decision.canAct).isDefined();
        });

      });

    });

    describe("block forks", function() {

      it("blocks fork in top left", function() {
        board.importPlay(397);
        var decision = strategy.play(board);
        assert(decision.action).isSameAs(board.getPosition(1));
      });

      it("blocks fork in top center", function() {
        board.importPlay(178);
        var decision = strategy.play(board);
        assert(decision.action).isSameAs(board.getPosition(2));
      });

      it("blocks fork in top right", function() {
        board.importPlay(179);
        var decision = strategy.play(board);
        assert(decision.action).isSameAs(board.getPosition(3));
      });

      it("blocks fork in middle left", function() {
        board.importPlay(126);
        var decision = strategy.play(board);
        assert(decision.action).isSameAs(board.getPosition(4));
      });

      it("blocks fork in middle center", function() {
        board.importPlay(214);
        var decision = strategy.play(board);
        assert(decision.action).isSameAs(board.getPosition(5));
      });

      it("blocks fork in middle right", function() {
        board.importPlay(413);
        var decision = strategy.play(board);
        assert(decision.action).isSameAs(board.getPosition(6));
      });

      it("blocks fork in bottom left", function() {
        board.importPlay(139);
        var decision = strategy.play(board);
        assert(decision.action).isSameAs(board.getPosition(7));
      });

      it("blocks fork in bottom center", function() {
        board.importPlay(712);
        var decision = strategy.play(board);
        assert(decision.action).isSameAs(board.getPosition(8));
      });

      it("blocks fork in right center", function() {
        board.importPlay(317);
        var decision = strategy.play(board);
        assert(decision.action).isSameAs(board.getPosition(9));
      });

      it("two rows with opponent and not crossing returns no play", function() {
        board.importPlay(1739);
        var decision = strategy.play(board);
        assert(decision.canAct).equals(false);
      });
    });
  });
});
