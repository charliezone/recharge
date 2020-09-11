import React from 'react';
import {
  BrowserRouter as Router, 
  Switch,
  Route
} from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';

import PersonalInformation from './pages/Personalnformation';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Container>
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
