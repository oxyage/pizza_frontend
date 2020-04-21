import React, {Component} from 'react';

class Item extends Component {
    render() {
        let pizza = this.props.pizza;
        return (
            <tr>
                <th scope="row">{(this.props.index+1)}</th>
                <td>{pizza.title} <small>({pizza.weight*1000}g)</small></td>
                <td>${pizza.cost.toFixed(2)}</td>
                <td>

                    {pizza.count}

                </td>
                <td>${(pizza.count * pizza.cost).toFixed(2)} / {(pizza.count * pizza.cost * 1.1).toFixed(2)} €</td>
            </tr>
        );
    }
}

export default Item;