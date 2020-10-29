import React from 'react';

function Container(props) {
    return (
        <div>
            <div className={`container${props.fluid ? "-fluid" : ""}`} {...props} />
        </div>
    )
}
export default Container;