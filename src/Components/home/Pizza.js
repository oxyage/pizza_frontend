import React, {Component} from 'react';
import {Card} from "react-bootstrap";
import axios from "axios";

class Pizza extends Component {

    constructor()
    {
        super();
        this.userId = localStorage.getItem('userId');
        this.state = {
            pizza: false
        };
    }

    addToCart(pizza)
    {

        this.setState({
            pizza: pizza.pizza_id
        });

        axios.post(process.env.REACT_APP_CART+this.userId,
            {
                pizza_id: pizza.pizza_id,
                count: 1
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.warn(error);
        })
            .then(()=>{
                this.setState({
                    pizza: false
                });
            });

    }

    render() {
        return (
            <Card className=".col-xs-6 .col-md-4 m-2" style={{ width:"350px"}} >
                <img
                    className="rounded d-block mx-auto my-3"
                    style={{width:"200px"}}
                    src={this.props.images}
                    alt="pizza"

                />
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>{this.props.description}</Card.Text>


                </Card.Body>

                <Card.Body>
                    <button
                        className="btn btn-dark"
                        variant="primary"
                        onClick={this.addToCart.bind(this, this.props)}
                    disabled={this.state.pizza}>
                        Add to cart
                        {
                            this.state.pizza && <span className="spinner-border spinner-border-sm " role="status" aria-hidden="true"></span>
                        }

                    </button>





                </Card.Body>

                <Card.Footer>
                <span className="text-muted">
                        {this.props.cost}$ / {(this.props.cost*1.1).toPrecision(2)}€
                </span>
                    <span className="float-right">{this.props.weight*1000}g</span>
                </Card.Footer>
            </Card>
        );
    }
}

export default Pizza;