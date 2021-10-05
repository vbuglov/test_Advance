import React from "react";
import { Wrapper, Icon, Title, SubTitle, Extra } from "./styles";
import T from "prop-types";

const Result = ({ icon, title, subTitle, extra }) => {
  console.log(title);
  return (
    <Wrapper>
      {icon && <Icon> {icon} </Icon>}
      {title && <Title> {title} </Title>}
      {subTitle && <SubTitle> {subTitle} </SubTitle>}
      {extra && <Extra> {extra} </Extra>}
    </Wrapper>
  );
};

Result.propTypes = {
  extra: T.oneOfType([T.string, T.node, () => null, T.array]),
  icon: T.oneOfType([T.string, T.node, () => null]),
  title: T.oneOfType([T.string, T.node, () => null]),
  subTitle: T.oneOfType([T.string, T.node, () => null]),
};

Result.defaultProps = {
  children: "Сохранить",
  type: "primary",
  color: "#2873eb",
  size: "medium",
  onClick: console.log,
  className: "",
};

export default Result;
