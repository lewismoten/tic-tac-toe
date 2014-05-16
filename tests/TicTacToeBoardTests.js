describe("TicTacToeBoard", function() {
  var board;
  beforeEach(function() {
    board = new TicTacToeBoard();
  });
  
  it("starts with first player", function() {
    expect(board.getPlayer()).toEqual(board.firstPlayerToken);
  });
  
  it("starts without a winner", function() {
    expect(board.hasWinner()).toEqual(false);
  });

  it("is not game over", function(){
    expect(board.isGameOver()).toEqual(false);
  });

  it("can mark an unoccupied cell", function(){
    expect(board.mark(0, 0)).toEqual(true);
  });
  
  describe("with a grid", function() {
    describe("where rows", function() {
      it("are not negative", function(){
        expect(function(){board.at(0, -1);}).toThrow();
      });
      it("has top", function(){
        expect(function(){board.at(0, 0);}).not.toThrow();
      });
      it("has middle", function(){
        expect(function(){board.at(0, 1);}).not.toThrow();
      });
      it("has bottom", function(){
        expect(function(){board.at(0, 2);}).not.toThrow();
      });
      it("has no more than three", function(){
        expect(function(){board.at(0, 3);}).toThrow();
      });
    });
    describe("where columns", function() {
      it("are not negative", function(){
        expect(function(){board.at(-1, 0);}).toThrow();
      });
      it("has left", function(){
        expect(function(){board.at(0, 0);}).not.toThrow();
      });
      it("has center", function(){
        expect(function(){board.at(1, 0);}).not.toThrow();
      });
      it("has right", function(){
        expect(function(){board.at(2, 0);}).not.toThrow();
      });
      it("has no more than three", function(){
        expect(function(){board.at(3, 0);}).toThrow();
      });
    });
  });
  describe("marking", function() {

    afterEach(function() {
        expect(board.isGameOver()).toEqual(false);
    });
    
    describe("on first", function() {
      beforeEach(function() {
        board.importPlay(1);
      });
      
      it("is marked for first player", function() {
        expect(board.at(0, 0)).toEqual(board.firstPlayerToken);
      });
      
      it("becomes the second players turn", function() {
        expect(board.getPlayer()).toEqual(board.secondPlayerToken);
      });
      
      it("can not be changed", function(){
        expect(board.mark(0, 0)).toEqual(false);
        expect(board.at(0, 0)).toEqual(board.firstPlayerToken);
      });
    });
    
    describe("on second", function() {
      beforeEach(function() {
        board.importPlay(12);
      });
  
      it("occupies a cell", function() {
        expect(board.at(1, 0)).toEqual(board.secondPlayerToken);
      });
      
      it("does not match the previous mark", function() {
        expect(board.at(1, 0)).not.toEqual(board.at(0, 0));
      });
  
      it("is second player", function() {
        expect(board.at(1, 0)).toEqual(board.secondPlayerToken);
      });
      
      it("becomes the first players turn", function() {
        expect(board.getPlayer()).toEqual(board.firstPlayerToken);
      });
      
      it("can not be changed", function(){
        expect(board.mark(1, 0)).toEqual(false);
        expect(board.at(1, 0)).toEqual(board.secondPlayerToken);
      });
    });
  
    describe("on third", function() {
      beforeEach(function() {
        board.importPlay(123);
      });
  
      it("matches the first mark", function() {
        expect(board.at(2, 0)).toEqual(board.at(0, 0));
      });
      
      it("is the first player", function() {
        expect(board.at(2, 0)).toEqual(board.firstPlayerToken);
      });
    });
  });
  describe("ends", function() {

    afterEach(function() {
        expect(board.isGameOver()).toEqual(true);
    });
    
    describe("on draw", function() {
      beforeEach(function() {
        board.importPlay(123457698);
      });
  
      it("has marks in all cells", function() {
        expect(board.isFull()).toEqual(true);
      });
  
      it("first player is not a winner", function() {
        expect(board.getWinner().isFirst).toEqual(false);
      });
  
      it("second player is not a winner", function() {
        expect(board.getWinner().isSecond).toEqual(false);
      });

      it("is no ones turn", function() {
        expect(board.getPlayer()).toEqual(board.unoccupiedToken);
      });

    });
    var mark = function(x, y, player1) {
      expect(board.getPlayer()).toEqual(player1 ? board.player1 : board.player2);
      expect(board.mark(x, y)).toEqual(true);
    };
    describe("on win", function() {
      beforeEach(function() {
        board.importPlay(14253);
        expect(board.toString()).toEqual("[XXX|OO |   ]");
      });

      it("has a winner", function() {
        expect(board.hasWinner()).toEqual(true);
      });

      it("is no ones turn", function() {
        expect(board.getPlayer()).toEqual(board.unoccupiedToken);
      });
      
      it("can not mark an empty cell", function(){
        expect(board.mark(2, 2)).toEqual(false);
        expect(board.at(2, 2)).toEqual(board.unoccupiedToken);
      });

      describe("winner", function(){
        it("can be first player", function() {
          expect(board.getWinner().isFirst).toEqual(true);
        });
        
        it("can be second player", function() {
          var board2 = new TicTacToeBoard();
          board2.importPlay(123568);
          expect(board2.getWinner().isSecond).toEqual(true);
        });
      });

      describe("three matching marks", function() {
    
        beforeEach(function() {
          board = new TicTacToeBoard();
          expect(board.hasWinner()).toEqual(false);
        });
        
        afterEach(function() {
          expect(board.hasWinner()).toEqual(true);
        });
        
        describe("with row", function() {
          it("is on top", function() {
            board.importPlay(14253);
          });
          
          it("is on middle", function() {
            board.importPlay(41526);
          });
      
          it("is on bottom", function() {
            board.importPlay(71829);
          });
        });
        
        describe("with column", function() {
  
          it("on left", function() {
            board.importPlay(12457);
          });
      
          it("on right", function() {
            board.importPlay(32659);
          });
      
          it("on center", function() {
            board.importPlay(23568);
          });
        });
        
        describe("diagonal", function() {
      
          it("top-right", function() {
            board.importPlay(32547);
          });
      
          it("top-left", function() {
            board.importPlay(12569);
          });
        });
      });
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
    var marked = this.mark(x, y);
    if(!marked) throw new Error("Could not mark cell for " + marks[i]);
  }
};