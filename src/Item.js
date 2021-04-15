import React from 'react';
import List from "./List";

const Item = ({item, onDelete}) => {

    return <div>
        {item}
        <button onClick={onDelete}>Delete</button>
    </div>
};

export default Item