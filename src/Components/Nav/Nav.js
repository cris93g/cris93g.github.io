import React, { Component } from 'react';
import {StyledNav,StyledLeftNav,StyledRightNav} from "./Nav.styled"
class Nav extends Component {
	render() {
		return <div>
        <StyledNav>
            <StyledLeftNav>
                <div>Logo</div>
            </StyledLeftNav>
            <StyledRightNav>
                    <p>Home</p>
                    <p>about</p>
                    <p>projects</p>
            </StyledRightNav>
        </StyledNav>
        </div>;
	}
}

export default Nav;
