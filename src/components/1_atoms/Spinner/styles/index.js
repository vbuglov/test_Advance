/* eslint-disable import/prefer-default-export */
import styled from "styled-components";
import { lighten } from "polished";

export const Wrapper = styled.div`
  @media (prefers-reduced-motion: no-preference) {
    i {
      animation: my-spin infinite 2s linear;
    }
  }
  margin: 0 !important;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 3%;
  & i {
    font-size: 72px;
    pointer-events: none;
  }
  & * {
    text-align: center;
  }
  @keyframes my-spin {
    0% {
      transform: rotate(0deg);
      color: ${lighten(0.2, "blue")};
    }
    50% {
      color: ${lighten(0.3, "blue")};
    }
    100% {
      transform: rotate(360deg);
      color: ${lighten(0.2, "blue")};
    }
  }
`;
