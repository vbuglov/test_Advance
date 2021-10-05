import { GraphQLClient } from "graphql-request";
import { GRAPHQL_ENDPOINT } from "@/config/index";

export const makeGQClient = async (token) => {
  const headers = {
    any_token: "Bearer XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    token,
  };
  return new GraphQLClient(GRAPHQL_ENDPOINT, { headers });
};

export const request = async ({ token, schema, data }) => {
  const gqlClient = token ? await makeGQClient(token) : await makeGQClient();
  let answer = null;
  try {
    answer = gqlClient.request(schema, data);
  } catch (error) {
    answer = error;
    console.log(error);
  }
  return answer;
};
