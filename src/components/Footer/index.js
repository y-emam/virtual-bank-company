import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import {
  FooterContainer,
  FooterGroup,
  FooterLink,
  FooterLinkTitle,
  FooterLogo,
  FooterSocialLogo,
  FooterSocialLogoWrap,
  FooterSocialWrap,
  FooterWebsiteRights,
  FooterWrap,
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterGroup>
          <FooterLinkTitle>About Us</FooterLinkTitle>
          <FooterLink to="/signin">How it works</FooterLink>
          <FooterLink to="/signin">Devloper Team</FooterLink>
          <FooterLink to="/signin">Security</FooterLink>
          <FooterLink to="/signin">Terms of Services</FooterLink>
        </FooterGroup>
        <FooterGroup>
          <FooterLinkTitle>Get Started</FooterLinkTitle>
          <FooterLink to="/signin">Sign in</FooterLink>
          <FooterLink to="/signin">Register</FooterLink>
          <FooterLink to="/signin">Log out</FooterLink>
          <FooterLink to="/signin">Pricings</FooterLink>
        </FooterGroup>
        <FooterGroup>
          <FooterLinkTitle>Services</FooterLinkTitle>
          <FooterLink to="/signin">Credit Cards</FooterLink>
          <FooterLink to="/signin">Manging accounts</FooterLink>
          <FooterLink to="/signin">Global Access</FooterLink>
          <FooterLink to="/signin">Discounts</FooterLink>
        </FooterGroup>
        <FooterGroup>
          <FooterLinkTitle>Contact Us</FooterLinkTitle>
          <FooterLink to="/signin">Facebook</FooterLink>
          <FooterLink to="/signin">Youtube</FooterLink>
          <FooterLink to="/signin">Instagram</FooterLink>
          <FooterLink to="/signin">Twitter</FooterLink>
          <FooterLink to="/signin">Linkedin</FooterLink>
        </FooterGroup>
      </FooterWrap>

      <FooterSocialWrap>
        <FooterLogo>banko</FooterLogo>
        <FooterWebsiteRights>
          banko Ⓒ {new Date().getFullYear()} All rights reserved.
        </FooterWebsiteRights>

        <FooterSocialLogoWrap>
          <FooterSocialLogo to="/" target="_blank" arial-label="Facebook">
            <FaFacebook />
          </FooterSocialLogo>
          <FooterSocialLogo to="/" target="_blank" arial-label="Youtube">
            <FaYoutube />
          </FooterSocialLogo>
          <FooterSocialLogo to="/" target="_blank" arial-label="Instagram">
            <FaInstagram />
          </FooterSocialLogo>
          <FooterSocialLogo to="/" target="_blank" arial-label="Twitter">
            <FaTwitter />
          </FooterSocialLogo>
          <FooterSocialLogo to="/" target="_blank" arial-label="Linkedin">
            <FaLinkedin />
          </FooterSocialLogo>
        </FooterSocialLogoWrap>
      </FooterSocialWrap>
    </FooterContainer>
  );
};

export default Footer;
