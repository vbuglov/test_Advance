import React from "react";
import Button from "../index";
import { shallow } from "enzyme";

describe("Test Button component", () => {
  it("Test click event", () => {
    const mockCallBack = jest.fn();

    const button = shallow(<Button onClick={mockCallBack}>Ok!</Button>);
    button.simulate("click");
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
