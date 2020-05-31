import React, { Component } from 'react';
import { Container, Col, Row } from "reactstrap";

class Home extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col xs="6">
                        <h4>GIVE ESSENTIAL IS</h4>
                        <h1>Helping essential workers get the items they need.</h1>
                    </Col>
                    <Col xs="6">.col-6</Col>
                </Row>
            </Container>
        );
    }
}

export default Home;