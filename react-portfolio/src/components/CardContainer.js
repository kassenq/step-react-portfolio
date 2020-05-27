import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { ExpCard } from "./ExpCard";

export const CardContainer = () => {
    return (
        <div>
            <Container class="card-container">
                <Row className="grid-row">
                    <Col lg={50}>
                        <Row className="grid-row">
                            <Col md={5}>
                                <ExpCard
                                    className="company"
                                    title="Google"
                                    role="STEP Intern"
                                    link="https://buildyourfuture.withgoogle.com/programs/step/" 
                                    imgsrc="./assets/googlehq.jpg"
                                    description="Building cool things!"
                                    />
                            </Col>
                            <Col md={5}>
                            <ExpCard
                                    className="company"
                                    title="Pixvana"
                                    role="Software Engineering Intern"
                                    link="https://pixvana.com/"
                                    description="Building cool things!"
                                    />
                                    
                            </Col>
                            <Col md={5}>
                            <ExpCard
                                    className="org"
                                    title="Peerlift"
                                    role="Front End Developer"
                                    link="https://peerlift.org"
                                    imgsrc="./assets/peerlift.png"
                                    description="Building cool things!"
                                    />
                            </Col>
                            <Col md={5}>
                                <ExpCard
                                        className="org"
                                        title="Duke Women in Technology"
                                        role="Co-President"
                                        link="https://www.dukewit.herokuapp.com" />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default CardContainer;