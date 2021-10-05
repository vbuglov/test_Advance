import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import Body from "../Body";

const LayoutWrapper = ({ children }) => {
  return (
    <div>
      <Header />
      <Body>{children}</Body>
      <Footer />
    </div>
  );
};

export default LayoutWrapper;
