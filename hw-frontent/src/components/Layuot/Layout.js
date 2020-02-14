import React, {Fragment} from 'react';
import {NavLink as RouterNavLink} from "react-router-dom";
import {Collapse, Container, Nav, Navbar, NavbarBrand, NavItem, NavLink} from "reactstrap";

const Layout = (props) => {
    return (
        <Fragment>
            <header>
                <Navbar color="dark" dark expand="md">
                    <Container>
                        <NavbarBrand tag={RouterNavLink} to={"/"}>Home</NavbarBrand>
                        <Collapse navbar>
                            <Nav className="mr-auto" navbar>
                                <NavItem>
                                    <NavLink tag={RouterNavLink} to={'/new'}>New</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </header>
            <main>
                {props.children}
            </main>
        </Fragment>
    );
};

export default Layout;