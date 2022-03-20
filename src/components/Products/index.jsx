import React from "react";
import {
  ProductsContainer,
  ProductsHeading,
  ProductWrapper,
  ProductsCard,
} from "./Products";

function Products({ heading, data }) {
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
