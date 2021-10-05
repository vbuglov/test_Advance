import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "@/store/slicers/counterSlicer";
import { Wrapper } from "./styles";
import { ContactForm } from "@/organisms/index";
import { initState } from "./HOC";

const list = [
  {
    type: "email",
    value: "test@test.com",
  },
  {
    type: "email",
    value: "test@test.com",
  },
  {
    type: "email",
    value: "test@test.com",
  },
];

const PhonePage = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <div className="mb2">
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
      <ContactForm list={list} />
    </Wrapper>
  );
};

export default initState(PhonePage);
