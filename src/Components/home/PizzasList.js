import React, {Component} from 'react';
import Pizza from "./Pizza";


class PizzasList extends Component {
    render() {
        return (
            <div className="row" style={{margin:"0 auto"}}>


                {
                    this.props.list.map(item => {

                        return <Pizza
                           key = {item.id}
                           pizza_id = {item.id}
                           title ={item.title}
                           images = {item.images}
                           cost = {item.cost}
                           description = {item.description}
                           weight = {item.weight}
                        />

                    })

                }

            </div>
        );
    }
}

export default PizzasList;