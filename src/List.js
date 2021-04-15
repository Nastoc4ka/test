import React, {Component} from 'react';
import Item from './Item'

const List = (props) => {

    return (
        <div className="App">
            {props.items.length === 0 ? 'No items added' : props.items.map((item, idx) => {
                return <Item key={idx} item={item} onDelete={() => props.onDelete(idx)}/>
            })}
        </div>
    )
};

export default List