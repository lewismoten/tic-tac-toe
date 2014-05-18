function TicTacToeAi() {
  var ai = this;
  var rows = ["123", "456", "789", "147", "258", "369", "159", "357"];
  
  var getStrategy = function() {
    return [
      gameOverStrategy,
      winStrategy,
      blockWinStrategy,
      forkStrategy
      ];
  };

  this.play = function(board) {
    
    var strategies = getStrategy();

    for(i = 0; i < strategies.length; i++) {
      var move = strategies[i](board);
      if(move !== null) return move;
    }
    
    return {x: 1, y: 0};
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

  var blockWinStrategy = function(board) {
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
  
  var forkStrategy = function(board) {
    for(var i = 0; i < rows.length; i++) {
      if(isMeInRow(board, rows[i]) && isEmptyInRow(board, rows[i] && !isOpponentInRow(board, rows[i]))) {
        for(var j = 0; j < rows.length; j++) {
          if(j === i) continue;
          if(isMeInRow(board, rows[j]) && isEmptyInRow(board, rows[j] && !isOpponentInRow(board, rows[j]))) {
            var cell = overlap(rows[i], rows[j]);
            if(cell === null) continue;
            throw "HELLO";
            if(isEmptyAt(board, cell)) return ai.cellToCoordinates(cell);
          }
        }
      }
    }
    
    return null;
  };
  
  var overlap = function(row1, row2) {
    for(var i = 0; i < row1.length; i++) {
      if(row2.indexOf(row1[i]) !== -1) {
        return row1[i];
      }
    }
    return null;
  };

  var isEmptyInRow = function(board, row) {
    for(var i = 0; i < row.length; i++) {
      if(isEmptyAt(board, row[i])) {
        return true;
      }
    }
    return false;
  };

  var isOpponentInRow = function(board, row) {
    for(var i = 0; i < row.length; i++) {
      if(isOpponentAt(board, row[i])) {
        return true;
      }
    }
    return false;
  };
  
  var isMeInRow = function(board, row) {
    for(var i = 0; i < row.length; i++) {
      if(isMeAt(board, row[i])) {
        return true;
      }
    }
    return false;
  };
  
  var isOpponentAt = function(board, cell) {
    return !(isMeAt(board, cell) || isEmptyAt(board, cell));
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

