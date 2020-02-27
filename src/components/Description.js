import React from 'react';

const Description = ({task, animation}) => {
    console.log(animation);
    return (
        <div className="description">
            <h2 className={animation ? 'block' : 'none'}>{task.name}</h2>
            <p>{task.des}</p>
        </div>
    );
};

export default Description;