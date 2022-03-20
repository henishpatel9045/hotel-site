import { Link } from "react-router-dom";
import "./feature.css";

export const FeatureContainer = ({ children }) => (
  <div className="feature">{children}</div>
);

export const FeatureHeading = ({ children }) => (
  <h2 className="feature-heading">{children}</h2>
);

export const FeatureTagline = ({ children }) => (
  <h3 className="feature-tagline">{children}</h3>
);

export const FeatureBtn = ({ label, to, ...extra }) => (
  <Link className="feature-btn" to={to} {...extra}>
    {label}
  </Link>
);
