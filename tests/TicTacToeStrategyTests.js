describe("TicTacToeStrategy", function() {
  var strategy = new TicTacToeStrategy();
  it("can add a strategy", function() {
    var add = function() { strategy.add("win") ; };
    expect(add).not.toThrow();
  });
  
  it("can get all strategies", function() {
    var directions = strategy.getAll();
    expect(directions.length).toBeGreaterThan(0);
  });
});