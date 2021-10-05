import React from "react";
import FatalError from "@/components/4_templates/FatalError";
import "../styles/index.css";
import "../styles/fontawesome/font_awesome.css";

const App = ({ Component, pageProps, err }) => {
  return err ? (
    <FatalError />
  ) : (
    <div>
      <Component {...pageProps} />
    </div>
  );
};

export default App;
