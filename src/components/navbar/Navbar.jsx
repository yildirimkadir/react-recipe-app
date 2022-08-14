import NavbarStyle from "./Navbar.style";
import Nav, { Logo, Menu, MenuLink, Hamburger } from "./Navbar.style";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <Nav justify="space-between" wrap="wrap">
      <Logo to="/">
        <span> Recipe App</span>
      </Logo>
      <Hamburger>
        <GiHamburgerMenu />
      </Hamburger>
      <Menu>
        <MenuLink to="/">Home</MenuLink>
        <MenuLink to="/about">About</MenuLink>
        <MenuLink to="/register">Register</MenuLink>
        <MenuLink to="/login">Logout</MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;
