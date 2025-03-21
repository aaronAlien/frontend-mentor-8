import React, { useState, useEffect } from "react";

const Borders = ({ borders, data }) => {

  return (
    <>
        <div className='flex flex-col lg:flex-row w-full mx-auto'>
          <div className="">
            <p className='font-bold'>Border Countries: </p>
          </div>
          <div className='lg:ml-4 space-x-4'>
            {borders?.map((border) => (
                <span 
                key={border}
                className='badge badge-lg lg:badge-md text-base lg:text-sm'>
                  {border}
                </span>
            ))}
          </div>
        </div>
    </>
  );
};


export default Borders;
