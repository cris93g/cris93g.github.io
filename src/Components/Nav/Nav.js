import React, { Component } from 'react';
import {StyledNav,StyledLeftNav,StyledRightNav} from "./Nav.styled"
import {Link} from "react-router-dom";

class Nav extends Component {
	render() {
		return <div>
        <StyledNav>
            <StyledLeftNav>
                <div>Logo</div>
            </StyledLeftNav>
            <StyledRightNav>
                <Link to="/">    <p>Home</p></Link>
                <Link to="/about">   <p>about</p></Link>
                <Link to="projects">  <p>projects</p></Link> 
            </StyledRightNav>
        </StyledNav>
        </div>;
	}
}

export default Nav;
