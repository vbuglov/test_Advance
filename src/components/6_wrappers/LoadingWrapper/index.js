import React from "react";
import T from "prop-types";
import { Result } from "@/molecules/index";
import { Spinner } from "@/atoms/index";

const LoadingWrapper = ({ isLoading, children, subTitle }) => {
  if (isLoading) {
    return (
      <Result
        icon={<Spinner size="large" />}
        subTitle={subTitle}
        title="Данные загружаются"
      />
    );
  }
  return <>{children}</>;
};

LoadingWrapper.propTypes = {
  isLoading: T.bool,
  subTitle: T.oneOfType([() => null, T.string]),
  children: T.node,
};

LoadingWrapper.defaultProps = {
  isLoading: false,
  subTitle: null,
  children: T.node,
};

export default LoadingWrapper;
