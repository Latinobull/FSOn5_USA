var expect = chai.expect;

describe('Remove Dirty Data', function () {
  it("should return '33' when given '[0, 2, 6, 100, 1329, 2993, 1, 2223, 68, 10000, 0, 0, -1, -23, 223412341, 123123, 23]'", function () {
    var arr = [
      0, 2, 6, 100, 1329, 2993, 1, 2223, 68, 10000, 0, 0, -1, -23, 223412341,
      123123, 23,
    ];

    var result = cleanData(arr);

    expect(result).to.eql(33);
  });

  it("should return '77' when given [0, 0, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 90, 78, 80, 45, 88, 22222, 70, 80, 70, 222222, 222222, 2222222, 222222, 22222,]", function () {
    var arr = [
      0, 0, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 90, 78, 80, 45, 88, 22222, 70,
      80, 70, 222222, 222222, 2222222, 222222, 22222,
    ];

    var result = cleanData(arr);

    expect(result).to.eql(71);
  });
});
