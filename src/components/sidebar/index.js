import React from "react";
import {
  CloseIcon,
  Icon,
  SidebarBtn,
  SidebarBtnWrapper,
  SidebarContainer,
  SidebarLink,
  SidebarMenu,
  SidebarWrapper,
} from "./SidebarElements";

const SideBar = ({ isOpen, clickMenu }) => {
  return (
    <>
      <SidebarContainer isOpen={isOpen}>
        <Icon>
          <CloseIcon onClick={clickMenu}></CloseIcon>
        </Icon>

        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to="about" onClick={clickMenu}>
              About
            </SidebarLink>
            <SidebarLink to="discover" onClick={clickMenu}>
              Discover
            </SidebarLink>
            <SidebarLink to="services" onClick={clickMenu}>
              Services
            </SidebarLink>
            <SidebarLink to="signup" onClick={clickMenu}>
              Sign Up
            </SidebarLink>
          </SidebarMenu>

          <SidebarBtnWrapper>
            <SidebarBtn to="signin" onClick={clickMenu}>
              Sign In
            </SidebarBtn>
          </SidebarBtnWrapper>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
};

export default SideBar;
