
import {Navbar, NavbarBrand,  Nav, Button, DropdownMenu, DropdownItem , UncontrolledDropdown, DropdownToggle, Badge } from 'reactstrap'; 
    import { CupStraw , Cart, Magic} from 'react-bootstrap-icons';
    import { Component } from 'react';
    
    
    export default class NavigationBar extends Component{
    
        constructor(props){
            super(props); 
            this.brand = "We love beears."; 
        }
         
    
        render(){
            return(
                <Navbar color="light">
                    <NavbarBrand href="/">{this.brand}  <CupStraw />  <Magic /> 
                                    
                    </NavbarBrand>
                    <Nav>
                        <UncontrolledDropdown  nav inNavbar>
                            <DropdownToggle nav caret> Options </DropdownToggle>
                            <DropdownMenu right>
                            <DropdownItem>Option 1</DropdownItem>
                            <DropdownItem>Option 2</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>Reset</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <Button color="primary" outline>
                            <Cart></Cart>
                            <Badge>
                                {this.props.cartItems}
                            </Badge>                            
                        </Button>
                    
                        <Button color="primary" outline>
                            <Magic></Magic>
                            <Badge>
                            {this.props.cartItems}
                            </Badge>
                        </Button>
                    </Nav>
                </Navbar>
            )
        }
    }
