var board;
module( "Board", {
  setup: function() {
    board = new TicTacToeBoard();
  },
  teardown: function() {
    // clean up after each test
  }
});

test("importPlay() throws error with invalid play", function() {
  throws(function(){board.importPlay(11);});
});

test("starts with an empty board", function() {
  ok(board.isEmpty());
});

test("getMarks() returns marks for each cell requested in order", function() {
  board.importPlay(1234);
  var marks = board.getMarks(4412359);
  equal(marks, "OOXOX  ");
});

test("starts with empty cells", function() {
  for(var i = 1; i < 10; i++) {
    ok(board.isEmptyAt(i));
  };
});

test("overlappingCell() finds single instance of first match", function() {
  equal(board.overlappingCell(11, 11), 1);
});

test("overlappingCell() finds only first cell matching between two sets", function() {
  equal(board.overlappingCell(123, 123), 1);
});

test("overlappingCell() finds cell matching between two sets", function() {
  equal(board.overlappingCell(3, 3), 3);
});

test("overlappingCell() finds cell matching between two sets of multiple values", function() {
  equal(board.overlappingCell(123, 4567893), 3);
});

test("overlappingCell() non-matching cells return null", function() {
  equal(board.overlappingCell(123, 456), null);
});

test("starts with first player as player", function() {
  equal(board.getPlayer(), board.firstPlayerToken);
});

test("starts with second player as opponent", function() {
  equal(board.getOpponent(), board.secondPlayerToken);
});

test("starts without a winner", function() {
  equal(board.hasWinner(), false);
});

test("does not begin with game over", function(){
  equal(board.isGameOver(), false);
});

test("can mark an unoccupied cell", function(){
  ok(board.mark(0, 0));
});

test("#at rows are not negative", function() {
  throws(function(){board.at(0, -1);})
});

test("#at has top row", function() {
  ok(board.at(0, 0));
});

test("#at has middle row", function() {
  ok(board.at(0, 1));
});

test("#at has bottom row", function() {
  ok(board.at(0, 2));
});

test("#at has no more than three rows", function() {
  throws(function(){board.at(0, 3);})
});

test("#at columns are not negative", function() {
  throws(function(){board.at(-1, 0);})
});

test("#at has left column", function() {
  ok(board.at(0, 0));
});

test("#at has middle column", function() {
  ok(board.at(1, 0));
});

test("#at has right column", function() {
  ok(board.at(2, 0));
});

test("#at has no more than three columns", function() {
  throws(function(){board.at(3, 0);})
});

test("first mark as first player", function() {
  board.importPlay(1);
  equal(board.at(0, 0), board.firstPlayerToken);
});

test("first mark changes to second player", function() {
  board.importPlay(1);
  equal(board.getPlayer(), board.secondPlayerToken);
});

test("can not re-mark cell", function() {
  board.importPlay(1);
  equal(board.mark(0, 0), false);
});

test("failed mark does not change player", function() {
  board.importPlay(1);
  board.mark(0, 0);
  equal(board.getPlayer(), board.secondPlayerToken);
});

test("second mark occupies a cell", function(){
  board.importPlay(12);
  equal(board.at(1, 0), board.secondPlayerToken);
});

test("second mark occupies a cell", function(){
  board.importPlay(12);
  equal(board.at(1, 0), board.secondPlayerToken);
});

test("second mark does not match the previous mark", function() {
  board.importPlay(12);
  notEqual(board.at(1, 0), board.at(0, 0));
});

test("second mark as second player", function() {
  board.importPlay(12);
  equal(board.at(1, 0), board.secondPlayerToken);
});

test("second mark changes to first player", function() {
  board.importPlay(12);
  equal(board.getPlayer(), board.firstPlayerToken);
});

test("third mark matches the first mark", function() {
  board.importPlay(123);
  equal(board.at(2, 0), board.at(0, 0));
});

test("third mark is the first player", function() {
  board.importPlay(123);
  equal(board.at(2, 0), board.firstPlayerToken);
});

test("marks in all cells is full", function() {
  board.importPlay(123457698);
  ok(board.isFull());
});

test("draw has marks in all cells", function() {
  board.importPlay(123457698);
  ok(board.isFull());
});

test("draw has no winner", function() {
  board.importPlay(123457698);
  equal(board.getWinner(), board.noPlayerToken);
});

test("draw results in no ones turn", function() {
  board.importPlay(123457698);
  equal(board.getPlayer(), board.noPlayerToken);
});

test("toString", function() {
  board.importPlay(14253);
  equal(board.toString(), "[XXX|OO |   ]");
});

test("win has a winner", function() {
  board.importPlay(14253);
  ok(board.hasWinner());
});

test("after win, is no ones turn", function() {
  board.importPlay(14253);
  equal(board.getPlayer(), board.noPlayerToken);
});

test("after win, can not mark an empty cell", function(){
  board.importPlay(14253);
  equal(board.mark(2, 2), false);
});

test("failed attempt to mark an empty cell does not mark", function(){
  board.importPlay(14253);
  board.mark(2, 2);
  equal(board.at(2, 2), board.noPlayerToken);
});

test("winner can be first player", function() {
  board.importPlay(14253);
  equal(board.getWinner(), board.firstPlayerToken);
});

test("winner can be second player", function() {
  board.importPlay(123568);
  equal(board.getWinner(), board.secondPlayerToken);
});

test("can win top row", function() {
  board.importPlay(14253);
  ok(board.hasWinner());
});

test("can win middle row", function() {
  board.importPlay(41526);
  ok(board.hasWinner());
});

test("can win bottom row", function() {
  board.importPlay(71829);
  ok(board.hasWinner());
});

test("can win left column", function() {
  board.importPlay(12457);
  ok(board.hasWinner());
});

test("can win right column", function() {
  board.importPlay(32659);
  ok(board.hasWinner());
});

test("can win center column", function() {
  board.importPlay(23568);
  ok(board.hasWinner());
});

test("can win diagonal top-right", function(){
  board.importPlay(32547);
  ok(board.hasWinner());
});

test("can win diagonal top-left", function(){
  board.importPlay(12569);
  ok(board.hasWinner());
});

test("getPosition 1 = top-left", function() {
  var position = board.getPosition(1);
  equal(position.x, 0);
  equal(position.y, 0);
  equal(position.column, 1);
  equal(position.row, 1);
});

test("getPosition 2 = top-center", function() {
  var position = board.getPosition(2);
  equal(position.x, 1);
  equal(position.y, 0);
  equal(position.column, 2);
  equal(position.row, 1);
});

test("getPosition 3 = top-right", function() {
  var position = board.getPosition(3);
  equal(position.x, 2);
  equal(position.y, 0);
  equal(position.column, 3);
  equal(position.row, 1);
});

test("getPosition 4 = middle-left", function() {
  var position = board.getPosition(4);
  equal(position.x, 0);
  equal(position.y, 1);
  equal(position.column, 1);
  equal(position.row, 2);
});

test("getPosition 5 = middle-center", function() {
  var position = board.getPosition(5);
  equal(position.x, 1);
  equal(position.y, 1);
  equal(position.column, 2);
  equal(position.row, 2);
});

test("getPosition 6 = middle-right", function() {
  var position = board.getPosition(6);
  equal(position.x, 2);
  equal(position.y, 1);
  equal(position.column, 3);
  equal(position.row, 2);
});

test("getPosition 7 = bottom-left", function() {
  var position = board.getPosition(7);
  equal(position.x, 0);
  equal(position.y, 2);
  equal(position.column, 1);
  equal(position.row, 3);
});

test("getPosition 8 = bottom-center", function() {
  var position = board.getPosition(8);
  equal(position.x, 1);
  equal(position.y, 2);
  equal(position.column, 2);
  equal(position.row, 3);
});

test("getPosition 9 = bottom-right", function() {
  var position = board.getPosition(9);
  equal(position.x, 2);
  equal(position.y, 2);
  equal(position.column, 3);
  equal(position.row, 3);
});

test("getPosition > 9 throws", function() {
  throws(function(){board.getPosition(10);})
});

test("getPosition < 1 throws", function() {
  throws(function(){board.getPosition(0);})
});

test("getPosition fraction throws", function() {
  throws(function(){board.getPosition(2.5);})
});

test("isPlayerAt is false when cell is empty", function() {
  equal(board.isPlayerAt(1), false);
});

test("isPlayerAt matches current player", function() {
  board.importPlay(12);
  ok(board.isPlayerAt(1));
});

test("isPlayerAt does not match other player", function() {
  board.importPlay(12);
  equal(board.isPlayerAt(2), false);
});

test("isOpponentAt matches previous player", function() {
  board.importPlay(1);
  ok(board.isOpponentAt(1));
});
