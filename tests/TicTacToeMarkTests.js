describe("TicTacToeMark", function() {
  var mark;
  beforeEach(function() {
    mark = new TicTacToeMark();
  });

  it("is empty", function() {
    expect(mark.data().isEmpty).toEqual(true);
  });

  it("exposes data", function() {
    expect(mark.data()).toEqual({
      isFirstPlayer: false,
      isSecondPlayer: false,
      isEmpty: true,
      text: " "
    });
  });

  describe("empty", function() {
    it("is not first player", function() {
      expect(mark.data().isFirstPlayer).toEqual(false);
    });
  
    it("is not second player", function() {
      expect(mark.data().isSecondPlayer).toEqual(false);
    });
  
    it("has text as \" \"", function() {
      expect(mark.data().text).toEqual(" ");
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

  describe("marked as first player", function() {
    beforeEach(function() {
     expect(mark.markAsPlayer1()).toEqual(true);
    });

    it("is not empty", function() {
      expect(mark.data().isEmpty).toEqual(false);
    });

    it("is first player", function() {
      expect(mark.data().isFirstPlayer).toEqual(true);
    });

    it("is not second player", function() {
      expect(mark.data().isSecondPlayer).toEqual(false);
    });

    it("has text as \"X\"", function() {
      expect(mark.data().text).toEqual("X");
    });
    
    it("can not be marked again", function() {
      expect(mark.markAsPlayer1()).toEqual(false);
    });
    
    it("can not be changed", function() {
      expect(mark.markAsPlayer2()).toEqual(false);
      expect(mark.data().isFirstPlayer).toEqual(true);
      expect(mark.data().isSecondPlayer).toEqual(false);
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
    var data;
    beforeEach(function() {
      expect(mark.markAsPlayer2()).toEqual(true);
      data = mark.data();
    });

    it("is not empty", function() {
      expect(data.isEmpty).toEqual(false);
    });

    it("is not first player", function() {
      expect(data.isFirstPlayer).toEqual(false);
    });

    it("is second player", function() {
      expect(data.isSecondPlayer).toEqual(true);
    });

    it("can not be marked again", function() {
      expect(mark.markAsPlayer2()).toEqual(false);
    });
    
    it("has text as \"O\"", function() {
      expect(data.text).toEqual("O");
    });

    it("can not be changed", function() {
      expect(mark.markAsPlayer1()).toEqual(false);
      expect(mark.data().isFirstPlayer).toEqual(false);
      expect(mark.data().isSecondPlayer).toEqual(true);
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
