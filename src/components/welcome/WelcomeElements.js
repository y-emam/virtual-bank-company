import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";

export const WelcomeContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;
`;

export const WelcomeBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`;

export const WelcomeContent = styled.div`
  height: 100%;
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -80px;
  transition: all 0.2s ease-out;
`;

export const WelcomeH1 = styled.h1`
  color: white;
  font-weight: bold;
  font-size: 50px;
  margin: 20px 40px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 48px;
  }

  @media screen and (max-width: 650px) {
    font-size: 34px;
  }
`;

export const WelcomeP = styled.p`
  color: white;
  width: 70%;
  font-size: 30px;
  margin: 20px 40px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }

  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;

export const WelcomeBtn = styled.button`
  background: #01bf71;
  color: #010606;
  white-space: nowrap;
  border-radius: 50px;
  padding: 0.5rem 1.5rem;
  font-weight: bold;
  margin: 20px 40px;
  font-size: 18px;
  cursor: pointer;
  outline: none;
  border: none;
  transition: all 0.2s ease-out;
  text-decoration: none;
  align-self: center;
  justify-self: center;

  &:hover {
    background: #fff;
    color: #01bf71;
  }
`;

export const ArrowForward = styled(MdArrowForward)`
  font-size: 20px;
  margin-left: 8px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  font-size: 20px;
  margin-left: 8px;
`;
