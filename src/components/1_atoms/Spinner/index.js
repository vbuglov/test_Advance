import React from "react";
import { Wrapper } from "./styles";

const Spinner = ({ size, restProps }) => {
  return (
    <Wrapper {...restProps} size={size}>
      <i className="far fa-spinner" />
    </Wrapper>
  );
};

export default Spinner;
