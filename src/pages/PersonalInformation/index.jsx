import React from 'react';
import {
    Switch,
    Route,
    useRouteMatch
} from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';

import Navigator from '../../components/PersonalInformation/Navigator/';
import Profile from '../../components/PersonalInformation/Profile/';
import ChangePassword from '../../components/PersonalInformation/ChangePassword/';
import Notifications from '../../components/PersonalInformation/Notifications';
import MyCards from '../../components/PersonalInformation/MyCards';

export default function PersonalInformation() {
    const { path } = useRouteMatch();

    return (
        <div className="personal-information-page">
            <Container>
                <Row>
                    <Col>
                        <Navigator />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Switch>
                            <Route path={`${path}/profile`}>
                                <Profile />
                            </Route>
                            <Route path={`${path}/change-password`}>
                                <ChangePassword />
                            </Route>
                            <Route path={`${path}/notifications`}>
                                <Notifications />
                            </Route>
                            <Route path={`${path}/my-cards`}>
                                <MyCards />
                            </Route>
                        </Switch>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}