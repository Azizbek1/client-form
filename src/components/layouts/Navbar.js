import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBBtn,
  MDBCollapse,
} from "mdb-react-ui-kit";
import "./layouts.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showBasic, setShowBasic] = useState(false);
  return (
    <div>
      <MDBNavbar expand="lg" light bgColor="warning">
        <MDBContainer>
          <MDBNavbarBrand href="#">Brand</MDBNavbarBrand>

          <MDBNavbarToggler
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowBasic(!showBasic)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>
          <MDBCollapse navbar show={showBasic}>
            <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
              <MDBNavbarItem>
                <Link className="nav__link" to="/">Main</Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <Link className="nav__link" to="/about">About</Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <Link className="nav__link" to="/blog">Blog</Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <Link className="nav__link" to="/contact">Contact</Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <Link className="nav__link" to="/login">Login</Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <Link className="nav__link" to="/register">Register</Link>
              </MDBNavbarItem>
            </MDBNavbarNav>

            <form className="d-flex input-group w-auto">
              <input
                type="search"
                className="form-control"
                placeholder="Type query"
                aria-label="Search"
              />
              <MDBBtn color="primary">Search</MDBBtn>
            </form>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </div>
  );
};

export default Navbar;
