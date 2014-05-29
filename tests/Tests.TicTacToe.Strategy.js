var strategy;
var board;

var winName = new TicTacToeWinStrategy().getName();
var blockWinName = new TicTacToeBlockWinStrategy().getName();
var takeCenterName = new TicTacToeTakeCenterStrategy().getName();
var takeOppositeCornerName = new TicTacToeTakeOppositeCornerStrategy().getName();
var takeCornerName = new TicTacToeTakeCornerStrategy().getName();
var takeSideName = new TicTacToeTakeSideStrategy().getName();
var forkName = new TicTacToeForkStrategy().getName();
var blockForkName = new TicTacToeBlockForkStrategy().getName();

module( "Strategy", {
  setup: function() {
    strategy = new TicTacToeStrategy();
    board = new TicTacToeBoard();
  }
});

test("decision has canAct", function() {
  var commands = strategy.getCommands();
  for(var i = 0; i < commands.length; i++) {
    var command = commands[i];
    var decision = command.play(board);
    equal(decision.name, command.getName());
  }
});

test("add does not throw", function() {
  var countBeforeAdd = strategy.getCommands().length;
  strategy.add("test");
  equal(strategy.getCommands().length, countBeforeAdd + 1);
});

test("can be retrieved", function() {
  var name = "my test strategy";
  strategy.add(name);
  var priorities = strategy.getCommands();
  notEqual(priorities.indexOf(name), -1);
});

test("has win", function() {
  ok(strategy.hasStrategy(winName));
});

test("has fork", function() {
  ok(strategy.hasStrategy(forkName));
});

test("has block fork", function() {
  ok(strategy.hasStrategy(blockForkName));
});

test("has block win", function() {
  ok(strategy.hasStrategy(blockWinName));
});

test("has take center", function() {
  ok(strategy.hasStrategy(takeCenterName));
});

test("has take corner", function() {
  ok(strategy.hasStrategy(takeCornerName));
});

test("has take side", function() {
  ok(strategy.hasStrategy(takeSideName));
});

test("has take opposite corner", function() {
  ok(strategy.hasStrategy(takeOppositeCornerName));
});

test("wins before blocking opponent", function() {
  ok(strategy.priorityOf(winName) < strategy.priorityOf(blockWinName));
});

test("blocks opponent before it forks", function() {
  ok(strategy.priorityOf(blockWinName) < strategy.priorityOf(forkName));
});

test("forks before blocking opponents fork", function() {
  ok(strategy.priorityOf(forkName) < strategy.priorityOf(blockForkName));
});

test("block opponents fork before taking center", function() {
  ok(strategy.priorityOf(blockForkName) < strategy.priorityOf(takeCenterName));
});

test("takes center before taking an opponents opposite corner", function() {
  ok(strategy.priorityOf(takeCenterName) < strategy.priorityOf(takeOppositeCornerName));
});

test("takes opponents opposite corner before taking an empty corner", function() {
  ok(strategy.priorityOf(takeOppositeCornerName) < strategy.priorityOf(takeCornerName));
});

test("takes an empty corner before taking a side", function() {
  ok(strategy.priorityOf(takeCornerName) < strategy.priorityOf(takeSideName));
});

test("takes an empty side last", function() {
  equal(strategy.priorityOf(takeSideName), strategy.getCommands().length - 1);
});

test("does not have unknown strategy", function() {
  equal(strategy.priorityOf("does not exist"), -1);
});

test("can get all strategies", function() {
  strategy.add("test");
  var directions = strategy.getCommands();
  ok(directions.length > 0);
});

test("can play", function() {
  var decision = strategy.play(board);
  ok(decision.canAct);
});

test("first play takes the center", function() {
  var decision = strategy.play(board);
  equal(decision.name, takeCenterName);
  deepEqual(decision.action, board.getPosition(5));
  board.mark(decision.action.x, decision.action.y);
  equal(board.toString(), "[   | X |   ]");
});

test("second play takes a corner", function() {
  board.importPlay(5);
  var decision = strategy.play(board);
  equal(decision.name, takeCornerName);
  deepEqual(decision.action, board.getPosition(1));
  board.mark(decision.action.x, decision.action.y);
  equal(board.toString(), "[O  | X |   ]");
});

test("third play takes a corner opposite of the opponent", function() {
  board.importPlay(51);
  var decision = strategy.play(board);
  equal(decision.name, takeOppositeCornerName);
  deepEqual(decision.action, board.getPosition(9));
  board.mark(decision.action.x, decision.action.y);
  equal(board.toString(), "[O  | X |  X]");
});

test("fourth play blocks a fork", function() {
  board.importPlay(519);
  var decision = strategy.play(board);
  equal(decision.name, blockForkName);
  deepEqual(decision.action, board.getPosition(6));
  board.mark(decision.action.x, decision.action.y);
  equal(board.toString(), "[O  | XO|  X]");
});

test("fifth play creates a fork", function() {
  board.importPlay(5196);
  var decision = strategy.play(board);
  equal(decision.name, forkName);
  deepEqual(decision.action, board.getPosition(8));
  board.mark(decision.action.x, decision.action.y);
  equal(board.toString(), "[O  | XO| XX]");
});

test("sixth play blocks a win", function() {
  board.importPlay(51968);
  var decision = strategy.play(board);
  equal(decision.name, blockWinName);
  deepEqual(decision.action, board.getPosition(7));
  board.mark(decision.action.x, decision.action.y);
  equal(board.toString(), "[O  | XO|OXX]");
});

test("seventh play wins", function() {
  board.importPlay(519687);
  var decision = strategy.play(board);
  equal(decision.name, winName);
  deepEqual(decision.action, board.getPosition(2));
  board.mark(decision.action.x, decision.action.y);
  equal(board.toString(), "[OX | XO|OXX]");
});

test("can not win", function() {
    while(!board.isGameOver()) {
      var decision = strategy.play(board);
      board.mark(decision.action.x, decision.action.y);
    };
    equal(board.hasWinner(), false, "Unbeatable AI never wins: " + board.toString());
});
