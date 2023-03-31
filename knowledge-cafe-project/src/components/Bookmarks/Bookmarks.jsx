import React from 'react';

const Bookmarks = () => {
    return (
        <div  className='lg:w-4/12'>
            <div className='py-5 px-12 text-[#6047EC] bg-[#EFEDFD] rounded border border-red-100'>
                <p className='font-bold text-lg lg:text-xl'>Spent time on read : <span>177</span> min</p>
            </div>
            <div className='p-7 bg-[#F3F3F3] mt-7'>
                <h2 className='text-[#111111] text-lg lg:text-2xl font-bold pb-5'>Bookmarked Blogs : <span>8</span></h2>
                <div className='bg-white p-5 mb-4 rounded text-[#111111] font-semibold'>
                    <h1>Master Microsoft Power Platform and Become an In-Demand!</h1>
                </div>
            </div>
        </div>
    );
};

export default Bookmarks;