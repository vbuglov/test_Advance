import { curry, and, has, pathEq, T, equals, cond } from "ramda";
import { GraphQLClient } from "graphql-request";
import { GRAPHQL_ENDPOINT, API } from "@/config/index";
import { P } from "@/schemas/index";

const generateAPIData = () => {};
export const nilOrEmpty = either(isEmpty, isNil);

export const asyncRes = curry((key, obj) => and(obj[key], has(key, obj)));
export const asyncErr = (key) => pathEq(["error"], key);

export const makeGQClient = async (token) => {
  const headers = {
    site_authorization:
      "Bearer XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  };

  if (!nilOrEmpty(token)) {
    headers.account_authorization = `Bearer ${token}`;
  }
  return new GraphQLClient(GRAPHQL_ENDPOINT, { headers });
};

export const request = async ({ token, schema, data }) => {
  const gqlClient = token ? await makeGQClient(token) : await makeGQClient();
  try {
    return cond([
      [equals("faker"), () => generateAPIData(schema)],
      [
        () => !!P[schema],
        () => {
          let answer = null;
          try {
            answer = gqlClient.request(P[schema], data);
          } catch (error) {
            console.log(error);
          }
          return answer;
        },
      ],
      [
        T,
        () => {
          throw new Error("graphql_helper.request error");
        },
      ],
    ])(API);
  } catch (error) {
    console.log(error);
  }
};

export const later = (func, time = 200) => setTimeout(func, time);
