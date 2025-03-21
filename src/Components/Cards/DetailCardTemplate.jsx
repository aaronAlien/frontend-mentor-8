import React from "react";

const DetailCardTemplate = ({ children }) => {
  return (
    <div>
      <div className='card lg:card-side bg-base-100 w-full mt-7 lg:mt-14'>{children}</div>
    </div>
  );
};

export default DetailCardTemplate;
