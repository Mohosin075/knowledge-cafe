import React from 'react';

const Bookmark = ({cart}) => {
    return (
            <div className='bg-white p-5 mb-4 rounded text-[#111111] font-semibold'>
                    <h1>{cart.title}</h1>
            </div>
    );
};

export default Bookmark;