import logo from './logo.svg';
import './App.css';

import {Navbar, NavbarBrand, NavItem, Nav, Navlink, NavbarText, DropdownMenu, DropdownItem, UncontrolledDropdown, DropdownToggle  } from 'reactstrap'

const nombre = "Manzano";
const brand = "We love Beer";

function App() {
  return (

    <div className='App'>
      <Navbar>
        <NavbarBrand href="/" > {brand} </NavbarBrand>
        <Nav className="me-auto" >
        <NavItem>
          <Navlink href="/components/">Components</Navlink>
        </NavItem>
        <NavItem>
          <Navlink href="https://github.com/reactstrap/reactstrap">
            GitHub
          </Navlink>
        </NavItem>
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            Options
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>Options 1</DropdownItem>
            <DropdownItem>Options 2</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Reset</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
        </Nav>
        <NavbarText>Simple Text</NavbarText>
      </Navbar>

    </div>

   
  );
}

export default App;