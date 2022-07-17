import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: absolute;
  width: 100%;

  top: 0;
  z-index: 10;

  @media screen and (max-width: 1250px) {
    transition: 0.8s all ease;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1500px;
`;

export const NavLogo = styled.div`
  color: white;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 50px;
  font-weight: bold;
  text-decoration: none;
`;

export const HamMenu = styled.div`
  display: none;

  @media screen and (max-width: 1250px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: white;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  padding-left: 3rem;
  text-align: center;
  margin-right: -22px;
  @media screen and (max-width: 1250px) {
    display: none;
  }
`;

export const NavItems = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkS)`
    font-size:20px;
    font-weight:300;
    color: white;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 3rem;
    height 100%;
    cursor: pointer;
    &.active {
        border-bottom: 3px solid rgba(51, 153, 255);
        transition: 0.2s ease-out;
    }
`;
