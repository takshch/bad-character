import ChangeDateFormat from "../../Helper/ChangeDateFormat";

it("Convert MM-DD-YYYY to DD MON, YYYY", () => {
  expect(ChangeDateFormat("09-24-2021")).toStrictEqual("24 Sep, 2021");
});

it("Should return same passed string if it's not date", () => {
  expect(ChangeDateFormat("Unknown")).toStrictEqual("Unknown");
});

it("Should not return anything if passed date is not of type String", () => {
  expect(ChangeDateFormat(1)).toStrictEqual(undefined);
});
