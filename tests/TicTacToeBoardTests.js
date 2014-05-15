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
    expect(board.at(0, 0).mark()).toEqual(true);
  });

  describe("the first mark", function() {
    beforeEach(function() {
      board.at(0, 0).mark();
    });
    
    it("occupies a cell", function() {
      expect(board.at(0, 0).isEmpty()).toEqual(false);
    });
    
    it("is player 1", function() {
      expect(board.at(0, 0).isPlayer1()).toEqual(true);
    });
    
    it("changes the current player to player 2", function() {
      expect(board.getPlayer()).toEqual(board.player2);
    });
    
    it("can not be changed", function(){
      expect(board.at(0, 0).mark()).toEqual(false);
      expect(board.at(0, 0).isPlayer1()).toEqual(true);
    });
  });
  
  describe("the second mark", function() {
    beforeEach(function() {
      board.at(0, 0).mark();
      board.at(1, 0).mark();
    });

    it("occupies a cell", function() {
      expect(board.at(1, 0).isEmpty()).toEqual(false);
    });

    it("is player 2", function() {
      expect(board.at(1, 0).isPlayer2()).toEqual(true);
    });
    
    it("changes the current player to player 1", function() {
      expect(board.getPlayer()).toEqual(board.player1);
    });
    
    it("can not be changed", function(){
      expect(board.at(1, 0).mark()).toEqual(false);
      expect(board.at(1, 0).isPlayer2()).toEqual(true);
    });
  });

  describe("the game is drawn", function() {
    beforeEach(function() {
      expect(board.at(0, 0).mark()).toEqual(true);
      expect(board.at(1, 0).mark()).toEqual(true);
      expect(board.at(2, 0).mark()).toEqual(true);
      expect(board.at(0, 1).mark()).toEqual(true);
      expect(board.at(1, 1).mark()).toEqual(true);
      expect(board.at(0, 2).mark()).toEqual(true);
      expect(board.at(2, 1).mark()).toEqual(true);
      expect(board.at(2, 2).mark()).toEqual(true);
      expect(board.at(1, 2).mark()).toEqual(true);
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
  
  describe("the game has been won", function() {
    beforeEach(function() {
      expect(board.at(0, 0).mark()).toEqual(true);
      expect(board.at(0, 1).mark()).toEqual(true);
      expect(board.at(1, 0).mark()).toEqual(true);
      expect(board.at(1, 1).mark()).toEqual(true);
      expect(board.at(2, 0).mark()).toEqual(true);
      expect(board.toString()).toEqual("[XXX|OO |   ]");
    });
    
    it("is no ones turn", function() {
      expect(board.getPlayer()).toEqual(board.empty);
    });
    
    it("has a winner", function() {
      expect(board.getWinner().isEmpty()).toEqual(false);
    });
    
    it("can not mark an empty cell", function(){
      expect(board.at(2, 2).mark()).toEqual(false);
      expect(board.at(2, 2).isEmpty()).toEqual(true);
    });
  });
  
  describe("checking for a winner", function() {
    it("can be by player 2", function() {
      board.at(0, 0).mark();
      board.at(1, 0).mark();
      board.at(2, 0).mark();
      board.at(1, 1).mark();
      board.at(2, 1).mark();
      board.at(1, 2).mark();
      expect(board.getWinner().isPlayer2()).toEqual(true);
    });
    it("can be by player 1", function() {
      board.at(0, 0).mark();
      board.at(0, 1).mark();
      board.at(1, 0).mark();
      board.at(1, 1).mark();
      board.at(2, 0).mark();
      expect(board.getWinner().isPlayer1()).toEqual(true);
    });
    describe("must be three consecutive marks", function() {
      it("can be the top row", function() {
        board.at(0, 0).mark();
        board.at(0, 1).mark();
        board.at(1, 0).mark();
        board.at(1, 1).mark();
        board.at(2, 0).mark();
        expect(board.getWinner().isEmpty()).toEqual(false);
      });
      
      it("can be the middle row", function() {
        board.at(0, 1).mark();
        board.at(0, 0).mark();
        board.at(1, 1).mark();
        board.at(1, 0).mark();
        board.at(2, 1).mark();
        expect(board.getWinner().isEmpty()).toEqual(false);
      });
  
      it("can be the bottom row", function() {
        board.at(0, 2).mark();
        board.at(0, 0).mark();
        board.at(1, 2).mark();
        board.at(1, 0).mark();
        board.at(2, 2).mark();
        expect(board.getWinner().isEmpty()).toEqual(false);
      });
      
      it("can be the left column", function() {
        board.at(0, 0).mark();
        board.at(1, 0).mark();
        board.at(0, 1).mark();
        board.at(1, 1).mark();
        board.at(0, 2).mark();
        expect(board.getWinner().isEmpty()).toEqual(false);
      });
      it("can be the right column", function() {
        board.at(2, 0).mark();
        board.at(1, 0).mark();
        board.at(2, 1).mark();
        board.at(1, 1).mark();
        board.at(2, 2).mark();
        expect(board.getWinner().isEmpty()).toEqual(false);
      });
      it("can be the center column", function() {
        board.at(1, 0).mark();
        board.at(2, 0).mark();
        board.at(1, 1).mark();
        board.at(2, 1).mark();
        board.at(1, 2).mark();
        expect(board.getWinner().isEmpty()).toEqual(false);
      });
      it("can be the top-right diagonal", function() {
        board.at(2, 0).mark();
        board.at(1, 0).mark();
        board.at(1, 1).mark();
        board.at(0, 1).mark();
        board.at(0, 2).mark();
        expect(board.getWinner().isEmpty()).toEqual(false);
      });
      it("can be the top-left diagonal", function() {
        board.at(0, 0).mark();
        board.at(1, 0).mark();
        board.at(1, 1).mark();
        board.at(2, 1).mark();
        board.at(2, 2).mark();
        expect(board.getWinner().isEmpty()).toEqual(false);
      });
    });
  });
});
