import React, { useState, useEffect } from "react";
import {
  Nav,
  NavBarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtnLink,
  NavBtn,
} from "./NavbarElement";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";

const NavBar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav scrollNav={scrollNav}>
          <NavBarContainer>
            <NavLogo to="/" onClick={toggleHome}>
              <img
                src={process.env.PUBLIC_URL + "/assets/logo1.png"}
                alt="algo"
              />
              Doble Tilde
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                  to="/about"
                  // smooth={true}
                  duration={500}
                  // spy={true}
                  exact="true"
                  offset={0}
                >
                  Nosotros
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="/products"
                  // smooth={true}
                  duration={500}
                  // spy={true}
                  exact="true"
                  offset={0}
                >
                  Productos
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="/contact"
                  // smooth={true}
                  duration={500}
                  // spy={true}
                  exact="true"
                  offset={0}
                >
                  Contacto
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="/signUp"
                  // smooth={true}
                  duration={500}
                  // spy={true}
                  exact="true"
                  offset={0}
                >
                  Regístrate
                </NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink to="/signIn"> Iniciar sesión</NavBtnLink>
            </NavBtn>
          </NavBarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default NavBar;
