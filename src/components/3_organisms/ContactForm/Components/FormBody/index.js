import { Button, Input, Select } from "@/atoms/index";
import { is } from "ramda";
import React from "react";
import { randKey } from "@/utils/index";
import { Row, Wrapper } from "./styles";
import { removeItem, updateItem } from "@/store/slicers/contactFormSlicer";
import { useDispatch } from "react-redux";

const { Option } = Select;

const FormBody = ({ list, fields, ...restProps }) => {
  const dispatch = useDispatch();
  const disabledBtn = list && list?.length < 2;

  const cValue = (item, v) =>
    dispatch(
      updateItem({
        ...item,
        value: v,
      })
    );

  const cType = (item, v) => {
    dispatch(
      updateItem({
        ...item,
        type: v.target.value,
      })
    );
  };

  const maskByType = (v) => v;

  return (
    list &&
    is(Array, list) && (
      <Wrapper {...restProps}>
        {list.map((item) => {
          const { type, value, index } = item;
          return (
            <Row key={randKey()} className="row">
              <Select
                onChange={(v) => cType(item, v)}
                value={type}
                className="row_item"
              >
                <Option value={""}>{""}</Option>
                {fields &&
                  fields.map((el) => (
                    <Option value={el} key={randKey()}>
                      {el}
                    </Option>
                  ))}
              </Select>
              <Input
                recordOnBlur
                onChange={(v) => cValue(item, v)}
                value={value}
                className="row_item"
                masks={[maskByType]}
              />
              <Button
                disabled={disabledBtn}
                onClick={() => dispatch(removeItem(index))}
                className="row_item"
              >
                -
              </Button>
            </Row>
          );
        })}
      </Wrapper>
    )
  );
};

export default FormBody;
