import React, {Component} from 'react';
import ItemList from "../Components/cart/ItemList";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

class Cart extends Component {

    constructor(props){

        super(props);

        this.state = {

            cart: [],
            cart_summary: [],
            cartLoaded: false,
            cartEmpty: true

        };


        this.updateCart = this.updateCart.bind(this);

    }


    getCartFromServer() {

        axios.get(process.env.REACT_APP_CART+localStorage.getItem('userId'))
            .then(response => {
                this.setState({
                    cart: response.data['customer_cart'],
                    cart_summary: response.data.summary,
                    cartLoaded: true,
                    cartEmpty: response.data['customer_cart'].length < 1

                });
            });

    }

    componentDidMount() {
        this.getCartFromServer();

    }

    updateCart(pizza, index)
    {

        let mycart = this.state.cart;
        let mysummary = this.state.cart_summary;

        if(pizza.count === 0)
        {
            mycart.splice(index,1);
        }
        else
        {
            mycart[index] = pizza;
        }

        mysummary.cost = mycart.reduce((agg, item)=>{

            return agg + item.cost * item.count

        }, 0);

        mysummary.weight = mycart.reduce((agg, item)=>{

            return agg + item.weight * item.count

        }, 0);



        this.setState({
            cart: mycart,
            cart_summary: mysummary,
            cartEmpty: mycart.length < 1

        });


        //todo: axios.put !

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
                    this.state.cartLoaded && !this.state.cartEmpty  && <ItemList list={this.state.cart} summary={this.state.cart_summary} dispatch={this.updateCart}/>
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