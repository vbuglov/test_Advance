import React from "react";
import { Wrapper, Option } from "./styles";

const Select = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

Select.Option = Option;

export default Select;
