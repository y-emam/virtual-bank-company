import {
  MenuIcon,
  Nav,
  NavbarContainer,
  NavBtn,
  NavBtnLink,
  NavItem,
  NavLink,
  NavLogo,
  NavMenu,
} from "./NavBarElements";
import { FaBars } from "react-icons/fa";

const NavBar = ({ clickMenu }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">banko</NavLogo>

          <MenuIcon onClick={clickMenu}>
            <FaBars></FaBars>
          </MenuIcon>

          <NavMenu>
            <NavItem>
              <NavLink to="about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="discover">Discover</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="services">Services</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="signup">Sign Up</NavLink>
            </NavItem>
          </NavMenu>

          <NavBtn>
            <NavBtnLink to="signin">Sign In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default NavBar;
