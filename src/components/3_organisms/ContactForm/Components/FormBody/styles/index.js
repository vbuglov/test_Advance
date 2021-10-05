import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  & .row {
    margin-bottom: 20px;
  }
  & .row:last-child {
    margin-bottom: 0;
  }
`;

export const Row = styled.div`
  display: flex;
  & .row_item {
    margin-right: 20px;
  }
  & .row_item:last-child {
    margin-right: 0;
  }
`;
