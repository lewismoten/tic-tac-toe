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
  
  it("has action.column", function(){
    var decision = strategy.play();
    expect(decision.action.column).toBeDefined();
  });

  it("has action.row", function(){
    var decision = strategy.play();
    expect(decision.action.row).toBeDefined();
  });

  it("completes a row", function(){
    var board = new TicTacToeBoard();
    board.importPlay(1425);
    var decision = strategy.play(board);
    expect(decision.action.column).toEqual(3);
    expect(decision.action.row).toEqual(1);
  });
  
});