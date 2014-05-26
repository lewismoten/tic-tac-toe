var strategy;
var board;

module( "Take Side Strategy", {
  setup: function() {
    strategy = new TicTacToeTakeSideStrategy();
    board = new TicTacToeBoard();
  }
});

test("has correct name", function(){
  equal(strategy.getName(), "Take Side");
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

test("can not act when sides are occupied", function(){
  board.importPlay(2468);
  var decision = strategy.play(board);
  equal(decision.canAct, false);
});

test("takes left", function(){
  board.importPlay(268);
  var decision = strategy.play(board);
  equal(decision.action.column, 1);
  equal(decision.action.row, 2);
});

test("takes right", function(){
  board.importPlay(248);
  var decision = strategy.play(board);
  equal(decision.action.column, 3);
  equal(decision.action.row, 2);
});

test("takes top", function(){
  board.importPlay(468);
  var decision = strategy.play(board);
  equal(decision.action.column, 2);
  equal(decision.action.row, 1);
});

test("takes bottom", function(){
  board.importPlay(246);
  var decision = strategy.play(board);
  equal(decision.action.column, 2);
  equal(decision.action.row, 3);
});
