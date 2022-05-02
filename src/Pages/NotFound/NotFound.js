import React from 'react';
import NotFoundImg from '../../Images/notFound/not found img.jpg'

const NotFound = () => {
    return (
        <div className='w-75 mx-auto'>
            <img className='w-100' src={NotFoundImg} alt="" />
        </div>
    );
};

export default NotFound;