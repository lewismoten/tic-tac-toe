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
    it("has win before block", function() {
      expect(strategy.priorityOf("win")).toBeLessThan(strategy.priorityOf("block"));
    });
    it("has block before fork", function() {
      expect(strategy.priorityOf("block")).toBeLessThan(strategy.priorityOf("fork"));
    });
  });
  
  it("can get all strategies", function() {
    strategy.add("test");
    var directions = strategy.getAll();
    expect(directions.length).toBeGreaterThan(0);
  });
});