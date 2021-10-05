import { is } from "ramda";
import { isArr } from "@/utils/index";

const convertArrayToObject = (object) => {
  if (!is(Object, object)) {
    return null;
  }

  if (
    !object.type ||
    !object.value ||
    !isArr(object.value) ||
    !isArr(object.type) ||
    object.type.lenght !== object.value.lenght
  ) {
    return [];
  }

  const { type, value } = object;

  return value.map((v, idx) => ({
    value: v,
    type: type[idx],
  }));
};

export default convertArrayToObject;
