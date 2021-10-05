import { Button } from "@/atoms/index";
import React from "react";
import { FormBody } from "./Components";
import { Wrapper } from "./styles";
import T from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { addEmptyItem } from "@/store/slicers/contactFormSlicer";
import { getFormValues } from "@/pages/PhonePage";

const ContactForm = ({ className, ...restProps }) => {
  const contactForm = useSelector((state) => state.contactForm);
  const dispatch = useDispatch();
  const list = contactForm.list;
  const handleUpload = () => {
    console.log(getFormValues(list));
  };

  return (
    <Wrapper className={className}>
      <FormBody {...restProps} list={list} className="mb2" />
      <Button
        onClick={() => dispatch(addEmptyItem())}
        className="mb2"
        type="reversed"
        color="green"
      >
        Добавить элемент
      </Button>
      <Button onClick={handleUpload} color="green">
        Сохранить
      </Button>
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
