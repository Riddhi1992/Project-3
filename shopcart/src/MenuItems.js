import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlusCircle, faMinusCircle} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import "./App.css";

function MenuItems(props) {
    const {products = []} = props;
    const {pita, plate, bowl, salad} = products.reduce((acc, curr) => {
        if(acc.hasOwnProperty(curr.type)) {
            const temp = acc[curr.type]
            temp.push(curr)
            acc[curr.type] = temp
        } else {
            acc[curr.type] = [curr]
        }
    return acc
    }, {})
    console.log({pita, plate, bowl, salad})

    return (
        <div>
            <div className="mt-5">
                <Container className="card mx-auto">
                    <h2 className="pt-5 ps-5">Pitas</h2>
                    <Row className="m-3 p-4">
                        <Col md="auto" className="w-50">
                            {pita.map(pita => {
                                return (
                                    <div className="" key={pita.id}>
                                        <h4 className="text-start mt-4 ms-5 me-4 mb-2">{pita.title} <span className="ms-5" style={{color: "blue"}}> ${pita.price}</span></h4>
                                        <p>{pita.desc}</p>
                                        <div className="row p-2 align-middle">
                                            <p className="col-sm-6 col-md-8 align-self-center text-start">
                                                <button className="btn btn-secondary mx-1 ps-3" onClick={() => props.onIncrement(pita)}>
                                                    <FontAwesomeIcon className="me-1" icon={faPlusCircle} />
                                                </button>
                                                <button className="btn btn-secondary mx-1 ps-3" onClick={() => props.onDecrement(pita)}> 
                                                    <FontAwesomeIcon className="me-1" icon={faMinusCircle} />
                                                </button>
                                                <span className="p-3">{pita.value}</span>
                                                quantity
                                            </p>
                                        </div>
                                    </div>
                                )
                            })}
                        </Col>
                        <Col md="auto" className="w-50 MenuItems_img">
                            <img className="w-100 pb-3" src="./products/Pitas/NickTheGreek-7-14-2018-31.jpg" alt="Pita" />
                            <img className="w-100 pb-3" src="./products/Pitas/NickTheGreek-7.jpg" alt="Pita" />
                            <img className="w-100 pb-3" src="./products/Pitas/NickTheGreek-9.jpg" alt="Pita" />
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="mt-5">
                <Container className="card mx-auto">
                    <h2 className="pt-5 ps-5">Plates</h2>
                    <Row className="m-3 p-4">
                        <Col md="auto" className="w-50 MenuItems_img">
                            <Carousel className="mt-5">
                                <Carousel.Item>
                                    <img className="d-block w-100" src="./products/Plates/NickTheGreek-_76.jpg" alt="Plate01"/>
                                    <Carousel.Caption></Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src="./products/Bowls/NickTheGreek-14.jpg"
                                    alt="Second slide"
                                    />
                                    <Carousel.Caption></Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                        <Col md="auto" className="w-50">
                            {plate.map(plate => {
                                return (
                                    <div className="" key={plate.id}>
                                        <h4 className="text-start mt-4 ms-5 me-4 mb-2">{plate.title} <span className="ms-5" style={{color: "blue"}}> ${plate.price}</span></h4>
                                        <p>{plate.desc}</p>
                                        <div className="row p-2 align-middle">
                                            <p className="col-sm-6 col-md-8 align-self-center text-start">
                                                <button className="btn btn-secondary mx-1 ps-3" onClick={() => props.onIncrement(plate)}>
                                                    <FontAwesomeIcon className="me-1" icon={faPlusCircle} />
                                                </button>
                                                <button className="btn btn-secondary mx-1 ps-3" onClick={() => props.onDecrement(plate)}> 
                                                    <FontAwesomeIcon className="me-1" icon={faMinusCircle} />
                                                </button>
                                                <span className="p-3">{plate.value}</span>
                                                quantity
                                            </p>
                                        </div>
                                    </div>
                                )
                            })}
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="mt-5">
                <Container className="card mx-auto">
                    <h2 className="pt-5 ps-5">Bowls</h2>
                    <Row className="m-3 p-4">
                        <Col md="auto" className="w-50">
                            {bowl.map(bowl => {
                                return (
                                    <div className="" key={bowl.id}>
                                        <h4 className="text-start mt-4 ms-5 me-4 mb-2">{bowl.title} <span className="ms-5" style={{color: "blue"}}> ${bowl.price}</span></h4>
                                        <p>{bowl.desc}</p>
                                        <ul>
                                            <li>Beef/Lamb</li>
                                            <li>Chicken Gyro</li>
                                            <li>Pork Belly Gyro</li>
                                            <li>Falafel</li>
                                            <li>Beefteki</li>
                                        </ul>
                                        <div className="row p-2 align-middle">
                                            <p className="col-sm-6 col-md-8 align-self-center text-start">
                                                <button className="btn btn-secondary mx-1 ps-3" onClick={() => props.onIncrement(bowl)}>
                                                    <FontAwesomeIcon className="me-1" icon={faPlusCircle} />
                                                </button>
                                                <button className="btn btn-secondary mx-1 ps-3" onClick={() => props.onDecrement(bowl)}> 
                                                    <FontAwesomeIcon className="me-1" icon={faMinusCircle} />
                                                </button>
                                                <span className="p-3">{bowl.value}</span>
                                                quantity
                                            </p>
                                        </div>
                                    </div>
                                )
                            })}
                        </Col>
                        <Col md="auto" className="w-50 MenuItems_img">
                            <Carousel>
                                <Carousel.Item>
                                    <img className="d-block w-100" src="./products/Bowls/NickTheGreek-5.jpg" alt="Bowl01"/>
                                    <Carousel.Caption></Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className="d-block w-100" src="./products/Bowls/NickTheGreek-9.jpg" alt="Bowl02"/>
                                    <Carousel.Caption></Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className="d-block w-100" src="./products/Bowls/NickTheGreek-10.jpg" alt="Bowl03"/>
                                    <Carousel.Caption></Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src="./products/Bowls/NickTheGreek-14.jpg"
                                    alt="Bowl04"
                                    />
                                    <Carousel.Caption></Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="mt-5">
                <Container className="card mx-auto">
                    <h2 className="pt-5 ps-5">Soup &amp; Salads</h2>
                    <Row className="m-3 p-4">
                        <Col md="auto" className="w-50 MenuItems_img">
                            <Carousel className="mt-5">
                                <Carousel.Item>
                                    <img className="d-block w-100" src="./products/Soup_Salads/7-26-2018-NickTheGreek-25.jpg" alt="Plate01"/>
                                    <Carousel.Caption></Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src="./products/Soup_Salads/NickThe Greek-25.jpg"
                                    alt="Second slide"
                                    />
                                    <Carousel.Caption></Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src="./products/Soup_Salads/NickTheGreek-_89.jpg"
                                    alt="Second slide"
                                    />
                                    <Carousel.Caption></Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src="./products/Soup_Salads/NickTheGreek-_95.jpg"
                                    alt="Second slide"
                                    />
                                    <Carousel.Caption></Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                        <Col md="auto" className="w-50">
                            {salad.map(soup_salad => {
                                return (
                                    <div className="" key={soup_salad.id}>
                                        <h4 className="text-start mt-4 ms-5 me-4 mb-2">{soup_salad.title} <span className="ms-5" style={{color: "blue"}}> ${soup_salad.price}</span></h4>
                                        <p>{soup_salad.desc}</p>
                                        <div className="row p-2 align-middle">
                                            <p className="col-sm-6 col-md-8 align-self-center text-start">
                                                <button className="btn btn-secondary mx-1 ps-3" onClick={() => props.onIncrement(soup_salad)}>
                                                    <FontAwesomeIcon className="me-1" icon={faPlusCircle} />
                                                </button>
                                                <button className="btn btn-secondary mx-1 ps-3" onClick={() => props.onDecrement(soup_salad)}> 
                                                    <FontAwesomeIcon className="me-1" icon={faMinusCircle} />
                                                </button>
                                                <span className="p-3">{soup_salad.value}</span>
                                                quantity
                                            </p>
                                        </div>
                                    </div>
                                )
                            })}
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default MenuItems;