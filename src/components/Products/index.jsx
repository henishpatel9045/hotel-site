import React from "react";
import { data } from "./data";
import {
  ProductsContainer,
  ProductsHeading,
  ProductWrapper,
  ProductsCard,
} from "./Products";

function Products({ heading }) {
  return (
    <ProductsContainer>
      <ProductsHeading>{heading}</ProductsHeading>
      <ProductWrapper>
        {data.map((item, index) => (
          <ProductsCard
            img={item.img}
            title={item.name}
            subtitle={item.disc}
            price={item.price}
          />
        ))}
      </ProductWrapper>
    </ProductsContainer>
  );
}

export default Products;
