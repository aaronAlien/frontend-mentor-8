import React from "react";
import ThemeSwitch from "./theme/ThemeSwitch";

const Navbar = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className='navbar bg-base-100 shadow-sm'>
        <div className='flex-1 w-full ml-6 lg:mx-12'>
          <h1 className='text-base lg:text-xl font-bold'>Where In The World?</h1>
        </div>
        <div className='flex-none mr-6 lg:mx-12'>
          <ThemeSwitch />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
