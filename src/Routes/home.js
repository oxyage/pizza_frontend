import React, {Component} from 'react';
import PizzasList from "../Components/home/PizzasList";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

class Home extends Component {

    constructor(){
        super();

        this.state = {
            appState: false,
            userId: null,

            pizzas: [],
            pizzaLoaded: false,
            cart: [],
            cart_summary: [],
            totalItems: 0,
            totalAmount: 0,
        };




    }

    getPizzasFromServer() {

        axios.get(process.env.REACT_APP_GET_PIZZAS).then(response => {
            this.setState({
                pizzas: response.data,
                pizzaLoaded: true
            });
        });

    }



    componentWillMount()
    {
        this.getPizzasFromServer();


    }



    render() {



        return (
            <div>
                {
                    !this.state.pizzaLoaded && <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                }

                {
                    this.state.pizzaLoaded && <PizzasList list={this.state.pizzas}/>
                }

            </div>
        );
    }
}

export default Home;