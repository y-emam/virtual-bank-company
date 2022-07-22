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
import { Link } from "react-router-dom";

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
              <NavLink
                smooth={true}
                exact="true"
                spy={true}
                duration={300}
                to="about"
              >
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                smooth={true}
                exact="true"
                spy={true}
                duration={300}
                to="discover"
              >
                Discover
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                smooth={true}
                exact="true"
                spy={true}
                duration={300}
                to="services"
              >
                Services
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                smooth={true}
                exact="true"
                spy={true}
                duration={300}
                to="/signup"
              >
                Sign Up
              </NavLink>
            </NavItem>
          </NavMenu>

          <NavBtn>
            <Link to="/signin">
              <NavBtnLink>Sign In</NavBtnLink>
            </Link>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default NavBar;
