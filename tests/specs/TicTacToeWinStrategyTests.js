describe("TicTacToeWinStrategy", function() {

  var strategy;

  beforeEach(function() {
    strategy = new TicTacToeWinStrategy();
  });

  it("has correct name", function(){
    expect(strategy.getName()).toEqual("Win");
  });

  describe("#play", function() {

    describe("arguments", function() {

      it("expects argument", function() {
        expect(function(){strategy.play();}).toThrow(new Error("Unexpected number of arguments provided"));
      });

      it("has a non-null argument", function(){
        expect(function(){strategy.play(null);}).toThrow(new Error("Argument can not be null"));
      });

    });

    describe("(board)", function() {

      var board;

      beforeEach(function() {
        board = new TicTacToeBoard();
      });

      it("can come to a decision", function(){
        var decision = strategy.play(board);
        expect(decision).not.toBeNull();
      });

      it("#canAct", function(){
        var decision = strategy.play(board);
        expect(decision.canAct).toBeDefined();
      });

      it("#action", function(){
        var decision = strategy.play(board);
        expect(decision.action).toBeDefined();
      });

      it("can act on a decision", function(){
        board.importPlay(1425);
        var decision = strategy.play(board);
        expect(decision.canAct).toEqual(true);
      });

      it("can not act on an empty board", function(){
        var decision = strategy.play(board);
        expect(decision.canAct).toEqual(false);
      });

      it("has action for an actionable decision", function(){
        board.importPlay(1425);
        var decision = strategy.play(board);
        expect(decision.action).not.toBeNull();
      });

      it("has action.column", function(){
        board.importPlay(1425);
        var decision = strategy.play(board);
        expect(decision.action.column).toBeDefined();
      });

      it("has action.row", function(){
        board.importPlay(1425);
        var decision = strategy.play(board);
        expect(decision.action.row).toBeDefined();
      });

      describe("completes", function() {

        var expectAction = function(marks, column, row) {
          var board = new TicTacToeBoard();
          board.importPlay(marks);
          var decision = strategy.play(board);
          expect(decision.action.column).toEqual(column);
          expect(decision.action.row).toEqual(row);
        };

        describe("a row", function(){

          it("top left", function() { expectAction(3425, 1, 1); });
          it("top center", function() { expectAction(1435, 2, 1); });
          it("top right", function() { expectAction(1425, 3, 1); });

          it("middle left", function() { expectAction(5162, 1, 2); });
          it("middle center", function() { expectAction(4162, 2, 2); });
          it("middle right", function() { expectAction(4152, 3, 2); });

          it("bottom left", function() { expectAction(8192, 1, 3); });
          it("bottom center", function() { expectAction(7192, 2, 3); });
          it("bottom right", function() { expectAction(7182, 3, 3); });

        });

        describe("a column", function(){

          it("left top", function() { expectAction(4578, 1, 1); });
          it("left middle", function() { expectAction(1278, 1, 2); });
          it("left bottom", function() { expectAction(1245, 1, 3); });

          it("middle top", function() { expectAction(5689, 2, 1); });
          it("middle middle", function() { expectAction(2389, 2, 2); });
          it("middle bottom", function() { expectAction(2356, 2, 3); });

          it("right top", function() { expectAction(6598, 3, 1); });
          it("right middle", function() { expectAction(9832, 3, 2); });
          it("right bottom", function() { expectAction(6532, 3, 3); });

        });

        describe("a diagonal", function(){

          it("/ top", function() { expectAction(5678, 3, 1); });
          it("/ middle", function() { expectAction(7832, 2, 2); });
          it("/ bottom", function() { expectAction(3256, 1, 3); });

          it("\\ top", function() { expectAction(5698, 1, 1); });
          it("\\ middle", function() { expectAction(1298, 2, 2); });
          it("\\ bottom", function() { expectAction(1256, 3, 3); });
        });
      });
    });
  });
});
