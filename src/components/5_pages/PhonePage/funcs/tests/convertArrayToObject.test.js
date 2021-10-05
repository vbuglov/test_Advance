import convertArrayToObject from "../convertArrayToObject";
import list from "./list.json";
import object from "./object.json";

test("convertArrayToObject test with good data", () => {
  expect(convertArrayToObject(object)).toEqual(list);
});

test("convertArrayToObject test when null", () => {
  expect(convertArrayToObject(null)).toEqual(null);
});

test("convertArrayToObject test when empty", () => {
  expect(convertArrayToObject({})).toEqual([]);
});
