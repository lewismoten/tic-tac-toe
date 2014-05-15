describe("TicTacToeBoard", function() {
  var board;
  beforeEach(function() {
    board = new TicTacToeBoard();
  });
  
  it("starts with player 1", function() {
    expect(board.getPlayer()).toEqual(board.player1);
  });
  
  it("starts without a winner", function() {
    expect(board.getWinner().isEmpty()).toEqual(true);
  });

  it("can mark an unoccupied cell", function(){
    expect(board.mark(0, 0)).toEqual(true);
  });

  describe("the first mark", function() {
    beforeEach(function() {
      board.importPlay(1);
    });
    
    it("occupies a cell", function() {
      expect(board.at(0, 0).isEmpty).toEqual(false);
    });
    
    it("is the first player", function() {
      expect(board.at(0, 0).isFirstPlayer).toEqual(true);
    });
    
    it("changes the current player to player 2", function() {
      expect(board.getPlayer()).toEqual(board.player2);
    });
    
    it("can not be changed", function(){
      expect(board.mark(0, 0)).toEqual(false);
      expect(board.at(0, 0).isFirstPlayer).toEqual(true);
    });
  });
  
  describe("the second mark", function() {
    beforeEach(function() {
      board.importPlay(12);
    });

    it("occupies a cell", function() {
      expect(board.at(1, 0).isEmpty).toEqual(false);
    });
    
    it("does not match the previous mark", function() {
      expect(board.isMatch({x:0,y:0}, {x:1,y:0})).toEqual(false);
    });

    it("is player 2", function() {
      expect(board.at(1, 0).isPlayer2).toEqual(true);
    });
    
    it("changes the current player to player 1", function() {
      expect(board.getPlayer()).toEqual(board.player1);
    });
    
    it("can not be changed", function(){
      expect(board.mark(1, 0)).toEqual(false);
      expect(board.at(1, 0).isPlayer2).toEqual(true);
    });
  });

  describe("the third mark", function() {
    beforeEach(function() {
      board.importPlay(123);
    });

    it("matches the first mark", function() {
      expect(board.isMatch({x:0,y:0}, {x:2,y:0})).toEqual(true);
    });
    
    it("is the first player", function() {
      expect(board.at(2, 0).isFirstPlayer).toEqual(true);
    });
  });

  describe("the game is drawn", function() {
    beforeEach(function() {
      board.importPlay(123457698);
    });

    it("has no empty cells", function() {
      expect(board.isFull()).toEqual(true);
    });

    it("does not have a winner", function() {
      expect(board.getWinner().isEmpty()).toEqual(true);
    });

    it("is no ones turn", function() {
      expect(board.getPlayer()).toEqual(board.empty);
    });
  });
  var mark = function(x, y, player1) {
    expect(board.getPlayer()).toEqual(player1 ? board.player1 : board.player2);
    expect(board.mark(x, y)).toEqual(true);
  };
  describe("the game has been won", function() {
    beforeEach(function() {
      board.importPlay(14253);
      expect(board.toString()).toEqual("[XXX|OO |   ]");
    });
    
    it("has a winning path", function() {
      expect(board.isWinningPath(0, 0, 1, 0)).toEqual(true);
    });
    
    it("is end of game", function() {
      expect(board.isGameOver()).toEqual(true);
    });
    
    it("is no ones turn", function() {
      expect(board.getPlayer()).toEqual(board.empty);
    });
    
    it("has a winner", function() {
      expect(board.hasWinner()).toEqual(true);
    });
    
    it("can not mark an empty cell", function(){
      expect(board.mark(2, 2)).toEqual(false);
      expect(board.at(2, 2).isEmpty).toEqual(true);
    });
  });
  
  
  describe("winning player", function() {
    
    it("can be player 2", function() {
      board.importPlay(123568);
      expect(board.getWinner().isPlayer2()).toEqual(true);
    });
    
    it("can be the first player", function() {
      board.importPlay(14253);
      expect(board.getWinner().isPlayer1()).toEqual(true);
    });
  });
    
  describe("winning path", function() {

    afterEach(function() {
      expect(board.hasWinner()).toEqual(true);
    });
    
    it("can be the top row", function() {
      board.importPlay(14253);
    });
    
    it("can be the middle row", function() {
      board.importPlay(41526);
    });

    it("can be the bottom row", function() {
      board.importPlay(71829);
    });
    
    it("can be the left column", function() {
      board.importPlay(12457);
    });

    it("can be the right column", function() {
      board.importPlay(32659);
    });

    it("can be the center column", function() {
      board.importPlay(23568);
    });

    it("can be the top-right diagonal", function() {
      board.importPlay(32547);
    });

    it("can be the top-left diagonal", function() {
      board.importPlay(12569);
    });
  });
});

TicTacToeBoard.prototype.importPlay = function(marks) {
  marks += "";
  for(var i = 0; i < marks.length; i++)
  {
    var x = -1;
    var y = -1;
    switch(marks[i])
    {
      case "1": x = 0; y = 0; break;
      case "2": x = 1; y = 0; break;
      case "3": x = 2; y = 0; break;
      case "4": x = 0; y = 1; break;
      case "5": x = 1; y = 1; break;
      case "6": x = 2; y = 1; break;
      case "7": x = 0; y = 2; break;
      case "8": x = 1; y = 2; break;
      case "9": x = 2; y = 2; break;
    }
    if(x == -1 || y == -1) throw new Error("can not find cell for " + marks[i]);
    this.mark(x, y);
  }
};