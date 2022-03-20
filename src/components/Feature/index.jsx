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
      <FeatureTagline>
        Die besten Pizzen, die Sie je getestet haben.
      </FeatureTagline>
      <FeatureBtn label={"Speisekarte"} to="/menu" />
    </FeatureContainer>
  );
}

export default Feature;
