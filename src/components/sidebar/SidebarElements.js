import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const SidebarContainer = styled.div`
  position: fixed;
  z-index: 1000;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  left: 0;
  transition: all 0.2s ease-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

export const Icon = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const SidebarMenu = styled.div`
  color: white;
  flex: 0.6;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: 0.5rem 1.5rem;
  text-decoration: none;
`;

export const SidebarLink = styled(LinkS)`
  transition: all 0.2s ease-out;
  cursor: pointer;
  font-size: 24px;
  font-weight: bold;

  &:hover {
    color: #01bf71;
  }
`;

export const SidebarBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const SidebarBtn = styled(LinkR)`
  position: absolute;
  bottom: 80px;
  background: #01bf71;
  color: #010606;
  white-space: nowrap;
  border-radius: 50px;
  padding: 0.5rem 1.5rem;
  font-weight: bold;
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
    border: solid 4px #01bf71;
    color: #01bf71;
  }
`;
