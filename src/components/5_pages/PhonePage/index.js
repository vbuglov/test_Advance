import React from "react";
import { Wrapper } from "./styles";
import { ContactForm } from "@/organisms/index";
import { initState } from "./HOC";

const PhonePage = () => {
  const fields = ["email", "phone", "link"];

  return (
    <Wrapper>
      <ContactForm fields={fields} />
    </Wrapper>
  );
};

export default initState(PhonePage);
