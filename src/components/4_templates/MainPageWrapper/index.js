import React from "react";
import LayoutWrapper from "../LayoutWrapper";

const MainPageWrapper = ({ children }) => {
  return (
    <div>
      <LayoutWrapper>{children}</LayoutWrapper>
    </div>
  );
};

export default MainPageWrapper;
