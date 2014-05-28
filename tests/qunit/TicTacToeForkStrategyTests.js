pavlov.specify("Fork Strategy", function(){

  describe("Fork Strategy", function() {

    var strategy;
    var board;

    before(function() {
      strategy = new TicTacToeForkStrategy();
      board = new TicTacToeBoard();
    });

    it("has correct name", function(){
      assert(strategy.getName()).equals("Fork");
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

    describe("forks", function() {

      it("at bottom right when in top left and bottom left", function() {
        board.importPlay(1273);
        var decision = strategy.play(board);
        assert(decision.action).isSameAs(board.getPosition(9));
      });

      it("at bottom left when in top right and bottom right", function() {
        board.importPlay(3192);
        var decision = strategy.play(board);
        assert(decision.action).isSameAs(board.getPosition(7));
      });

      it("at top left when in bottom right and top right", function() {
        board.importPlay(9738);
        var decision = strategy.play(board);
        assert(decision.action).isSameAs(board.getPosition(1));
      });

      it("at top right when in bottom left and top left", function() {
        board.importPlay(7918);
        var decision = strategy.play(board);
        assert(decision.action).isSameAs(board.getPosition(3));
      });

      it("two rows with player and not opponent crossing returns no play", function() {
        board.importPlay(1475);
        var decision = strategy.play(board);
        equal(decision.canAct, false);
      });
    });
  });
});
