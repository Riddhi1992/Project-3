import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';

function History (props) {
    return (
        <div>
            <Container>
                <h1 className="mx-auto pt-5 pb-5 history_title text-center">Meet NICK, NICK &amp; NICK</h1>
                <Row className="border border-primary rounded shadow-lg m-3 p-4">    
                    <Col md="auto" className="w-50">
                        <img className="w-100" src="./products/Three-Nicks-cutting-the-ribbon_07.jpg" alt="Nick brothers" style={{ width: '500px', height: '700px' }} />
                    </Col>
                    <Col md="auto" className="w-50">
                        <h4 className="history w-100">Nick the Greek was born after one of three close-knit cousins, Nick (Baby Nick), traveled home from a trip to Greece and realized that there was nowhere near home where he could get quality gyros. As second-generation restaurateurs, Nick and his two cousins, also named Nick (Big Nick and Little Nick) decided to start their own modern restaurant concept. The Nick the Greek concept was born. It has grown to become an incredibly popular, multi-unit chain and a restaurant franchise opportunity primed for even more growth!</h4>
                    </Col>
                </Row>
            </Container>

            <div>
                <p className="m-5 pt-4 history_font text-center">Imagine Serving Deliciously Authentic Greek Street Food in your Nick the Greek Restaurant Franchise</p>
            </div>
            <div className="m-5 history_info">
                <p>With streamlined operations, a quality-focused menu and sleek, appealing restaurant design, you can provide consumers with the freshest and most delicious Greek street food, quickly and consistently, keeping them coming back for more:</p>
                <ul className="text-start">
                    <li><span style={{ color: "blue" }}>Authentic Greek recipes</span> – made with only the freshest ingredients and acute attention to detail</li>
                    <li><span style={{ color: "blue" }}>Refined and modern concept</span> – featuring sleek, beautiful interiors that draw in customers</li>
                    <li><span style={{ color: "blue" }}>Streamlined business model</span> – means quick-service for customers and efficient operations and low overhead for you</li>
                    <li><span style={{ color: "blue" }}>Broad appeal</span> – create the perfect place for a family dinner, lunch with friends or a business meeting</li>
                </ul>
            </div>
        </div>
    )
}

export default History;
