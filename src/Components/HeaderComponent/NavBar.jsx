import React, {Component} from 'react';
//import { Link } from 'react-router-dom';
import Logo from './Logo';
import {Nav, Navbar, NavDropdown} from 'react-bootstrap';

class Navigation extends Component {

  constructor(props){
    super(props);
    this.state={
      clicked_Value:""
    };
    this.updateState = this.updateState.bind(this);
  }
  updateState(event) {
    const Link_id = event.target.id;
    //selecting parent element
    var selectedList = document.getElementById(Link_id).parentElement;
    //All list of navi bar
    var all_List = document.getElementById("main-nav-list").childNodes;

    //Update clicked_Value and id of selectedList
    this.setState({clicked_Value: "" + Link_id}, ()=>{
      
      //resetting list id to "not_selected"
      for(var i=0; i < all_List.length; i++){
        all_List[i].id="not_selected";
      }
      //Updating selected_List id
      switch(this.state.clicked_Value){
        case "Home": 
          selectedList.id = "selected";
          break;
        case "Project": 
          selectedList.id = "selected";
          break;
        case "Resume": 
          selectedList.id = "selected";
          break;
        case "Contact": 
          selectedList.id = "selected";
          break;
        default: 
          selectedList.id="selected";
      }
      //<BodyPage data = {this.state}/>
     // helper(this.state.clicked_Value);
    });
  }
/*
  assign(){
    console.log("hello2");

    document.addEventListener('submit', fadeOut()); 
    onLoad= {this.assign} 
  }
*/
  render() {
    return (
      <header>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">      
          <Logo></Logo>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Resume">Resume</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </header>
      )
    }
}
export default Navigation;
