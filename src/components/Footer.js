import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

class Footer extends React.Component {
    render() {
        return (
            <Container fluid>
                <Row xs={1}>
                    <Col className="footer">&copy; 2020 Nikhil Singh</Col>
                </Row>
            </Container>
        )
    }
}

export default Footer;