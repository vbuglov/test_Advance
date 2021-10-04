/* eslint-disable semi-style */
/* eslint-disable no-console */
const express = require("express");
const app = require("./app");
const router = require("./router");
const cookieParser = require("cookie-parser");
const { express: voyagerMiddleware } = require("graphql-voyager/middleware");

const SERVER_PORT = process.env.SERVER_PORT || 3000;
const CONFIG = require("../config/config.json");

const server = express();

console.log("hello");

(async () => {
  try {
    await app.prepare();
    server.use(cookieParser());
    server.use("/", router);
    server.use(express.static("public"));
    server.use(
      "/model-graphs",
      voyagerMiddleware({ endpointUrl: CONFIG.GRAPHQL_ENDPOINT })
    );
    server.listen(SERVER_PORT, (err) => {
      if (err) throw err;
      console.log(`Server is running on http://172.25.78.64:${SERVER_PORT}`);
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
