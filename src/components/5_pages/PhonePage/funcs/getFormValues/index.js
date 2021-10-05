import { isArr } from "@/utils/index";

const getFormValues = (list = []) => {
  if (!isArr(list)) {
    return null;
  }

  return list.reduce(
    (acc, cur) => {
      return {
        type: [...acc.type, cur.type],
        value: [...acc.value, cur.value],
      };
    },
    {
      type: [],
      value: [],
    }
  );
};

export default getFormValues;
