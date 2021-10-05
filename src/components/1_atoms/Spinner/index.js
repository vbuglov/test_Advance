import React from "react";
import { Wrapper } from "./styles";
import T from "prop-types";

const Spinner = ({ size, ...restProps }) => {
  return (
    <Wrapper {...restProps} size={size}>
      <i className="far fa-spinner" />
    </Wrapper>
  );
};

Spinner.propTypes = {
  size: T.oneOfType([
    T.number,
    T.string,
    () => "large",
    () => "small",
    () => "medium",
  ]),
};

Spinner.defaultProps = {
  size: 76,
};

export default Spinner;
