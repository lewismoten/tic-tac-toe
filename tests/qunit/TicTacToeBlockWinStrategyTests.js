var strategy;
var board;

module( "Block Win Strategy", {
  setup: function() {
    strategy = new TicTacToeBlockWinStrategy();
    board = new TicTacToeBoard();
  }
});

test("has correct name", function(){
  equal(strategy.getName(), "Block Win");
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
  board.importPlay(142);
  var decision = strategy.play(board);
  ok(decision.canAct);
});

test("can not act on an empty board", function(){
  var decision = strategy.play(board);
  equal(decision.canAct, false);
});

test("has action for an actionable decision", function(){
  board.importPlay(142);
  var decision = strategy.play(board);
  notEqual(decision.action, null);
});

test("takes row top left", function() {
  board.importPlay(342);
  var decision = strategy.play(board);
  equal(decision.action.column, 1);
  equal(decision.action.row, 1);
});

test("takes row top center", function() {
  board.importPlay(143);
  var decision = strategy.play(board);
  equal(decision.action.column, 2);
  equal(decision.action.row, 1);
});

test("takes row top right", function() {
  board.importPlay(142);
  var decision = strategy.play(board);
  equal(decision.action.column, 3);
  equal(decision.action.row, 1);
});

test("takes row middle left", function() {
  board.importPlay(516);
  var decision = strategy.play(board);
  equal(decision.action.column, 1);
  equal(decision.action.row, 2);
});

test("takes row middle center", function() {
  board.importPlay(416);
  var decision = strategy.play(board);
  equal(decision.action.column, 2);
  equal(decision.action.row, 2);
});

test("takes row middle right", function() {
  board.importPlay(415);
  var decision = strategy.play(board);
  equal(decision.action.column, 3);
  equal(decision.action.row, 2);
});

test("takes row bottom left", function() {
  board.importPlay(819);
  var decision = strategy.play(board);
  equal(decision.action.column, 1);
  equal(decision.action.row, 3);
});

test("takes row bottom center", function() {
  board.importPlay(719);
  var decision = strategy.play(board);
  equal(decision.action.column, 2);
  equal(decision.action.row, 3);
});

test("takes row bottom right", function() {
  board.importPlay(718);
  var decision = strategy.play(board);
  equal(decision.action.column, 3);
  equal(decision.action.row, 3);
});

test("takes column left top", function() {
  board.importPlay(457);
  var decision = strategy.play(board);
  equal(decision.action.column, 1);
  equal(decision.action.row, 1);
});

test("takes column left middle", function() {
  board.importPlay(127);
  var decision = strategy.play(board);
  equal(decision.action.column, 1);
  equal(decision.action.row, 2);
});

test("takes column left bottom", function() {
  board.importPlay(124);
  var decision = strategy.play(board);
  equal(decision.action.column, 1);
  equal(decision.action.row, 3);
});

test("takes column center top", function() {
  board.importPlay(568);
  var decision = strategy.play(board);
  equal(decision.action.column, 2);
  equal(decision.action.row, 1);
});

test("takes column center middle", function() {
  board.importPlay(238);
  var decision = strategy.play(board);
  equal(decision.action.column, 2);
  equal(decision.action.row, 2);
});

test("takes column center bottom", function() {
  board.importPlay(235);
  var decision = strategy.play(board);
  equal(decision.action.column, 2);
  equal(decision.action.row, 3);
});

test("takes column right top", function() {
  board.importPlay(659);
  var decision = strategy.play(board);
  equal(decision.action.column, 3);
  equal(decision.action.row, 1);
});

test("takes column right middle", function() {
  board.importPlay(983);
  var decision = strategy.play(board);
  equal(decision.action.column, 3);
  equal(decision.action.row, 2);
});

test("takes column right bottom", function() {
  board.importPlay(653);
  var decision = strategy.play(board);
  equal(decision.action.column, 3);
  equal(decision.action.row, 3);
});

test("takes diagonal / top", function() {
  board.importPlay(567);
  var decision = strategy.play(board);
  equal(decision.action.column, 3);
  equal(decision.action.row, 1);
});

test("takes diagonal / middle", function() {
  board.importPlay(783);
  var decision = strategy.play(board);
  equal(decision.action.column, 2);
  equal(decision.action.row, 2);
});

test("takes diagonal / bottom", function() {
  board.importPlay(325);
  var decision = strategy.play(board);
  equal(decision.action.column, 1);
  equal(decision.action.row, 3);
});

test("takes diagonal \\ top", function() {
  board.importPlay(569);
  var decision = strategy.play(board);
  equal(decision.action.column, 1);
  equal(decision.action.row, 1);
});

test("takes diagonal \\ middle", function() {
  board.importPlay(129);
  var decision = strategy.play(board);
  equal(decision.action.column, 2);
  equal(decision.action.row, 2);
});

test("takes diagonal \\ bottom", function() {
  board.importPlay(125);
  var decision = strategy.play(board);
  equal(decision.action.column, 3);
  equal(decision.action.row, 3);
});
