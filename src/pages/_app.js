import React from "react";
import FatalError from "@/components/4_templates/FatalError";

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
