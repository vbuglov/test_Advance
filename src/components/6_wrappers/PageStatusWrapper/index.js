import React from "react";
import { Result } from "antd";
import T from "prop-types";

const PageStatusWrapper = ({
  isActive,
  children,
  extra,
  title,
  subTitle,
  status,
  icon,
}) => {
  if (isActive) {
    return (
      <Result
        icon={icon}
        status={status}
        title={title}
        subTitle={subTitle}
        extra={extra}
      />
    );
  }
  return <>{children}</>;
};

PageStatusWrapper.propTypes = {
  title: T.string,
  subTitle: T.string,
  status: T.oneOfType([T.string, () => null]),
  isEmpty: T.bool,
  children: T.oneOfType([T.node, () => null]),
  extra: T.oneOfType([T.node, () => null]),
  icon: T.oneOfType([T.node, () => null]),
};

PageStatusWrapper.defaultProps = {
  title: "Нет данных",
  subTitle: "За выбранный период нет данных, попробуйте выбрать другой период",
  isEmpty: false,
  children: null,
  extra: null,
  status: null,
  icon: null,
};

export default PageStatusWrapper;
