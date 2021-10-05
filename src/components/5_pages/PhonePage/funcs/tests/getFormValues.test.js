import getFormValues from "../getFormValues";
import list from "./list.json";
import object from "./object.json";

test("getFormValues test with good data", () => {
  expect(getFormValues(list)).toEqual(object);
});

test("getFormValues test when null", () => {
  expect(getFormValues(null)).toEqual(null);
});

test("getFormValues test when empty", () => {
  expect(getFormValues([])).toEqual({
    type: [],
    value: [],
  });
});
