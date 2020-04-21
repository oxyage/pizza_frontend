import React, {Component} from 'react';
import axios from "axios";

class Orders extends Component {

    constructor(){
        super();

        this.state = {

            orders: [],
            ordersLoaded: false
        };




    }

    getOrdersFromServer() {

        axios.get("https://agile-reaches-90236.herokuapp.com/api/orders/"+localStorage.getItem('userId')).then(response => {
            this.setState({
                orders: response.data,
                ordersLoaded: true
            });
        });

    }



    componentWillMount()
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
                    this.state.ordersLoaded && <table className="table table-hover">
                        <thead>
                        <tr>

                            <th scope="col">Order</th>
                            <th scope="col">Cost</th>
                            <th scope="col">Delivery</th>
                            <th scope="col">Contacts</th>
                        </tr>
                        </thead>
                        <tbody>

                        {



                            this.state.orders.map(item =>{

                                return <tr key={item.id}>

                                    <td>
                                        <ul>

                                            {

                                                item.order_content.map(order =>{

                                                    return <li key={order.pizza_id}>
                                                        {order.count} of '{order.title}'
                                                    </li>
                                                })

                                            }


                                        </ul>
                                    </td>
                                    <td>${item.summary.cost.toFixed(2)} / {(item.summary.cost * 1.1).toFixed(2)} €</td>
                                    <td>{item.delivery}</td>
                                    <td>{item.contacts}</td>


                                </tr>;

                            })

                        }




                        </tbody>
                    </table>
                }

            </div>
        );
    }
}

export default Orders;