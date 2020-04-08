import React from 'react';
import { v1 as uuidv1 } from 'uuid';
import Item from './Item'
import './ListItem.css'

class ListItem extends React.Component {

    state = {
        items: [
            { id: uuidv1(), name: "mąka", quantity: 2, unit: 'kg' },
            { id: uuidv1(), name: "woda", quantity: 2, unit: 'butelki' },
            { id: uuidv1(), name: "chleb", quantity: 1, unit: 'bochenek' }
        ]
    }


    render() {
        return (
            <>
                <button className="add">add new item</button>
                <ul>
                    {this.state.items.map(item =>
                        <Item key={item.id} item={item} />
                    )}
                </ul>
            </>
        )
    }
}

export default ListItem;