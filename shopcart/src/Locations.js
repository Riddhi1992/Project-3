import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

function Locations (props) {
    const {locations = []} = props

    return (
        <div>
            {locations.map(location => {
                return (
                    <div className="" key={location.id}>
                        <Container>
                            <Row className="border border-primary rounded shadow-lg m-3 p-4">
                                <Col md="auto">
                                    <iframe src={location.mapurl} style={{width:"400px", height:"300px", border: "1px solid blue"}} allowfullscreen="" loading="lazy"></iframe>            
                                </Col>
                                <Col md="auto" className="text-center">
                                    <h4 className="m-3 pb-3 text-primary fw-bold"><a className="" href={location.maplink} target="_blank" rel="noreferrer">{location.name}</a></h4>
                                    <Row className="m-2 fw-bold">
                                        <Col md="auto">Address: </Col>
                                        <Col className="text-left" md="auto">
                                            <p className="mb-0">{location.address1}</p>
                                            <p>{location.address2}</p>
                                        </Col>
                                    </Row>
                                    <Row className="m-2 fw-bold">
                                        <Col md="auto" className="mt-0">Phone: </Col>
                                        <Col className="text-left" md="auto">
                                            <p>{location.phone}</p>
                                        </Col>
                                    </Row>
                                    <Row className="m-2 fw-bold">
                                        <Col md="auto">Hours: </Col>
                                        <Col className="text-left" md="auto">
                                            <p className="mb-0">{location.hours1}</p>
                                            <p>{location.hours2}</p>
                                        </Col>
                                    </Row>
                                    <Row className="m-2 fw-bold">
                                        <Col md="auto" className="mt-0">Ratings: </Col>
                                        <Col className="text-left" md="auto">
                                            <p>{location.ratings}</p>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                )
            })}
        </div>
    )
}

export default Locations;