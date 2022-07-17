import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavContainer,
  NavLogo,
  HamMenu,
  NavMenu,
  NavItems,
  NavLinks,
} from "./NavbarElements";

import navbarM from "../../Logo/logo-w.png";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavContainer>
          <NavLogo>
            <img
              src={navbarM}
              alt="M."
              style={{ height: "50px", marginTop: "5px" }}
            />
          </NavLogo>
          <HamMenu onClick={toggle}>
            <FaBars />
          </HamMenu>
          <NavMenu>
            <NavItems>
              <NavLinks to="about">About</NavLinks>
            </NavItems>
            <NavItems>
              <NavLinks to="skills">Skills</NavLinks>
            </NavItems>
            <NavItems>
              <NavLinks to="projects">Projects</NavLinks>
            </NavItems>
            <NavItems>
              <NavLinks to="contact">Contact</NavLinks>
            </NavItems>
          </NavMenu>
        </NavContainer>
      </Nav>
    </>
  );
};

export default Navbar;
