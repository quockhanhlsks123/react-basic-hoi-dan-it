import react from 'react';
import './Nav.scss';
import {
    Link, NavLink
} from "react-router-dom";
import { withRouter } from "react-router";
class Nav extends react.Component {



    render() {
        return (
            <>
                <div className="topnav">
                    <NavLink to="/" activeClassName="active" exact>Home</NavLink>
                    <NavLink to="/todo" activeClassName="active" >Todo</NavLink>
                    <NavLink to="/about" activeClassName="active" >About</NavLink>
                    <NavLink to="/user" activeClassName="active">User</NavLink>
                </div>
            </>
        )
    }
}

export default withRouter(Nav);