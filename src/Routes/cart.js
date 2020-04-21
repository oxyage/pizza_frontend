import React, {Component} from 'react';
import ItemList from "../Components/cart/ItemList";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

class Cart extends Component {

    constructor(){
        super();

        this.state = {

            cart: [],
            cart_summary: [],
            cartEmpty: true

        };



    }


    getCartFromServer() {

        axios.get(process.env.REACT_APP_CART+localStorage.getItem('userId'))
            .then(response => {
                this.setState({
                    cart: response.data['customer_cart'],
                    cart_summary: response.data.summary,
                    cartLoaded: true,
                    cartEmpty: response.data['customer_cart'].length > 0 ? false : true

                });
            });

    }

    componentWillMount() {
        this.getCartFromServer();

    }



        render() {


        return (
            <div>
                {
                    !this.state.cartLoaded  && <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                }

                {
                    this.state.cartLoaded && !this.state.cartEmpty  && <ItemList list={this.state.cart} summary={this.state.cart_summary}/>
                }

                {
                    this.state.cartLoaded && this.state.cartEmpty && <div className="alert alert-primary" role="alert">
                        Your cart is empty! Please, add any pizza to cart
                    </div>
                }

            </div>
        );
    }
}

export default Cart;