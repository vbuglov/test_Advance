import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateList } from "@/store/slicers/contactFormSlicer";

const request = async () => {
  return new Promise((resolve, reject) => {
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
  const [data, setData] = useState(null);
  const tes = useSelector((state) => state.contactForm);
  const dispatch = useDispatch();

  console.log(tes);

  useEffect(() => {
    const data = request().then(({ list }) => {
      list && setData(list);
      list && dispatch(updateList(list));
    });
  }, []);

  return { list: data, loading: !data };
};

export default useFetchData;
