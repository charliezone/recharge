import React from 'react';
import {
    Switch,
    Route,
    useRouteMatch
} from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';

import Navigator from '../../components/Personalnformation/Navigator';
import Profile from '../../components/Personalnformation/Profile';
import ChangePassword from '../../components/Personalnformation/ChangePassword';

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
                            <Route exact path={path}>
                                <Profile />
                            </Route>
                            <Route path={`${path}/profile`}>
                                <Profile />
                            </Route>
                            <Route path={`${path}/change-password`}>
                                <ChangePassword />
                            </Route>
                        </Switch>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}