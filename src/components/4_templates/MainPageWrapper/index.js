import React from "react";
import LayoutWrapper from "../LayoutWrapper";
import store from "@/store/index";
import { Provider } from "react-redux";

const MainPageWrapper = ({ children }) => {
  return (
    <Provider store={store}>
      <div>
        <LayoutWrapper>{children}</LayoutWrapper>
      </div>
    </Provider>
  );
};

export default MainPageWrapper;
