function TicTacToeAi() {
  var ai = this;
  var rows = [123, 456, 789, 147, 258, 369, 159, 357];
  
  var getStrategy = function() {
    return [
      gameOverStrategy,
      winStrategy,
      blockStrategy
      ];
  };

  this.play = function(board) {
    
    var strategies = getStrategy();
    
    for(i = 0; i < strategies.length; i++) {
      var move = strategies[i](board);
      if(move !== null) return move;
    }
    
     return {x:2, y:2};
  };
  
  var gameOverStrategy = function(board) {
    if(board.isGameOver()) throw new Error();
    return null;
  };
  
  var winStrategy = function(board) {
    for(var rowIndex = 0; rowIndex < rows.length; rowIndex++) {
      var row = rows[rowIndex] + "";
      
      var myCount = 0;
      var myWin = -1;
      
      for(cellIndex = 0; cellIndex < row.length; cellIndex++)
      {
        var cell = row[cellIndex];
        
        if(isMeAt(board, cell)) {
          myCount++;
        }
        else if(isEmptyAt(board, cell)) {
          myWin = cell;
        }
        else {
          break;
        }
      }
      
      if(myCount == 2 && myWin != -1) {
        return ai.cellToCoordinates(myWin);
      }
    }
    return null;
  };

  var blockStrategy = function(board) {
    for(var rowIndex = 0; rowIndex < rows.length; rowIndex++) {
      var row = rows[rowIndex] + "";
      
      var opponentCount = 0;
      var myBlock = -1;
      
      for(cellIndex = 0; cellIndex < row.length; cellIndex++)
      {
        var cell = row[cellIndex];
        
        if(isMeAt(board, cell)) {
          break;
        }
        else if(isEmptyAt(board, cell)) {
          myBlock = cell;
        }
        else {
          opponentCount++;
        }
      }
      
      if(opponentCount == 2 && myBlock != -1) {
        return ai.cellToCoordinates(myBlock);
      }
    }
    return null;
  };

  var isMeAt = function(board, cell) {
    var position = ai.cellToCoordinates(cell);
    return board.at(position.x, position.y) == board.getPlayer();
  };
  
  var isEmptyAt = function(board, cell) {
    var position = ai.cellToCoordinates(cell);
    return board.at(position.x, position.y) == board.noPlayerToken;
  };

}

TicTacToeAi.prototype.cellToCoordinates = function(cell) {
    var x = -1;
    var y = -1;
    switch(cell)
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
    if(x == -1 || y == -1) throw new Error("can not find cell for cell " + cell);
    return { x: x, y: y };
  };

