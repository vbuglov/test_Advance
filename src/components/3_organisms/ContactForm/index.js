import { Button } from "@/atoms/index";
import React from "react";
import { FormBody } from "./Components";
import { Wrapper } from "./styles";
import T from "prop-types";

const ContactForm = ({ list, className, ...restProps }) => {
  return (
    <Wrapper className={className}>
      <FormBody {...restProps} list={list} className="mb2" />
      <Button color="green">Сохранить</Button>
    </Wrapper>
  );
};

ContactForm.propTypes = {
  list: T.array,
  className: T.string,
};

ContactForm.defaultProps = {
  list: [],
  className: "",
};

export default ContactForm;
