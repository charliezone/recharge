import React from 'react';
import { NavLink, useRouteMatch } from "react-router-dom";
import { Nav } from 'react-bootstrap';

import './navigator.scss';

export default function Navigator() {
    const { url } = useRouteMatch();
    return (
        <Nav variant="pills" defaultActiveKey="/home" className="personal-information-nav">
            <Nav.Item>
                <NavLink to={`${url}/profile`} className="nav-link">Profile</NavLink>
            </Nav.Item>
            <Nav.Item>
                <NavLink to={`${url}/change-password`} className="nav-link">Change Password</NavLink>
            </Nav.Item>
        </Nav>
    )
}