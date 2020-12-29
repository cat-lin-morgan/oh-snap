import React, {Children} from 'react';

const CoolComponent = ({children}) => {
    const count = Children.count(children);

    const fancyChildren = Children.map(children, (child) => {
        return(
            <div style={{border: '2px solid #ff0054'}}>{child}</div>
        )
    })

    return (
        <div>
            <p>{`There are ${count} children`}</p>
            {fancyChildren}
        </div>
    );
};

export default CoolComponent;
