import React, {Component} from 'react';
import axios from "axios";
import OrderList from "../Components/orders/OrderList";

class Orders extends Component {

    constructor(props){
        super(props);

        this.state = {

            orders: [],
            ordersLoaded: false,
            ordersEmpty: true
        };




    }

    getOrdersFromServer() {

        axios.get(process.env.REACT_APP_GET_ORDERS + localStorage.getItem('userId'))
            .then(response => {
            this.setState({
                orders: response.data,
                ordersLoaded: true,
                ordersEmpty: response.data.length < 1

            });
        });

    }



    componentDidMount()
    {
        this.getOrdersFromServer();
    }

    render() {
        return (
            <div>
                {
                    !this.state.ordersLoaded && <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                }

                {
                    this.state.ordersLoaded && this.state.ordersEmpty && <div className="alert alert-primary" role="alert">
                       Your history order is empty!
                    </div>
                }

                {
                    this.state.ordersLoaded && !this.state.ordersEmpty && <OrderList list={this.state.orders}/>
                }

            </div>
        );
    }
}

export default Orders;