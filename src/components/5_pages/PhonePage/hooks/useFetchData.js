import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateList } from "@/store/slicers/contactFormSlicer";

const request = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 3000);
  }).then(() => ({
    list: [
      {
        type: "email",
        value: "test@test.com",
      },
      {
        type: "email",
        value: "test@test.com",
      },
      {
        type: "email",
        value: "test@test.com",
      },
    ],
  }));
};

const useFetchData = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    setLoading(true);
    request().then(({ list }) => {
      setLoading(false);
      list && dispatch(updateList(list));
    });
  }, []);

  return { loading };
};

export default useFetchData;
