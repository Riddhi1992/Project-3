import React from "react";
import { Link } from "react-router-dom";
import {Button, Row, Col} from "react-bootstrap";

export default function Basket(props) {
    const {prods = []} = props
    return (
        <div className="block">
            <h2 className="mx-5">Cart Items</h2>
            {prods.map((prod) => {
                if(prod.value > 0) {
                    return (
                        <div className=" basket border align-items-start m-3 ps-5">
                        {/* <div className="border d-flex align-items-start m-3 ps-5"> */}
                            <Row className="m-5">
                                <Col md="auto" className="w-50"> 
                                    <h5 className="basket01">Food Item: {prod.title}</h5>
                                    <p className="basket02">{prod.desc}</p>
                                </Col>
                                <Col md="auto" className="w-50 text-center">
                                    <p className="basket03">Quantity: &nbsp; {prod.value}</p>
                                    
                                </Col>
                            </Row>        
                        </div>
                    )
                }
            })}
            <CheckOutBtn totalValue={props.totalValue} />
        </div>
    );
}

const CheckOutBtn = ({totalValue}) => {
    return (
        totalValue > 0 ?
        <Link to="/signin">
            <Button className="mt-4 checkout">Check Out</Button>
        </Link>
        :
        <React.Fragment>
            <h4 className="m-5">There are {totalValue} items in your cart.</h4>
            <Link to="/menu">
                <Button className="bg-primary mx-5">Continue Shop</Button>
            </Link>
        </React.Fragment>
    )
}