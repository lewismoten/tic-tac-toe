var strategy;
var board;

module( "Win Strategy", {
  setup: function() {
    strategy = new TicTacToeWinStrategy();
    board = new TicTacToeBoard();
  }
});

test("starts with an empty board", function() {
  ok(board.isEmpty());
});


test("has correct name", function(){
  equal(strategy.getName(), "Win");
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

test("can act on a decision", function(){
  board.importPlay(1425);
  var decision = strategy.play(board);
  ok(decision.canAct);
});

test("can not act on an empty board", function(){
  var decision = strategy.play(board);
  equal(decision.canAct, false);
});

test("has action for an actionable decision", function(){
  board.importPlay(1425);
  var decision = strategy.play(board);
  notEqual(decision.action, null);
});

test("takes row top left", function() {
  board.importPlay(3425);
  var decision = strategy.play(board);
  equal(decision.action.column, 1);
  equal(decision.action.row, 1);
});

test("takes row top center", function() {
  board.importPlay(1435);
  var decision = strategy.play(board);
  equal(decision.action.column, 2);
  equal(decision.action.row, 1);
});

test("takes row top right", function() {
  board.importPlay(1425);
  var decision = strategy.play(board);
  equal(decision.action.column, 3);
  equal(decision.action.row, 1);
});

test("takes row middle left", function() {
  board.importPlay(5162);
  var decision = strategy.play(board);
  equal(decision.action.column, 1);
  equal(decision.action.row, 2);
});

test("takes row middle center", function() {
  board.importPlay(4162);
  var decision = strategy.play(board);
  equal(decision.action.column, 2);
  equal(decision.action.row, 2);
});

test("takes row middle right", function() {
  board.importPlay(4152);
  var decision = strategy.play(board);
  equal(decision.action.column, 3);
  equal(decision.action.row, 2);
});

test("takes row bottom left", function() {
  board.importPlay(8192);
  var decision = strategy.play(board);
  equal(decision.action.column, 1);
  equal(decision.action.row, 3);
});

test("takes row bottom center", function() {
  board.importPlay(7192);
  var decision = strategy.play(board);
  equal(decision.action.column, 2);
  equal(decision.action.row, 3);
});

test("takes row bottom right", function() {
  board.importPlay(7182);
  var decision = strategy.play(board);
  equal(decision.action.column, 3);
  equal(decision.action.row, 3);
});

test("takes column left top", function() {
  board.importPlay(4578);
  var decision = strategy.play(board);
  equal(decision.action.column, 1);
  equal(decision.action.row, 1);
});

test("takes column left middle", function() {
  board.importPlay(1278);
  var decision = strategy.play(board);
  equal(decision.action.column, 1);
  equal(decision.action.row, 2);
});

test("takes column left bottom", function() {
  board.importPlay(1245);
  var decision = strategy.play(board);
  equal(decision.action.column, 1);
  equal(decision.action.row, 3);
});

test("takes column center top", function() {
  board.importPlay(5689);
  var decision = strategy.play(board);
  equal(decision.action.column, 2);
  equal(decision.action.row, 1);
});

test("takes column center middle", function() {
  board.importPlay(2389);
  var decision = strategy.play(board);
  equal(decision.action.column, 2);
  equal(decision.action.row, 2);
});

test("takes column center bottom", function() {
  board.importPlay(2356);
  var decision = strategy.play(board);
  equal(decision.action.column, 2);
  equal(decision.action.row, 3);
});

test("takes column right top", function() {
  board.importPlay(6598);
  var decision = strategy.play(board);
  equal(decision.action.column, 3);
  equal(decision.action.row, 1);
});

test("takes column right middle", function() {
  board.importPlay(9832);
  var decision = strategy.play(board);
  equal(decision.action.column, 3);
  equal(decision.action.row, 2);
});

test("takes column right bottom", function() {
  board.importPlay(6532);
  var decision = strategy.play(board);
  equal(decision.action.column, 3);
  equal(decision.action.row, 3);
});

test("takes diagonal / top", function() {
  board.importPlay(5678);
  var decision = strategy.play(board);
  equal(decision.action.column, 3);
  equal(decision.action.row, 1);
});

test("takes diagonal / middle", function() {
  board.importPlay(7832);
  var decision = strategy.play(board);
  equal(decision.action.column, 2);
  equal(decision.action.row, 2);
});

test("takes diagonal / bottom", function() {
  board.importPlay(3256);
  var decision = strategy.play(board);
  equal(decision.action.column, 1);
  equal(decision.action.row, 3);
});

test("takes diagonal \\ top", function() {
  board.importPlay(5698);
  var decision = strategy.play(board);
  equal(decision.action.column, 1);
  equal(decision.action.row, 1);
});

test("takes diagonal \\ middle", function() {
  board.importPlay(1298);
  var decision = strategy.play(board);
  equal(decision.action.column, 2);
  equal(decision.action.row, 2);
});

test("takes diagonal \\ bottom", function() {
  board.importPlay(1256);
  var decision = strategy.play(board);
  equal(decision.action.column, 3);
  equal(decision.action.row, 3);
});
