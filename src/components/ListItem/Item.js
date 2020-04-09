import React from 'react';

function Item(props) {
    const { name, quantity, unit } = props.item;

    return (
        <li>
            <button className="editItem"></button>
            <button className="removeItem"></button>
            - {name},  <span>{quantity}</span> {unit}            
        </li>
    );
}

export default Item;
