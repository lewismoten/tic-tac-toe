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

  it("can play", function(){
    expect(strategy.play()).toEqual(true);
  });

});