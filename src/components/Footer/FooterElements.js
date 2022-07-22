import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.div`
  background: #101522;
`;

export const FooterWrap = styled.div`
  padding: 48px 24px;
  display: grid;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1100px;
  margin: 0 auto;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const FooterGroup = styled.div`
  height: 120px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const FooterLinkTitle = styled.h1`
  color: #fff;
  font-size: 1.2rem;
  font-weight: bold;
`;

export const FooterLink = styled(Link)`
  cursor: pointer;
  color: #fff;
  font-sie: 0.8rem;
  text-decoration: none;
  transition: all 0.2s ease-out;

  &:hover {
    color: #01bf71;
  }
`;

export const FooterSocialWrap = styled.div`
  height: 120px;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FooterLogo = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
`;

export const FooterWebsiteRights = styled.p`
  color: white;
  font-size: 0.8rem;
`;

export const FooterSocialLogoWrap = styled.div`
  width: 50%;
  max-width: 300px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FooterSocialLogo = styled(Link)`
  margin-top: 14px;
  text-decoration: none;
  color: #fff;
  font-size: 24px;
  transition: all 0.2s ease-out;

  &:hover {
    color: #01bf71;
  }
`;
