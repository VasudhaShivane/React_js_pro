// src/components/Details.js
import React from 'react';
import { useLocation } from 'react-router-dom';

const Details = () => {
    const location = useLocation();
    const formData = location.state;

    return (
        <div>
            <h2>Form Details</h2>
            <pre>{JSON.stringify(formData, null, 2)}</pre>
        </div>
    );
};

export default Details;
