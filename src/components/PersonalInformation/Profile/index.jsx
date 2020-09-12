import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import ProfileForm from './ProfileForm';
import ProfileInfo from './ProfileInfo';

export default function Profile() {
    return (
        <section className="personal-information-profile">
            <Container fluid>
                <Row>
                    <Col><h1>Information</h1></Col>
                </Row>
                <Row>
                    <Col md={7}>
                        <ProfileForm />
                    </Col>
                    <Col md={5} xs={{ order: 'first' }}>
                        <ProfileInfo />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}