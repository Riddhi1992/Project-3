import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Basket from "./Basket";
import SignIn from "./SignIn";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from 'react-bootstrap';
import Locations from "./Locations";
import History from "./History";
import MenuItems from "./MenuItems";
import Home from "./Home";
import Bookedit from "./Bookedit";
import React from "react";

function TheNav(props) {
    return (
        <Router>
                <header className="App-header ps-5 pe-5 justify-content-center">
                    <Link to="/">
                        <div className="">
                            <img className="title_logo" src="./products/IMG_9446.PNG" alt="NTG Logo" />
                            <h1 className="text-white title_01">Nick The Greek</h1>
                            <h2 className="text-white title_02">@ Newport Beach</h2>
                            <h3 className="text-white title_03">The Authenticate Greek Food</h3>
                        </div>
                    </Link>
                </header>

                <Navbar bg="light" expand="lg" className="justify-content-center sticky-top">
                    <Container>
                        <Navbar.Brand href="#home" style={{visibility: "hidden"}}>React-Bootstrap</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav" >
                            <Nav className=" navbar_font">
                                <Link to="/">
                                    <Nav.Link href="#home" className="navbar-link">Home</Nav.Link>
                                </Link>
                                <Link to="/menu">
                                    <Nav.Link href="#menu">Menu</Nav.Link>
                                </Link>
                                <Link to="/history">
                                    <Nav.Link href="#history">History</Nav.Link>
                                </Link>
                                <Link to="/reviews">
                                    <Nav.Link href="#r">Reviews</Nav.Link>
                                </Link>
                            </Nav>
                        </Navbar.Collapse>
                        <Link to="/shopCart">
                            <div className="text-primary navbar_font">
                                <FontAwesomeIcon icon={faShoppingCart}/>
                                <span className="ps-2">  {props.totalValue} items</span>
                            </div>
                        </Link>
                    </Container>
                </Navbar>  

            <Switch>
                <Route exact path="/">
                    <Locations 
                        locations={props.locationData} 
                    /> 
                </Route>
                <Route path="/menu">
                    <MenuItems 
                        products={props.prods}
                        onIncrement={props.onIncrement} 
                        onDecrement={props.onDecrement} 
                    /> 
                </Route>
                <Route path="/history">
                    <History />
                </Route>
                <Route exact path="/reviews">
                    <Home />
                </Route>
                {/* /lists/new */}
                <Route path="/lists/:id" >
                    <Bookedit />
                </Route>
                <Route path="/lists" >
                    <Bookedit />
                </Route>
                <Route path="/shopCart">
                    <Basket prods={props.prods} totalValue={props.totalValue} />
                </Route>
                <Route path="/signin">
                    <SignIn prods={props.prods} />
                </Route>
            </Switch>
        </Router>
        
    )
}

export default TheNav;