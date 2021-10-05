import React from "react";
import { Btn } from "./styles";
import T from "prop-types";

const Button = ({ children, type, className, ...restProps }) => {
  return (
    <Btn className={`${type} ${className}`} {...restProps}>
      {children}
    </Btn>
  );
};

Button.propTypes = {
  children: T.oneOfType([T.string, T.node, () => null]),
  type: T.oneOf(["primary", "reversed"]),
  color: T.string,
  size: T.oneOf(["large", "small", "medium"]),
  onClick: T.func,
  className: T.string,
};

Button.defaultProps = {
  children: "Сохранить",
  type: "primary",
  color: "#2873eb",
  size: "medium",
  onClick: console.log,
  className: "",
};

export default Button;
