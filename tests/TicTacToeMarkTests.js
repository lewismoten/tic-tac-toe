describe("TicTacToeMark", function() {
  var mark;
  beforeEach(function() {
    mark = new TicTacToeMark();
  });

  it("is empty", function() {
    expect(mark.isEmpty()).toEqual(true);
  });

  describe("empty", function() {
    it("is not player 1", function() {
      expect(mark.isPlayer1()).toEqual(false);
    });
  
    it("is not player 2", function() {
      expect(mark.isPlayer2()).toEqual(false);
      expect(mark.data().isPlayer2).toEqual(false);
    });
  
    it("string value is ' '", function() {
      expect(mark.toString()).toEqual(" ");
    });
    
    it("data structure", function() {
      expect(mark.data()).toEqual({
        isFirstPlayer: false,
        isPlayer2: false,
        isEmpty: true,
        text: " "
      });
    it("data compare", function() {
      expect(mark.data()).toEqual(mark.data());
      var other = new TicTacToeMark();
      expect(other.data()).toEqual(mark.data());
    });
  });
    
    describe("equalTo", function() {

      it("is empty", function() {
        var other = new TicTacToeMark();
        expect(mark.equalTo(other)).toEqual(true);
      });
      it("is not player 1", function() {
        var other = new TicTacToeMark();
        other.markAsPlayer1();
        expect(mark.equalTo(other)).toEqual(false);
      });
      it("is not player 2", function() {
        var other = new TicTacToeMark();
        other.markAsPlayer2();
        expect(mark.equalTo(other)).toEqual(false);
      });
    });
  });

  describe("marked as player 1", function() {
    beforeEach(function() {
     expect(mark.markAsPlayer1()).toEqual(true);
    });

    it("is not empty", function() {
      expect(mark.isEmpty()).toEqual(false);
    });

    it("is player 1", function() {
      expect(mark.isPlayer1()).toEqual(true);
    });

    it("is not player 2", function() {
      expect(mark.isPlayer2()).toEqual(false);
    });

    it("string value is 'X'", function() {
      expect(mark.toString()).toEqual("X");
    });
    
    it("can not be marked again", function() {
      expect(mark.markAsPlayer1()).toEqual(false);
    });
    
    it("can not be changed", function() {
      expect(mark.markAsPlayer2()).toEqual(false);
      expect(mark.isPlayer2()).toEqual(false);
      expect(mark.isPlayer1()).toEqual(true);
    });
    
    it("data compare", function() {
      expect(mark.data()).toEqual(mark.data());
      var other = new TicTacToeMark();
      other.markAsPlayer1();
      expect(other.data()).toEqual(mark.data());
    });
    
    describe("equalTo", function() {

      it("is not empty", function() {
        var other = new TicTacToeMark();
        expect(mark.equalTo(other)).toEqual(false);
      });
      it("is player 1", function() {
        var other = new TicTacToeMark();
        other.markAsPlayer1();
        expect(mark.equalTo(other)).toEqual(true);
      });
      it("is not player 2", function() {
        var other = new TicTacToeMark();
        other.markAsPlayer2();
        expect(mark.equalTo(other)).toEqual(false);
      });
    });
  });

  describe("marked as player 2", function() {
    beforeEach(function() {
      expect(mark.markAsPlayer2()).toEqual(true);
    });

    it("is not empty", function() {
      expect(mark.isEmpty()).toEqual(false);
    });

    it("is not player 1", function() {
      expect(mark.isPlayer1()).toEqual(false);
    });

    it("is player 2", function() {
      expect(mark.isPlayer2()).toEqual(true);
    });

    it("string value is 'O'", function() {
      expect(mark.toString()).toEqual("O");
    });
    
    it("can not be marked again", function() {
      expect(mark.markAsPlayer2()).toEqual(false);
    });
    
    it("can not be changed", function() {
      expect(mark.markAsPlayer1()).toEqual(false);
      expect(mark.isPlayer1()).toEqual(false);
      expect(mark.isPlayer2()).toEqual(true);
    });

    describe("equalTo", function() {

      it("is not empty", function() {
        var other = new TicTacToeMark();
        expect(mark.equalTo(other)).toEqual(false);
      });
      it("is not player 1", function() {
        var other = new TicTacToeMark();
        other.markAsPlayer1();
        expect(mark.equalTo(other)).toEqual(false);
      });
      it("is player 2", function() {
        var other = new TicTacToeMark();
        other.markAsPlayer2();
        expect(mark.equalTo(other)).toEqual(true);
      });
    });
  });
});
