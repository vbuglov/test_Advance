import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "@/store/slicers/counterSlicer";
import { Wrapper } from "./styles";
import { Button, Select } from "@/atoms/index";

const { Option } = Select;

const PhonePage = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <div>
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
      <Select>
        <option value={16}>12</option>
      </Select>
      <Button color="#2873eb">Сохранить</Button>
    </Wrapper>
  );
};

export default PhonePage;
