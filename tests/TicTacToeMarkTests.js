describe("TicTacToeMark", function() {
  var mark;
  var emptyMark;
  var firstPlayerMark;
  var secondPlayerMark;
  var getPlayerIsFirst = true;
  var getPlayerIsSecond = false;
  var onMarked = function() {onMarkedCount++;};
  var onMarkedCount = 0;
  var onGetPlayer = function(){return {isFirst: getPlayerIsFirst, isSecond: getPlayerIsSecond};};
  beforeEach(function() {
    onMarkedCount = 0;
    firstPlayerMark = new TicTacToeMark(function(){return {isFirst: true, isSecond: false};}, null);
    secondPlayerMark = new TicTacToeMark(function(){return {isFirst: false, isSecond: true};}, null);
    emptyMark = new TicTacToeMark(null, null);
    firstPlayerMark.mark();
    secondPlayerMark.mark();
    
    mark = new TicTacToeMark(onGetPlayer, onMarked);
    getPlayerIsFirst = true;
    getPlayerIsSecond = false;
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
        expect(mark.equalTo(emptyMark)).toEqual(true);
      });
      it("is not player 1", function() {
        expect(mark.equalTo(firstPlayerMark)).toEqual(false);
      });
      it("is not second player", function() {
        expect(mark.equalTo(secondPlayerMark)).toEqual(false);
      });
    });
  });

  describe("marked as first player", function() {
    var data;
    beforeEach(function() {
      getPlayerIsFirst = true;
      getPlayerIsSecond = false;
      expect(mark.mark()).toEqual(true);
      data = mark.data();
    });

    it("calls onMarked()", function() {
      expect(onMarkedCount).toEqual(1);
    });
    
    it("is not empty", function() {
      expect(data.isEmpty).toEqual(false);
    });

    it("is first player", function() {
      expect(data.isFirstPlayer).toEqual(true);
    });

    it("is not second player", function() {
      expect(data.isSecondPlayer).toEqual(false);
    });

    it("has text as \"X\"", function() {
      expect(data.text).toEqual("X");
    });
    
    it("can not be marked again", function() {
      expect(mark.mark()).toEqual(false);
    });
    
    it("does not call onMarked() again", function() {
      onMarkedCount = 0;
      mark.mark();
      expect(onMarkedCount).toEqual(0);
    });

    it("can not be changed", function() {
      getPlayerIsFirst = false;
      getPlayerIsSecond = true;
      expect(mark.mark()).toEqual(false);
      expect(mark.data().isFirstPlayer).toEqual(true);
      expect(mark.data().isSecondPlayer).toEqual(false);
    });

    describe("equalTo", function() {

      it("is not empty", function() {
        expect(mark.equalTo(emptyMark)).toEqual(false);
      });
      it("is first player", function() {
        expect(mark.equalTo(firstPlayerMark)).toEqual(true);
      });
      it("is not second player", function() {
        expect(mark.equalTo(secondPlayerMark)).toEqual(false);
      });
    });
  });

  describe("marked as second player", function() {
    var data;
    beforeEach(function() {
      getPlayerIsFirst = false;
      getPlayerIsSecond = true;
      expect(mark.mark()).toEqual(true);
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
      expect(mark.mark()).toEqual(false);
    });
    
    it("has text as \"O\"", function() {
      expect(data.text).toEqual("O");
    });

    it("can not be changed", function() {
      getPlayerIsFirst = true;
      getPlayerIsSecond = false;
      expect(mark.mark()).toEqual(false);
      expect(mark.data().isFirstPlayer).toEqual(false);
      expect(mark.data().isSecondPlayer).toEqual(true);
    });

    describe("equalTo", function() {

      it("is not empty", function() {
        expect(mark.equalTo(emptyMark)).toEqual(false);
      });
      it("is not first player", function() {
        expect(mark.equalTo(firstPlayerMark)).toEqual(false);
      });
      it("is second player", function() {
        expect(mark.equalTo(secondPlayerMark)).toEqual(true);
      });
    });
  });
});
