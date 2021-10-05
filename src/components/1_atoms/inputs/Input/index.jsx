/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React, { useState } from "react";
import { InputWrapper, InputContainer } from "./styles";
import { IconWrapper } from "./Wrappers";
import { cond, T } from "ramda";
import TYPE from "prop-types";
import stylePropType from "react-style-proptype";
import { isArr } from "@/utils/index";
import { ErrorDescriptionWrapper } from "@/wrappers/index";

const Input = (props) => {
  const [lVal, clVal] = useState("");
  const [isEditing, cIsEditing] = useState(false);

  const {
    value,
    onChange,
    style,
    masks = [],
    error = "",
    className,
    icon = null,
    disabled = false,
    label = null,
    recordOnBlur = false,
    validation = () => true,
    type = "text",
  } = props;
  const hasVal = !!(value || lVal);
  const maskingStr = (str) =>
    cond([
      [
        () => isArr(masks) && masks.length > 0,
        () =>
          masks.reduce((acc, cur) => {
            return cur(acc);
          }, str),
      ],
      [T, () => str],
    ])(str);

  const cValue = (e) => {
    const mStr = maskingStr(e.target.value);

    if (!validation(e.target.value)) {
      console.log();
    } else if (recordOnBlur) {
      clVal(mStr);
    } else if (onChange) {
      onChange(mStr);
    } else {
      clVal(mStr);
    }
  };

  const displayedValue = cond([
    [() => recordOnBlur && isEditing, () => lVal || ""],
    [() => recordOnBlur && !isEditing, () => value || ""],
    [T, () => value || ""],
  ])();

  const hBlur = () => {
    recordOnBlur && onChange && onChange(lVal);
    cIsEditing(false);
  };

  const onFocus = () => {
    if (recordOnBlur) {
      cIsEditing(true);
      clVal(value);
    }
  };

  return (
    <InputContainer className={className} style={style}>
      <InputWrapper
        disabled={disabled}
        error={!!error}
        hasIcon={!!icon}
        hasVal={hasVal}
      >
        <IconWrapper icon={icon} />
        <input
          type={type}
          value={displayedValue}
          onChange={cValue}
          disabled={disabled}
          onBlur={hBlur}
          onFocus={onFocus}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              e.target.blur();
            }
          }}
        />
        {label && <label>{label}</label>}
      </InputWrapper>
      <ErrorDescriptionWrapper error={error} />
    </InputContainer>
  );
};

Input.propTypes = {
  value: TYPE.oneOfType([
    TYPE.oneOf([null]).isRequired,
    TYPE.string,
    TYPE.number,
  ]),
  onChange: TYPE.oneOfType([TYPE.oneOf([null]).isRequired, TYPE.func]),
  style: stylePropType,
  masks: TYPE.array,
  error: TYPE.string,
  className: TYPE.string,
  icon: TYPE.oneOfType([
    TYPE.oneOf([null]).isRequired,
    TYPE.string,
    TYPE.object,
  ]),
  disabled: TYPE.bool,
  label: TYPE.oneOfType([TYPE.oneOf([null]).isRequired, TYPE.string]),
  recordOnBlur: TYPE.bool,
  validation: TYPE.func,
};

Input.defaultProps = {
  value: null,
  onChange: null,
  style: {},
  masks: [],
  error: "",
  className: "",
  icon: null,
  disabled: false,
  label: null,
  recordOnBlur: false,
  validation: () => true,
};

export default Input;
