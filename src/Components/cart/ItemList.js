import React, {Component} from 'react';
import Item from "./Item";
import axios from "axios"
import {Button, Form} from "react-bootstrap";

class ItemList extends Component {

    constructor(props)
    {
        super(props);

        this.state = {
            delivery: "",
            contacts: ""
        };

        this.handleChangeDelivery = this.handleChangeDelivery.bind(this);
        this.handleSubmitDelivery = this.handleSubmitDelivery.bind(this);

        this.handleChangeContacts = this.handleChangeContacts.bind(this);
        this.handleSubmitContacts = this.handleSubmitContacts.bind(this);

    }

    handleChangeContacts(event) {
        this.setState({contacts: event.target.value});
    }

    handleSubmitContacts(event) {
        alert('Delivery ' + this.state.contacts);
        event.preventDefault();
    }

    handleChangeDelivery(event) {
        this.setState({delivery: event.target.value});
    }

    handleSubmitDelivery(event) {
        alert('Delivery ' + this.state.delivery);
        event.preventDefault();
    }

    getOrder()
    {

        let delivery = document.getElementById('infoDelivery').value || "undefined";
        let contacts = document.getElementById('infoContacts').value || "undefined";


        axios.post(process.env.REACT_APP_ORDER+localStorage.getItem('userId'),{
            delivery, contacts
        })
        .then(response => {
            window.location.href = "/orders";

        })
            .catch(err =>{
                window.location.href = "/";
                console.error(err)
            });



    }

    clearCart()
    {
        if(window.confirm("Are you sure?"))
        {

            axios.delete(process.env.REACT_APP_CART+localStorage.getItem('userId'),{})
                .then(response => {
                    window.location.href = "/";
                });

        }



    }

    getProps()
    {
        console.log(this.props);
    }


    render() {

        return (
            <div>
                 <table className="table table-hover">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Pizza</th>
                        <th scope="col">Cost</th>
                        <th scope="col">Count</th>
                        <th scope="col">Total</th>
                        <th scope="col">Delete</th>
                    </tr>
                    </thead>
                    <tbody>

                    {

                       this.props.list.map((pizza, index) => {
                        return <Item key={pizza.pizza_id} pizza={pizza} index={index} dispatch={this.props.dispatch}/> })
                    }


                    <tr className="bg-light text-black">
                        <th scope="row" colSpan="3">Total</th>
                        <td>
                            { this.props.list.reduce(function(prev, curr){ return prev+curr.count;}, 0)}
                        <small>({this.props.summary.weight.toFixed(2)} kg)</small>
                        </td>
                        <td>
                            ${this.props.summary.cost.toFixed(2)} / {(this.props.summary.cost*1.1).toFixed(2)} €
                        </td>
                        <td>
                            <button type="button" className="btn btn-outline-warning" onClick={this.clearCart}>Clear cart</button>
                            <button type="button" className="btn btn-outline-info" onClick={this.getProps.bind(this)}>Props</button>
                        </td>
                    </tr>

                    </tbody>

                </table>



                <hr/>

                <form  >
                    <div className="form-group">
                        <label htmlFor="infoDelivery">Delivery address</label>
                        <input type="text" className="form-control" id="infoDelivery"  placeholder="City, street, house" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="infoContacts">Contacts</label>
                        <input type="text" className="form-control" id="infoContacts"
                               placeholder="+7-987-654-32-10" required/>
                    </div>
                    <button type="button" className="btn btn-primary" onClick={this.getOrder}>Submit</button>


                </form>

            </div>
        );
    }
}

export default ItemList;