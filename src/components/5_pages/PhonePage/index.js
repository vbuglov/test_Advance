import React from "react";
import { useSelector } from "react-redux";
import { Wrapper } from "./styles";
import { ContactForm } from "@/organisms/index";
import { initState } from "./HOC";

const PhonePage = () => {
  const contactForm = useSelector((state) => state.contactForm);

  return (
    <Wrapper>
      <ContactForm list={contactForm.list} />
    </Wrapper>
  );
};

export default initState(PhonePage);
