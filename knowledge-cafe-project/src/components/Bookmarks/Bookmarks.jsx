import React from 'react';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = (props) => {
    return (
        <div className='lg:sticky top-3'>
            <div className='py-5 px-12 text-[#6047EC] bg-[#EFEDFD] rounded border border-red-100'>
                <p className='font-bold text-lg lg:text-xl'>Spent time on read : <span>{props.time}</span> min</p>
            </div>
            <div className='p-7 bg-[#F3F3F3] mt-7'>
                <h2 className='text-[#111111] text-lg lg:text-2xl font-bold pb-5'>Bookmarked Blogs : <span>8</span></h2>
                <Bookmark></Bookmark>
            </div>
        </div>
    );
};

export default Bookmarks;