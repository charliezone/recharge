import React from 'react';
import { NavLink, useRouteMatch } from "react-router-dom";
import { Nav } from 'react-bootstrap';

import { ReactComponent as ProfileIcon } from '../../../assets/img/profile-icon.svg';
import { ReactComponent as ChangePasswordIcon } from '../../../assets/img/change-password-icon.svg';
import { ReactComponent as NotificationsIcon } from '../../../assets/img/notifications-icon.svg';
import { ReactComponent as MyCardsIcon } from '../../../assets/img/my-cards-icon.svg';

export default function Navigator() {
    const { url } = useRouteMatch();
    return (
        <Nav variant="pills" defaultActiveKey="/home" className="personal-information-nav d-flex justify-content-between">
            <Nav.Item>
                <NavLink to={`${url}/profile`} className="nav-link"><ProfileIcon className="nav-link-icon" /><span>Profile</span></NavLink>
            </Nav.Item>
            <Nav.Item>
                <NavLink to={`${url}/change-password`} className="nav-link">< ChangePasswordIcon className="nav-link-icon" /><span>Change Password</span></NavLink>
            </Nav.Item>
            <Nav.Item>
                <NavLink to={`${url}/notifications`} className="nav-link">< NotificationsIcon className="nav-link-icon" /><span>Notifications</span></NavLink>
            </Nav.Item>
            <Nav.Item>
                <NavLink to={`${url}/my-cards`} className="nav-link">< MyCardsIcon className="nav-link-icon" /><span>My Cards</span></NavLink>
            </Nav.Item>
        </Nav>
    )
}