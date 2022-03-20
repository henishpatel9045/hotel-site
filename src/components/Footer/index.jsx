import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaWhatsapp,
  FaMailBulk,
} from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  FooterMedia,
  FooterMediaWrap,
  SocialIcons,
  SocialLogo,
  SocialIconLink,
} from "./Footer";

function Footer() {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterMedia>
          <SocialLogo>Pizza</SocialLogo>
          <SocialIcons>
            <SocialIconLink
              href="/facebook"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink
              href="/Instagram"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink
              href="/Twitter"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink
              href="/Youtube"
              aria-label="YouTube"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink
              href="/Whatsapp"
              aria-label="Whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </SocialIconLink>
            <SocialIconLink
              href="/Gmail"
              aria-label="Gmail"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaMailBulk />
            </SocialIconLink>
          </SocialIcons>
        </FooterMedia>
      </FooterWrap>
    </FooterContainer>
  );
}

export default Footer;
