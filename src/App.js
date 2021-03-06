import React, {Component} from 'react';
import Home from "./Routes/home";
import Cart from "./Routes/cart";
import Orders from "./Routes/orders";


import './App.css';
import {  BrowserRouter as Router,Route, Switch} from "react-router-dom";
import Header from "./Components/Header";
import axios from "axios";

class App extends Component{


    constructor(){
        super();

        this.state = {
            appState: false,
            userId: null,
            auth: null,
            pizzas: [],
            pizzaLoaded: true,
            cart: [],
            cart_summary: [],
            totalItems: 0,
            totalAmount: 0,
        };

    }

    componentWillMount()
    {

        if(!localStorage.getItem('userId'))
        {

            let userId = Math.ceil(Math.random() * 100000);
            localStorage.setItem('userId', userId);

            axios.post(process.env.REACT_APP_CUSTOMER,
            {
                name: userId

            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.warn(error);
            });

            this.setState({
                userId: userId
            });
        }
        else
        {
            this.setState({
                userId: localStorage.getItem('userId')
            });
        }


    }
render() {

    return (
        <div className="container" style={{margin:"0 auto"}}>


            <Header auth={this.state.auth}/>


            <Router>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/cart" component={Cart}/>
                    <Route exact path="/orders" component={Orders}/>
                </Switch>
            </Router>

        </div>
    );
}
}

export default App;
