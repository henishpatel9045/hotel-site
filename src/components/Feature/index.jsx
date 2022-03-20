import React from "react";
import {
  FeatureContainer,
  FeatureHeading,
  FeatureTagline,
  FeatureBtn,
} from "./Feature";

function Feature() {
  return (
    <FeatureContainer>
      <FeatureHeading>Pizzeria Da Angelo Special</FeatureHeading>
      <FeatureTagline>Best pizzas you ever tested.</FeatureTagline>
      <FeatureBtn label={"Full Menu"} to="/menu" />
    </FeatureContainer>
  );
}

export default Feature;
