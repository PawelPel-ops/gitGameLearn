import React from 'react';

const Description = ({description}) => {
    return (
        <div className="description">
            {description.map(e=><p>{e.des}</p>)}

        </div>
    );
};

export default Description;