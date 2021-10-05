import { pipe, curry, is, cond, T } from "ramda";
import { isArr, isString } from "./validators";

export const wrapNumberMask = (value) => {
  if (is(Number, value)) return value;
  if (value === "" || !is(String, value)) return "";
  let str = "";
  const num = /[0-9]/g;
  if (value) str = value.match(num);
  if (str) {
    str = str.join("");
    return str;
  }
  return "";
};
