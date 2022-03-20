import { Link } from "react-router-dom";
import "./footer.css";

export const FooterContainer = ({ children }) => (
  <div className="footer">{children}</div>
);

export const FooterWrap = ({ children }) => (
  <div className="footer-wrap">{children}</div>
);

export const FooterMedia = ({ children }) => (
  <div className="footer-media">{children}</div>
);

export const SocialIcons = ({ children }) => (
  <div className="social">{children}</div>
);

export const SocialLogo = ({ children }) => (
  <Link to={"#home"} className="social-logo">
    {children}
  </Link>
);

export const SocialIconLink = ({ children, ...extra }) => (
  <a className="social-link" {...extra}>
    {children}
  </a>
);
