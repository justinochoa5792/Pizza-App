import React from "react";
import { FeatureContainer, FeatureButton } from "./FeatureElements";

const index = () => {
  return (
    <FeatureContainer>
      <h1>Pizza of the Day</h1>
      <p>Truffle Alfredo sauce topped with 24 carat gold dust.</p>
      <FeatureButton>Order Now</FeatureButton>
    </FeatureContainer>
  );
};

export default index;