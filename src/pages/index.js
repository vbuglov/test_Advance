/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { MainPageWrapper } from "@/templates/index";
import { PhonePage } from "@/pages/index";

export const getServerSideProps = async (props) => {
  return {
    props: {
      auth: null,
    },
  };
};

const Index = (props) => {
  return (
    <MainPageWrapper>
      <PhonePage />
    </MainPageWrapper>
  );
};

export default Index;
