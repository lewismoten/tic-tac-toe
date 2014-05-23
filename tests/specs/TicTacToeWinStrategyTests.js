describe("TicTacToeWinStrategy", function() {

  var strategy;
  
  beforeEach(function() {
    strategy = new TicTacToeWinStrategy();
  });

  it("has correct name", function(){
    expect(strategy.getName()).toEqual("Win");
  });
  
  it("can come to a decision", function(){
    var decision = strategy.play();
    expect(decision).not.toBeNull();
  });
  
  it("can act on a decision", function(){
    var decision = strategy.play();
    expect(decision.canAct).toEqual(true);
  });

  it("has action for an actionable decision", function(){
    var decision = strategy.play();
    expect(decision.action).not.toBeNull();
  });
  
  it("has x coordinate for an action", function(){
    var decision = strategy.play();
    expect(decision.action.x).toBeDefined();
  });

  it("has y coordinate for an action", function(){
    var decision = strategy.play();
    expect(decision.action.y).toBeDefined();
  });
});