import React from "react";
import T from "prop-types";
import PageStatusWrapper from "../PageStatusWrapper";

const EmptyDataWrapper = ({ isEmpty, children, ...props }) => {
  if (isEmpty) {
    return <PageStatusWrapper isActive={isEmpty} status="404" {...props} />;
  }
  return <>{children}</>;
};

EmptyDataWrapper.propTypes = {
  title: T.string,
  subTitle: T.string,
  isEmpty: T.bool,
  style: T.oneOfType([T.object, () => null]),
  children: T.oneOfType([T.node, () => null]),
  extra: T.oneOfType([T.node, () => null, T.array]),
};

EmptyDataWrapper.defaultProps = {
  title: "Нет данных",
  subTitle: "За выбранный период нет данных, попробуйте выбрать другой период",
  isEmpty: false,
  style: null,
  children: null,
  extra: null,
};

export default EmptyDataWrapper;
