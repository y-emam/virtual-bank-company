import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";

export const ButtonS = styled(LinkS)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "#01bf71" : "#010606")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: #010606;
  font-size: ${({ font }) => (font ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-out;

  &:hover {
    background: ${({ dark }) => (dark ? "#010606" : "#fff")};
    color: ${({ dark }) => (dark ? "#fff" : "#010606")};
  }
`;

export const ButtonR = styled(LinkR)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "#01bf71" : "#010606")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: #010606;
  font-size: ${({ font }) => (font ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  text-decoration: none;

  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-out;

  &:hover {
    background: ${({ dark }) => (dark ? "#010606" : "#fff")};
    color: ${({ dark }) => (dark ? "#fff" : "#010606")};
  }
`;
