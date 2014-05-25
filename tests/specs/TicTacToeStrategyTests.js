describe("TicTacToeStrategy", function() {

  var strategy;
  
  beforeEach(function() {
    strategy = new TicTacToeStrategy();
  });
  
  describe("add", function() {
    it("does not throw", function() {
      var countBeforeAdd = strategy.getCommands().length;
      strategy.add("test");
      expect(strategy.getCommands().length).toEqual(countBeforeAdd + 1);
    });
    
    it("can be retrieved", function() {
      var name = "my test strategy";
      strategy.add(name);
      var priorities = strategy.getCommands();
      expect(priorities.indexOf(name)).not.toEqual(-1);
    });
  });

  describe("strategies", function() {
    it("has win", function(){
      var name = new TicTacToeWinStrategy().getName();
      expect(strategy.hasStrategy(name)).toEqual(true);
    });
  });

  describe("default priorities", function() {
    var winName = new TicTacToeWinStrategy().getName();

    it("wins before blocking opponent", function() {
      expect(strategy.priorityOf(winName)).toBeLessThan(strategy.priorityOf("block win"));
    });

    it("blocks opponent before it forks", function() {
      expect(strategy.priorityOf("block win")).toBeLessThan(strategy.priorityOf("fork"));
    });
    
    it("forks before blocking opponents fork", function() {
      expect(strategy.priorityOf("fork")).toBeLessThan(strategy.priorityOf("block fork"));
    });
    
    it("block opponents fork before taking center", function() {
      expect(strategy.priorityOf("block fork")).toBeLessThan(strategy.priorityOf("take center"));
    });
    
    it("takes center before taking an opponents opposite corner", function() {
      expect(strategy.priorityOf("take center")).toBeLessThan(strategy.priorityOf("take opponents opposite corner"));
    });

    it("takes opponents opposite corner before taking an empty corner", function() {
      expect(strategy.priorityOf("take opponents opposite corner")).toBeLessThan(strategy.priorityOf("take empty corner"));
    });

    it("takes an empty corner before taking a side", function() {
      expect(strategy.priorityOf("take empty corner")).toBeLessThan(strategy.priorityOf("take empty side"));
    });

    it("takes an empty side last", function() {
      expect(strategy.priorityOf("take empty side")).toEqual(strategy.getCommands().length - 1);
    });
  });
  
  it("can get all strategies", function() {
    strategy.add("test");
    var directions = strategy.getCommands();
    expect(directions.length).toBeGreaterThan(0);
  });
});