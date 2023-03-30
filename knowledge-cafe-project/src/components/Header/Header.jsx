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
              <img src="https://images.ctfassets.net/lh3zuq09vnm2/yBDals8aU8RWtb0xLnPkI/19b391bda8f43e16e64d40b55561e5cd/How_tracking_user_behavior_on_your_website_can_improve_customer_experience.png" />
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Header;
