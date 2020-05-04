import React from 'react';
import Order from "./Order";

function OrderList(props){

        const list = props.list;

        return <table className="table table-hover">
            <thead>
            <tr>
            <th scope="col">#</th>
    <th scope="col">Order</th>
    <th scope="col">Cost</th>
    <th scope="col">Delivery</th>
    <th scope="col">Contacts</th>
    </tr>
    </thead>
    <tbody>

    {
        list.map(item =>{

         return <Order pizza={item}/>;

        })
    }




    </tbody>
    </table>;


}

export default OrderList;