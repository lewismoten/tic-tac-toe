describe("TicTacToeStrategy", function() {

  var strategy;
  
  beforeEach(function() {
    strategy = new TicTacToeStrategy();
  });
  
  describe("add", function() {
    it("does not throw", function() {
      var countBeforeAdd = strategy.getAll().length;
      strategy.add("test");
      expect(strategy.getAll().length).toEqual(countBeforeAdd + 1);
    });
    
    it("can be retrieved", function() {
      var name = "my test strategy";
      strategy.add(name);
      var priorities = strategy.getAll();
      expect(priorities.indexOf(name)).not.toEqual(-1);
    });
  });

  describe("default priorities", function() {

    it("wins before blocking opponent", function() {
      expect(strategy.priorityOf("win")).toBeLessThan(strategy.priorityOf("block win"));
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
  });
  
  it("can get all strategies", function() {
    strategy.add("test");
    var directions = strategy.getAll();
    expect(directions.length).toBeGreaterThan(0);
  });
});