var strategy;
var board;

module( "Take Center Strategy", {
  setup: function() {
    strategy = new TicTacToeTakeCenterStrategy();
    board = new TicTacToeBoard();
  }
});

test("has correct name", function(){
  equal(strategy.getName(), "Take Center");
});

test("#play expects arguments", function() {
  throws(function(){strategy.play();}, "Unexpected number of arguments provided");
});

test("#play expects non-null arguments", function() {
  throws(function(){strategy.play(null);}, "Argument can not be null");
});


test("#play returns decision", function() {
  var decision = strategy.play(board);
  notEqual(decision, null);
});

test("can act on a decision", function() {
  var decision = strategy.play(board);
  ok(decision.canAct);
});

test("can not act when center is occupied", function(){
  board.importPlay(5);
  var decision = strategy.play(board);
  equal(decision.canAct, false);
});

test("has action for an actionable decision", function(){
  var decision = strategy.play(board);
  notEqual(decision.action, null);
});

test("takes center", function() {
  var decision = strategy.play(board);
  equal(decision.action.column, 2);
  equal(decision.action.row, 2);
});
