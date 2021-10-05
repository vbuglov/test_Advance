import React from "react";
import { Wrapper, Option, Slc } from "./styles";

const Select = ({ children, className, ...restProps }) => {
  return (
    <Wrapper className={className}>
      <Slc {...restProps}>{children}</Slc>
    </Wrapper>
  );
};

Select.Option = Option;

export default Select;
