describe("TicTacToeMark", function() {
  var mark;
  beforeEach(function() {
    mark = new TicTacToeMark();
  });

  it("is empty", function() {
    expect(mark.isEmpty()).toEqual(true);
  });

  describe("empty", function() {
    it("is not first player", function() {
      expect(mark.isPlayer1()).toEqual(false);
    });
  
    it("is not second player", function() {
      expect(mark.isPlayer2()).toEqual(false);
    });
  
    it("serializes itself", function() {
      expect(mark.data()).toEqual({
        isFirstPlayer: mark.isPlayer1(),
        isSecondPlayer: mark.isPlayer2(),
        isEmpty: mark.isEmpty(),
        text: " "
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

    it("serializes itself", function() {
      expect(mark.data()).toEqual({
        isFirstPlayer: mark.isPlayer1(),
        isSecondPlayer: mark.isPlayer2(),
        isEmpty: mark.isEmpty(),
        text: "X"
      });
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
      it("is first player", function() {
        var other = new TicTacToeMark();
        other.markAsPlayer1();
        expect(mark.equalTo(other)).toEqual(true);
      });
      it("is not second player", function() {
        var other = new TicTacToeMark();
        other.markAsPlayer2();
        expect(mark.equalTo(other)).toEqual(false);
      });
    });
  });

  describe("marked as second player", function() {
    beforeEach(function() {
      expect(mark.markAsPlayer2()).toEqual(true);
    });

    it("is not empty", function() {
      expect(mark.isEmpty()).toEqual(false);
    });

    it("is not first player", function() {
      expect(mark.isPlayer1()).toEqual(false);
    });

    it("is second player", function() {
      expect(mark.isPlayer2()).toEqual(true);
    });

    it("can not be marked again", function() {
      expect(mark.markAsPlayer2()).toEqual(false);
    });
    
    it("can not be changed", function() {
      expect(mark.markAsPlayer1()).toEqual(false);
      expect(mark.isPlayer1()).toEqual(false);
      expect(mark.isPlayer2()).toEqual(true);
    });

    it("serializes itself", function() {
      expect(mark.data()).toEqual({
        isFirstPlayer: mark.isPlayer1(),
        isSecondPlayer: mark.isPlayer2(),
        isEmpty: mark.isEmpty(),
        text: "O"
      });
    });

    describe("equalTo", function() {

      it("is not empty", function() {
        var other = new TicTacToeMark();
        expect(mark.equalTo(other)).toEqual(false);
      });
      it("is not first player", function() {
        var other = new TicTacToeMark();
        other.markAsPlayer1();
        expect(mark.equalTo(other)).toEqual(false);
      });
      it("is second player", function() {
        var other = new TicTacToeMark();
        other.markAsPlayer2();
        expect(mark.equalTo(other)).toEqual(true);
      });
    });
  });
});
