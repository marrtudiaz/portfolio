import React from 'react';

const Trend = (props) => {
    return (
        <>
            <p className="trend-items">
                <i className="bx bx-trending-up"></i>{props.name}
            </p>

        </>
    );
};

export default Trend;
