var strategy;
var board;

module( "Take Corner Strategy", {
  setup: function() {
    strategy = new TicTacToeTakeCornerStrategy();
    board = new TicTacToeBoard();
  }
});

test("has correct name", function(){
  equal(strategy.getName(), "Take Corner");
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

test("can not act when corners are occupied", function(){
  board.importPlay(1379);
  var decision = strategy.play(board);
  equal(decision.canAct, false);
});

test("takes lower left", function(){
  board.importPlay(139);
  var decision = strategy.play(board);
  equal(decision.action.column, 1);
  equal(decision.action.row, 3);
});

test("takes lower right", function(){
  board.importPlay(137);
  var decision = strategy.play(board);
  equal(decision.action.column, 3);
  equal(decision.action.row, 3);
});

test("takes top left", function(){
  board.importPlay(379);
  var decision = strategy.play(board);
  equal(decision.action.column, 1);
  equal(decision.action.row, 1);
});

test("takes top right", function(){
  board.importPlay(179);
  var decision = strategy.play(board);
  equal(decision.action.column, 3);
  equal(decision.action.row, 1);
});
