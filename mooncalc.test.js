const MoonCalc = require('./mooncalc');

describe("MoonCalc", () => {
  // it("should return Gemini at 2020-01-09T00:29:00.000-03:00", () => {
  //   expect(MoonCalc(
  //     new Date("2020-01-09T00:29:00.000-03:00")
  //   ).constellation).toEqual("Gemini");
  // });

  // it("should return Cancer at 2020-01-09T00:30:00.000-03:00", () => {
  //   expect(MoonCalc(
  //     new Date("2020-01-09T00:30:00.000-03:00")
  //   ).constellation).toEqual("Cancer");
  // });

  it("[WRONG] should return Cancer at 2020-01-10T23:56:00.000-03:00", () => {
    expect(MoonCalc(
      new Date("2020-01-10T23:56:00.000-03:00")
    ).constellation).toEqual("Cancer");
  });

  // it("[GOOD] should return Cancer at 2020-01-11T12:15:00.000-03:00", () => {
  //   expect(MoonCalc(
  //     new Date("2020-01-11T12:15:00.000-03:00")
  //   ).constellation).toEqual("Cancer");
  // });
  
  it("[GOOD] should return Leo at 2020-01-11T12:16:00.000-03:00", () => {
    expect(MoonCalc(
      new Date("2020-01-11T12:16:00.000-03:00")
    ).constellation).toEqual("Leo");
  });

  // it("[GOOD] should return Leo at 2020-01-13T14:06:00.000-03:00", () => {
  //   expect(MoonCalc(
  //     new Date("2020-01-13T14:06:00.000-03:00")
  //   ).constellation).toEqual("Leo");
  // });

  it("[GOOD] should return Virgo at 2020-01-13T14:07:00.000-03:00", () => {
    expect(MoonCalc(
      new Date("2020-01-13T14:07:00.000-03:00")
    ).constellation).toEqual("Virgo");
  });
});