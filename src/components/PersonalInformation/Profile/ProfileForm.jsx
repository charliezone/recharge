import React from "react";
import { Form, Button } from 'react-bootstrap';

export default function ProfileForm() {
    return (
        <Form className="profile-form">
            <Form.Group>
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" id="name" />
            </Form.Group>
            <Form.Group>
                <Form.Label>Mobile Number (Not Required)</Form.Label>
                <Form.Control type="tel" id="phone" />
            </Form.Group>
            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" id="email" />
            </Form.Group>
            <Form.Group>
                <Form.Label>Birthday</Form.Label>
                <Form.Control type="date" id="birthday" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Update
            </Button>
        </Form>
    )
}