var strategy;
var winName = new TicTacToeWinStrategy().getName();

module( "Strategy", {
  setup: function() {
    strategy = new TicTacToeStrategy();
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

test("wins before blocking opponent", function() {
  ok(strategy.priorityOf(winName) < strategy.priorityOf("block win"));
});

test("blocks opponent before it forks", function() {
  ok(strategy.priorityOf("block win") < strategy.priorityOf("fork"));
});

test("forks before blocking opponents fork", function() {
  ok(strategy.priorityOf("fork") < strategy.priorityOf("block fork"));
});

test("block opponents fork before taking center", function() {
  ok(strategy.priorityOf("block fork") < strategy.priorityOf("take center"));
});

test("takes center before taking an opponents opposite corner", function() {
  ok(strategy.priorityOf("take center") < strategy.priorityOf("take opponents opposite corner"));
});

test("takes opponents opposite corner before taking an empty corner", function() {
  ok(strategy.priorityOf("take opponents opposite corner") < strategy.priorityOf("take empty corner"));
});

test("takes an empty corner before taking a side", function() {
  ok(strategy.priorityOf("take empty corner") < strategy.priorityOf("take empty side"));
});

test("takes an empty side last", function() {
  equal(strategy.priorityOf("take empty side"), strategy.getCommands().length - 1);
});

test("does not have unknown strategy", function() {
  equal(strategy.priorityOf("does not exist"), -1);
});

test("can get all strategies", function() {
  strategy.add("test");
  var directions = strategy.getCommands();
  ok(directions.length > 0);
});