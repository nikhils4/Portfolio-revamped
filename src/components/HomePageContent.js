import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

const HomePageContent = () => {
    return (
        <Container fluid>
            <Row>
                <Col xs={1} lg={3} />
                <Col>
                    <h1 className={"homePage__topContent__heading"}>Hi, I am <span className={"homePage__topContent__name"}>Nikhil Singh</span></h1>
                    <p className={"homePage__topContent"}>A versatile Web developer with attention to better accessibility, speed and quality, who loves to articulate the "Why" and "How" behind innovative Web technologies.</p>
                </Col>
                <Col xs={1} lg={3} />
            </Row>
        </Container>
    )
}

export default HomePageContent;