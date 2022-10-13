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
import { isAuthenticated, signout } from "../products/ApiCore";

const isActive = (history, path) => {
  if (history.location.pathname === true) {
    return { color: "#ff9900" };
  } else {
    return { color: "#ffffff" };
  }
};

const NavBar = ({ toggle, history }) => {
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
              <NavItem></NavItem>
            </NavMenu>
            <NavBtn>
              {!isAuthenticated() && (
                <>
                  <NavBtnLink to="/signin"> Iniciar sesión</NavBtnLink>
                </>
              )}
              {isAuthenticated() && (
                <>
                  <NavBtnLink
                    to="/"
                    onClick={() =>
                      signout(() => {
                        history.push("/");
                      })
                    }
                  >
                    Cerrar sesión
                  </NavBtnLink>
                </>
              )}
            </NavBtn>
          </NavBarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default NavBar;
