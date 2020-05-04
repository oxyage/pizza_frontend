import React, {Component} from 'react';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";

class Item extends Component {


    deleteItem()
    {
       // console.log('this',this.props)

        axios.put(process.env.REACT_APP_CART+localStorage.getItem('userId'),{
            pizza_id: this.props.pizza.pizza_id,
            count: 0
        })
            .then(response => {
                window.location.href = "/cart";
            });

    }


    render() {
        let pizza = this.props.pizza;
        return (
            <tr>
                <th scope="row">{(this.props.index+1)}</th>
                <td>{pizza.title} <small>({pizza.weight*1000}g)</small></td>
                <td>${pizza.cost.toFixed(2)}</td>
                <td>
                    <button type="button" className="btn btn-light btn-sm mx-2">-</button>

                    {pizza.count}
                    <button type="button" className="btn btn-light btn-sm mx-2">+</button>

                </td>
                <td>${(pizza.count * pizza.cost).toFixed(2)} / {(pizza.count * pizza.cost * 1.1).toFixed(2)} €</td>
                <td>
                    <button className="btn btn-outline-danger" onClick={this.deleteItem.bind(this)}>Delete</button>
                </td>
            </tr>
        );
    }
}

export default Item;