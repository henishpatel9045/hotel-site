import "./products.css";

export const ProductsContainer = ({ children }) => (
  <div className="products">{children}</div>
);

export const ProductsHeading = ({ children }) => (
  <h2 className="products-heading">{children}</h2>
);

export const ProductWrapper = ({ children }) => (
  <div className="products-wrapper">{children}</div>
);

export const ProductImage = ({ img, alt }) => (
  <img src={img} alt={alt} className="products-img" />
);

export const ProductsCardTitle = ({ children }) => (
  <h3 className="products-card-title">{children}</h3>
);

export const ProductsCardSubtitle = ({ children }) => (
  <div className="products-card-subtitle">
    <p>{children}</p>
  </div>
);

export const ProductCardPrice = ({ children }) => (
  <div className="products-card-price">
    <span>{children}</span>
  </div>
);

export const ProductsCardInfo = ({ children }) => (
  <div className="products-card-info">{children}</div>
);

export const ProductsCard = ({ children, img, title, subtitle, price }) => (
  <div className="products-card">
    <ProductImage img={img} alt={title} />
    <ProductsCardInfo>
      <ProductsCardTitle>{title}</ProductsCardTitle>
      <ProductsCardSubtitle>{subtitle}</ProductsCardSubtitle>
      <ProductCardPrice>{price}</ProductCardPrice>
    </ProductsCardInfo>
  </div>
);
