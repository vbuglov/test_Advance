import React from "react";
import { expect } from "chai";
import { shallow } from "enzyme";
import Select from "../index";

describe("<Select />", () => {
  it("check className props", () => {
    const wrapper = shallow(<Select className="test" />);
    expect(wrapper.prop("className")).equal("test");
  });
});
