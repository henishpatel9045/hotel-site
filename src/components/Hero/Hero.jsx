import "./hero.css";

export const HeroContainer = ({children}) => <div className="hero">{children}</div>

export const HeroContent = ({children}) => <div className="hero-content">{children}</div>

export const HeroItems = ({children}) => <div className="hero-items">{children}</div>

export const HeroH1 = ({children}) => <div className="hero-h1">{children}</div>

export const HeroP = ({children}) => <div className="hero-p">{children}</div>

export const HeroBtn = ({children, onPress}) => <div className="hero-btn" onClick={onPress}>{children}</div>