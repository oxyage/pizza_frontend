import React from 'react';

function Order(props) {

    const item = props.pizza;

    return <tr key={item.id}>
        <th scope="col">{item.id}</th>
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

}

export default Order;