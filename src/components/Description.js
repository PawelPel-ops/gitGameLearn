import React from 'react';

const Description = ({task}) => {
    return (
        <div className="description">
            {task.name}

        </div>
    );
};

export default Description;