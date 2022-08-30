import React from "react";
import {
  FooterContainer,
  FooterWrap,
  FooterLinkContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRight,
  SocialIcon,
  SocialIconLink,
} from "./FooterElement";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { animateScroll as scroll } from "react-scroll";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <FooterContainer>
        <FooterWrap>
          <FooterLinkContainer>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle> Nosotros </FooterLinkTitle>
                <FooterLink to="/about">Historia </FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle> Productos </FooterLinkTitle>
                <FooterLink to="/products">Sublimaciones</FooterLink>
                <FooterLink to="/products">Estampados</FooterLink>
                <FooterLink to="/products">Ropa</FooterLink>
                <FooterLink to="/products">Utensillos</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle> Contacto </FooterLinkTitle>
                <FooterLink to="/contact">Contacto</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
          </FooterLinkContainer>
          <SocialMedia>
            <SocialMediaWrap>
              <SocialLogo to="/" onClick={toggleHome}>
                Doble Tilde
              </SocialLogo>
              <WebsiteRight>
                Doble Tilde © {new Date().getFullYear()} All rigths reserved.
              </WebsiteRight>
              <SocialIcon>
                <SocialIconLink
                  href="https://www.instagram.com/dobletilde_ok/"
                  target="_blank"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </SocialIconLink>
                <SocialIconLink
                  href="https://wa.me/3512492038"
                  target="_blank"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp />
                </SocialIconLink>
                <SocialIconLink
                  href="https://mail.google.com/"
                  target="_blank"
                  aria-label="Gmail"
                >
                  <SiGmail />
                </SocialIconLink>
              </SocialIcon>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrap>
      </FooterContainer>
    </>
  );
};

export default Footer;
