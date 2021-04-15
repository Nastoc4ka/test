import React from 'react';

const Counter = ({counter}) => {
    if(!counter) return null;
    return <div>
        {`totalItems - ${counter}`}
    </div>
};

export default Counter