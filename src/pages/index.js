/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { MainPageWrapper } from "@/templates/index";

export const getServerSideProps = async (props) => {
  return {
    props: {
      a: null,
    },
  };
};

const Index = (props) => {
  return <MainPageWrapper>1234</MainPageWrapper>;
};

export default Index;
