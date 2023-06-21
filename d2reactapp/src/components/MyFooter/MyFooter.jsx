import React, {Component} from "react";
import { Container, Row, Col } from 'react-bootstrap';

class MyFooter extends React.Component {
  render() {
    return (
      <footer className="bg-dark text-light">
        <Container>
          <Row>
            <Col md={4}>
              <h5>Sezione 1</h5>
              <ul className="list-unstyled">
                <li>Link 1</li>
                <li>Link 2</li>
                <li>Link 3</li>
              </ul>
            </Col>
            <Col md={4}>
              <h5>Sezione 2</h5>
              <ul className="list-unstyled">
                <li>Link 1</li>
                <li>Link 2</li>
                <li>Link 3</li>
              </ul>
            </Col>
            <Col md={4}>
              <h5>Sezione 3</h5>
              <ul className="list-unstyled">
                <li>Link 1</li>
                <li>Link 2</li>
                <li>Link 3</li>
              </ul>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col>
              <p className="text-center">© 2023 Il mio sito. Tutti i diritti riservati.</p>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}

export default MyFooter;
