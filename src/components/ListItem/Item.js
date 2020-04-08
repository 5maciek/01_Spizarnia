import React from 'react';

function Item(props) {
    const { name, quantity, unit } = props.item;

    return (
        <li>
            <button className="edit"></button>
            <button className="remove"></button>
            - {name},  <span>{quantity}</span> {unit}            
        </li>
    );
}

export default Item;
