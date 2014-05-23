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

  it("will provide movement details for a decision", function(){
    var decision = strategy.play();
    expect(decision.action).not.toBeNull();
  });
});