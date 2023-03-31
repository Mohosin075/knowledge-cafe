import React from "react";

const Carts = (props) => {
  console.log(props);
  const { id, name, title, watch, author, cover, publish } = props.cart;
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
            <div className="w-16 h-16">
              <img className="w-full h-full bg-center bg-cover rounded-full" src={author} alt="" />
            </div>
            <div className="ps-7">
              <h3 className="text-2xl font-bold">{name}</h3>
              <p className="text-gray-500">{publish}</p>
            </div>
          </div>
          <div>
            <p className="text-gray-500">{watch} min read <span>bookmark</span></p>
          </div>
        </div>
        <h2 className="text-4xl font-bold my-4">{title}</h2>
        <div className="card-actions justify-start">
          <div className="badge">#beginners</div>
          <div className="badge">#programming</div>
        </div>
        <button className="text-start text-[#6047EC] text-xl underline mt-7">Mark as read</button>
      </div>
      <hr className="border-gray-300" />
    </div>
  );
};

export default Carts;
