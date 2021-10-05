import React from "react";
import Footer from "../Footer";
import Header from "../Header";

const LayoutWrapper = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default LayoutWrapper;
