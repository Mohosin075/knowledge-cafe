import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const Carts = (props) => {
  // console.log(props);
  const { id, name, title, watch, author, cover, publish } = props.cart;
  const handleMarkRead = props.handleMarkRead;
  const handleBookMarks = props.handleBookMarks;
  // console.log(handleMarkRead);

  return (
    <div className="card w-full bg-base-100 mb-10">
      <figure className="h-auto xl:h-96">
        <img
          className="w-full bg-auto bg-center bg-auto"
          src={cover}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-8 h-8 lg:w-16 lg:h-16">
              <img
                className="w-full h-full bg-center bg-cover rounded-full"
                src={author}
                alt=""
              />
            </div>
            <div className="ps-4 lg:ps-7">
              <h3 className="text-lg lg:text-2xl font-bold">{name}</h3>
              <p className="text-gray-500 text-sm lg:text-xl">{publish}</p>
            </div>
          </div>
          <div className="">
            <p className="text-gray-500 flex items-center  text-sm lg:text-xl">
              {watch} min read
                <button onClick={()=>handleBookMarks(id)}><FontAwesomeIcon className="w-6 h-6 lg:w-8 lg:h-8 cursor-pointer ps-5 hover:text-green-500" icon={faBookmark} /></button>
                <ToastContainer />
            </p>
          </div>
        </div>
        <h2 className="text-xl lg:text-4xl font-bold my-2 lg:my-4">{title}</h2>
        <div className="card-actions justify-start">
          <div className="badge">#beginners</div>
          <div className="badge">#programming</div>
        </div>
        <button onClick={()=>handleMarkRead(id)} className="text-start text-[#6047EC] text-lg lg:text-xl underline my-3 lg:mt-7">
          Mark as read
        </button>
      </div>
      <hr className="border-gray-300" />
    </div>
  );
};

export default Carts;
