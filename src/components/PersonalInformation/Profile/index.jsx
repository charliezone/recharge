import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import ProfileForm from './ProfileForm';
import ProfileInfo from './ProfileInfo';

export default function Profile() {
    return (
        <section className="personal-information-profile">
            <Container fluid className="profile-wraper">
                <Row className="d-md-flex d-none">
                    <Col><h1>Information</h1></Col>
                </Row>
                <Row>
                    <Col md={7}>
                        <ProfileForm />
                    </Col>
                    <Col md={{ size: 5, order: 'last' }} xs={{ order: 'first' }}>
                        <ProfileInfo />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}