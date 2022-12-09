// import logo from './logo.svg';
import './App.css';

import {Navbar, NavbarBrand, NavItem, Nav, NavLink, NavbarText, DropdownMenu, DropdownItem, UncontrolledDropdown, DropdownToggle, } from 'reactstrap'

// const nombre = "Manzano";
const brand = "We love Beer";

function App() {
  return (

    <div className='App'>
        <Navbar>
        <NavbarBrand href="/">{brand} </NavbarBrand>        
          <Nav className="me-auto" >
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                GitHub
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
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