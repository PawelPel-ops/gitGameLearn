import React from 'react';

const Description = ({task}) => {

    return (
        <div className="description">
            <h2>{task.name}</h2>
            <p>{task.des}</p>
        </div>
    );
};

export default Description;