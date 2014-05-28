var strategy;
var board;

module( "Take Opposite Corner Strategy", {
  setup: function() {
    strategy = new TicTacToeTakeOppositeCornerStrategy();
    board = new TicTacToeBoard();
  }
});

test("has correct name", function(){
  equal(strategy.getName(), "Take Opposite Corner");
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
  board.importPlay(1);
  var decision = strategy.play(board);
  ok(decision.canAct);
});

test("can not act when corners are occupied", function(){
  board.importPlay(1379);
  var decision = strategy.play(board);
  equal(decision.canAct, false);
});

test("takes lower left when opponent is in upper right", function(){
  board.importPlay(3);
  var decision = strategy.play(board);
  equal(decision.action.column, 1);
  equal(decision.action.row, 3);
});

test("takes lower right when opponent is in upper left", function(){
  board.importPlay(1);
  var decision = strategy.play(board);
  equal(decision.action.column, 3);
  equal(decision.action.row, 3);
});

test("takes top left when opponent is in bottom right", function(){
  board.importPlay(9);
  var decision = strategy.play(board);
  equal(decision.action.column, 1);
  equal(decision.action.row, 1);
});

test("takes top right when opponent is in bottom left", function(){
  board.importPlay(7);
  var decision = strategy.play(board);
  equal(decision.action.column, 3);
  equal(decision.action.row, 1);
});
