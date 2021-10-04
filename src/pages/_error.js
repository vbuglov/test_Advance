/* eslint-disable prefer-destructuring */
import React from "react";
import NextErrorComponent from "next/error";

const Error = (props) => {
  return "Error";
};

const ErrorComponent = ({ statusCode }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p style={{ fontSize: "40px" }}>
        {statusCode
          ? `Ошибка со статусом: ${statusCode}`
          : "Ошибка клиентского приложения"}
      </p>
    </div>
  );
};

Error.getInitialProps = async ({ res, err }) => {
  const initialError = await NextErrorComponent.getInitialProps({
    res,
    err,
  });
  initialError.hasGetInitialPropsRun = true;

  if (res?.statusCode === 404) {
    return { statusCode: 404 };
  }
  if (err) {
    return { ...initialError };
  }
};

export default Error;
