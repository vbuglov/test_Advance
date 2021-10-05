import React from "react";
import { EmptyDataWrapper, LoadingWrapper } from "@/wrappers/index";
import { useFetchData } from "../hooks/index";

const initState = (WrappedComponent) => {
  const ModifiedComponent = (ownProps) => {
    const { list, loading } = useFetchData();

    console.log(list);

    const newProps = {
      list,
    };

    return (
      <LoadingWrapper isLoading={loading}>
        <WrappedComponent {...ownProps} {...newProps} />
      </LoadingWrapper>
    );
  };

  return ModifiedComponent;
};

export default initState;
