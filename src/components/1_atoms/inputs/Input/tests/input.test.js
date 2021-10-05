import React from "react";
import { expect } from "chai";
import { shallow } from "enzyme";
import Input from "../index";

describe("<Select />", () => {
  it("check className props", () => {
    const wrapper = shallow(<Input className="test" />);
    expect(wrapper.prop("className")).equal("test");
  });
});
