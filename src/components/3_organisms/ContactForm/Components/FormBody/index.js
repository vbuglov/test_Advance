import { Button, Input, Select } from "@/atoms/index";
import { is } from "ramda";
import React from "react";
import { randKey } from "@/utils/index";
import { Row, Wrapper } from "./styles";

const FormBody = ({ list, fields, ...restProps }) => {
  return (
    list &&
    is(Array, list) && (
      <Wrapper {...restProps}>
        {list.map(({ type, value }) => (
          <Row key={randKey()} className="row">
            <Select className="row_item"></Select>
            <Input value={value} className="row_item" />
            <Button className="row_item">+</Button>
            <Button className="row_item">-</Button>
          </Row>
        ))}
      </Wrapper>
    )
  );
};

export default FormBody;
