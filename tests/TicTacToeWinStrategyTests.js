describe("TicTacToeWinStrategy", function() {

  var strategy;
  
  beforeEach(function() {
    strategy = new TicTacToeWinStrategy();
  });

  it("has correct name", function(){
    expect(strategy.getName().equalTo("win"));
  });
});