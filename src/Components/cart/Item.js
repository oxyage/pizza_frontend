import React, {Component} from 'react';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";

class Item extends Component {

    constructor(props)
    {
        super(props);

        this.state = {
            costUSD: this.props.pizza.cost.toFixed(2),
            costEUR: (1.1 * this.props.pizza.cost).toFixed(2),
            count: this.props.pizza.count,
            sumUSD: (this.props.pizza.cost * this.props.pizza.count).toFixed(2),
            sumEUR: (1.1 * this.props.pizza.cost * this.props.pizza.count).toFixed(2),
            weight: this.props.pizza.weight,
            title: this.props.pizza.title,

        };

    }

    deleteItem()
    {
       // console.log('this',this.props)

        this.updateItem(0);

    }

    decrementItem()
    {

        this.updateItem(-1);
    }

    incrementItem()
    {
        this.updateItem(1);
    }



    updateItem(change)
    {
        if(change === 0)
        {
            console.log('delete pizza', this.props.index);
            this.setState({
                count:  0,
                sumUSD: 0,
                sumEUR: 0

            });

            let newPizza = this.props.pizza;
            newPizza.count = 0;
            this.props.dispatch(newPizza, this.props.index);
            axios.put(process.env.REACT_APP_CART+localStorage.getItem('userId'),{
                pizza_id: this.props.pizza.pizza_id,
                count: 0
            })
                .then(response => {
                    console.log(response)
                });

            return true;
        }

        if(this.state.count <= 1 && change === -1)
        {
            console.warn('stop!');
        }

        else
        {
            let newCount = this.state.count + change;
            this.setState({
               count:  newCount,
                sumUSD: (this.state.costUSD * newCount).toFixed(2),
                sumEUR: (this.state.costEUR * newCount).toFixed(2)

            });

            let newPizza = this.props.pizza;
            newPizza.count = newCount;
           this.props.dispatch(newPizza, this.props.index);

            axios.put(process.env.REACT_APP_CART+localStorage.getItem('userId'),{
                pizza_id: this.props.pizza.pizza_id,
                count: newCount
            })
            .then(response => {
                console.log(response)
            });

        }


    }


    render() {
        let pizza = this.props.pizza;
        let myItem = this;
        return (
            <tr>
                <th scope="row">{(this.props.index+1)}</th>
                <td>{pizza.title} <small>({pizza.weight*1000}g)</small></td>
                <td>${pizza.cost.toFixed(2)}</td>
                <td>
                    <button type="button" className="btn btn-light btn-sm mx-2" onClick={this.decrementItem.bind(myItem)}>-</button>

                    {this.state.count}
                    <button type="button" className="btn btn-light btn-sm mx-2" onClick={this.incrementItem.bind(myItem)}>+</button>

                </td>
                <td>${this.state.sumUSD} / {this.state.sumEUR} €</td>
                <td>
                    <button className="btn btn-outline-danger" onClick={this.deleteItem.bind(myItem)}>Delete</button>
                </td>
            </tr>
        );
    }
}

export default Item;