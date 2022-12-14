import styled from "styled-components";
import { FlexStyle } from "../globalStyles/Flex.style";
import { Link } from "react-router-dom";

const Nav = styled(FlexStyle)`
  padding: 0.5rem 2rem;
  background: ${({ theme }) => theme.colors.navbarBgColor};
`;
export const Logo = styled(Link)`
  padding: 1rem 0;
  text-decoration: none;
  span {
    font-weight: 800;
    color: ${({ theme }) => theme.colors.mainColor};
    font-size: 2rem;
  }
`;
export const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.mainColor};
  @media (max-width: ${({ theme }) => theme.screens.lgwidth}) {
    display: inline-block;
  } ;
`;

export const Menu = styled(FlexStyle)`
  @media (max-width: ${({ theme }) => theme.screens.lgwidth}) {
    flex-direction: column;
    width: 100%;
    max-height: ${({ isOpen }) => (isOpen ? "25rem" : "0")};
    overflow: hidden;
    transition: max-height 0.5s ease-in-out;
  } ;
`;

export const MenuLink = styled(Link)`
  text-align: center;
  padding: 1rem 2rem;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.linkColor};
  transition: all 0.3s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.colors.mainColor};
    font-weight: bold;
  }
  @media (max-width: ${({ theme }) => theme.screens.lgwidth}) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.mainColor};
    width: 50%;
  }
`;

export default Nav;
