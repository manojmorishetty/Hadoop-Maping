import React from 'react';
import {
  Navbar,
  NavbarBrand,
} from 'reactstrap';

const NavbarSW = () => {
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/home">Blackberry</NavbarBrand>
      </Navbar>
    </div>
  );
}

export default NavbarSW;