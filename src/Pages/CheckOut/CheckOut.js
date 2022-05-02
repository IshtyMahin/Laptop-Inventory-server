import React from 'react';
import { useParams } from 'react-router-dom';
const CheckOut = () => {
    const {serviceName} = useParams();
    return (
        <div>
            <h2>Welcome to details: {serviceName}</h2>
              <h2>Please checkout your booking</h2>
        </div>
    );
};

export default CheckOut;