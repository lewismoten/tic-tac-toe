describe("TicTacToeWinStrategy", function() {

  var strategy;
  
  beforeEach(function() {
    strategy = new TicTacToeWinStrategy();
  });

  it("has correct name", function(){
    expect(strategy.getName()).toEqual("Win");
  });
  
  it("does not have an initial move", function(){
    expect(strategy.getMove()).toBeNull();
  });
});