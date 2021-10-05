import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateList } from "@/store/slicers/contactFormSlicer";
import { convertArrayToObject } from "../funcs/index";
import { pipe } from "ramda";

const request = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 3000);
  }).then(() => ({
    list: {
      type: ["email", "email", "phone"],
      value: ["test@test.com", "test2@test.com", "+78005004545"],
    },
  }));
};

const useFetchData = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    setLoading(true);
    request().then(({ list }) => {
      setLoading(false);
      pipe(convertArrayToObject, updateList, dispatch)(list);
    });
  }, []);

  return { loading };
};

export default useFetchData;
