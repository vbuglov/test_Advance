import { useEffect, useState } from "react";

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

  useEffect(() => {
    const data = request().then((el) => {
      setData(el);
    });
  }, []);

  return { list: data, loading: !data };
};

export default useFetchData;
