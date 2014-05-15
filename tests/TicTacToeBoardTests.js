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
      board.mark(0, 0);
    });
    
    it("occupies a cell", function() {
      expect(board.at(0, 0).isEmpty).toEqual(false);
    });
    
    it("is player 1", function() {
      expect(board.at(0, 0).isPlayer1).toEqual(true);
    });
    
    it("changes the current player to player 2", function() {
      expect(board.getPlayer()).toEqual(board.player2);
    });
    
    it("can not be changed", function(){
      expect(board.mark(0, 0)).toEqual(false);
      expect(board.at(0, 0).isPlayer1).toEqual(true);
    });
  });
  
  describe("the second mark", function() {
    beforeEach(function() {
      board.mark(0, 0);
      board.mark(1, 0);
    });

    it("occupies a cell", function() {
      expect(board.at(1, 0).isEmpty).toEqual(false);
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

  describe("the game is drawn", function() {
    beforeEach(function() {
      expect(board.mark(0, 0)).toEqual(true);
      expect(board.mark(1, 0)).toEqual(true);
      expect(board.mark(2, 0)).toEqual(true);
      expect(board.mark(0, 1)).toEqual(true);
      expect(board.mark(1, 1)).toEqual(true);
      expect(board.mark(0, 2)).toEqual(true);
      expect(board.mark(2, 1)).toEqual(true);
      expect(board.mark(2, 2)).toEqual(true);
      expect(board.mark(1, 2)).toEqual(true);
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
      expect(board.mark(0, 0)).toEqual(true);
      expect(board.mark(0, 1)).toEqual(true);
      expect(board.mark(1, 0)).toEqual(true);
      expect(board.mark(1, 1)).toEqual(true);
      expect(board.mark(2, 0)).toEqual(true);
      expect(board.toString()).toEqual("[XXX|OO |   ]");
    });
    
    it("is no ones turn", function() {
      expect(board.getPlayer()).toEqual(board.empty);
    });
    
    it("has a winner", function() {
      expect(board.getWinner().isEmpty()).toEqual(false);
    });
    
    it("can not mark an empty cell", function(){
      expect(board.mark(2, 2)).toEqual(false);
      expect(board.at(2, 2).isEmpty).toEqual(true);
    });
  });
  
  describe("checking for a winner", function() {
    it("can be by player 2", function() {
      board.mark(0, 0);
      board.mark(1, 0);
      board.mark(2, 0);
      board.mark(1, 1);
      board.mark(2, 1);
      board.mark(1, 2);
      expect(board.getWinner().isPlayer2()).toEqual(true);
    });
    it("can be by player 1", function() {
      board.mark(0, 0);
      board.mark(0, 1);
      board.mark(1, 0);
      board.mark(1, 1);
      board.mark(2, 0);
      expect(board.getWinner().isPlayer1()).toEqual(true);
    });
    describe("must be three consecutive marks", function() {
      it("can be the top row", function() {
        board.mark(0, 0);
        board.mark(0, 1);
        board.mark(1, 0);
        board.mark(1, 1);
        board.mark(2, 0);
        expect(board.getWinner().isEmpty()).toEqual(false);
      });
      
      it("can be the middle row", function() {
        board.mark(0, 1);
        board.mark(0, 0);
        board.mark(1, 1);
        board.mark(1, 0);
        board.mark(2, 1);
        expect(board.getWinner().isEmpty()).toEqual(false);
      });
  
      it("can be the bottom row", function() {
        board.mark(0, 2);
        board.mark(0, 0);
        board.mark(1, 2);
        board.mark(1, 0);
        board.mark(2, 2);
        expect(board.getWinner().isEmpty()).toEqual(false);
      });
      
      it("can be the left column", function() {
        board.mark(0, 0);
        board.mark(1, 0);
        board.mark(0, 1);
        board.mark(1, 1);
        board.mark(0, 2);
        expect(board.getWinner().isEmpty()).toEqual(false);
      });
      it("can be the right column", function() {
        board.mark(2, 0);
        board.mark(1, 0);
        board.mark(2, 1);
        board.mark(1, 1);
        board.mark(2, 2);
        expect(board.getWinner().isEmpty()).toEqual(false);
      });
      it("can be the center column", function() {
        board.mark(1, 0);
        board.mark(2, 0);
        board.mark(1, 1);
        board.mark(2, 1);
        board.mark(1, 2);
        expect(board.getWinner().isEmpty()).toEqual(false);
      });
      it("can be the top-right diagonal", function() {
        board.mark(2, 0);
        board.mark(1, 0);
        board.mark(1, 1);
        board.mark(0, 1);
        board.mark(0, 2);
        expect(board.getWinner().isEmpty()).toEqual(false);
      });
      it("can be the top-left diagonal", function() {
        board.mark(0, 0);
        board.mark(1, 0);
        board.mark(1, 1);
        board.mark(2, 1);
        board.mark(2, 2);
        expect(board.getWinner().isEmpty()).toEqual(false);
      });
    });
  });
});
