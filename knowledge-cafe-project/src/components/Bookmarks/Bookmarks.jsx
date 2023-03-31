import React from 'react';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({time, lengthCount}) => {
    return (
        <div>
            <div className='py-5 px-12 text-[#6047EC] bg-[#EFEDFD] rounded border border-red-100'>
                <p className='font-bold text-lg lg:text-xl'>Spent time on read : <span>{time}</span> min</p>
            </div>
            <div className='p-6 bg-[#F3F3F3] mt-6'>
                <h2 className='text-[#111111] text-lg lg:text-2xl font-bold'>Bookmarked Blogs : <span>{lengthCount}</span></h2>
            </div>
        </div>
    );
};

export default Bookmarks;