import React from "react";

const Header = () => {
  return (
    <div className="navbar bg-base-100 py-8">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-5xl">Big  <span className="text-green-700 me-3">  Think</span></a>
      </div>
      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-20 rounded-full border">
              <img src="../../../public/img/user2.png" />
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Header;
