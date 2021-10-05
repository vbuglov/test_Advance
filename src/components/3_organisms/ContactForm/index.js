import { Button } from "@/atoms/index";
import React from "react";
import { FormBody } from "./Components";
import { Wrapper } from "./styles";

const ContactForm = ({ list, className, ...restProps }) => {
  return (
    <Wrapper className={className}>
      <FormBody {...restProps} list={list} className="mb2" />
      <Button color="green">Сохранить</Button>
    </Wrapper>
  );
};

export default ContactForm;
