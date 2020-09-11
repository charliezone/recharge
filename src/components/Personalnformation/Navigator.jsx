import React from 'react';
import { Link, useRouteMatch } from "react-router-dom";
import { Nav } from 'react-bootstrap';

export default function Navigator() {
    const { url } = useRouteMatch();
    return (
        <Nav variant="pills" defaultActiveKey="/home" className="personal-information-nav">
            <Nav.Item>
                <Link to={`${url}/profile`} className="nav-link">Profile</Link>
            </Nav.Item>
            <Nav.Item>
                <Link to={`${url}/change-password`} className="nav-link">Change Password</Link>
            </Nav.Item>
        </Nav>
    )
}