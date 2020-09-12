import React from 'react';
import {
  BrowserRouter as Router, 
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';

import PersonalInformation from './pages/PersonalInformation';
import './assets/scss/App.scss';

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col md={2}>
            <aside className="aside"></aside>
          </Col>
          <Col md={8}>
            <div className="main-content">
              <Router>
                <Switch>
                <Route exact path="/">
                    <h1>Home</h1>
                    <Link to="/personal-information/profile">Ver personal information</Link>
                  </Route>
                  <Route path="/personal-information">
                    <PersonalInformation />
                  </Route>
                </Switch>
              </Router>
            </div>
          </Col>
          <Col md={2}>
            <aside className="aside"></aside>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
