import React from "react";
import { ChevronDown } from 'lucide-react';

const Search = () => {
  return (
    <div className='flex w-full items-center justify-between lg:my-8'>
      <label className='input'>
        <svg
          className='h-[1em] opacity-50'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
        >
          <g
            strokeLinejoin='round'
            strokeLinecap='round'
            strokeWidth='2.5'
            fill='none'
            stroke='currentColor'
          >
            <circle cx='11' cy='11' r='8'></circle>
            <path d='m21 21-4.3-4.3'></path>
          </g>
        </svg>
        <input type='search' required placeholder='Search' />
      </label>

      <div className='dropdown dropdown-bottom dropdown-center'>
        <div tabIndex={0} role='button' className='btn m-1'>
          Filter By Region <ChevronDown />
        </div>
        <ul
          tabIndex={0}
          className='dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm'
        >
          <li>
            <a>Africa</a>
          </li>
          <li>
            <a>America</a>
          </li>
          <li>
            <a>Asia</a>
          </li>
          <li>
            <a>Europe</a>
          </li>
          <li>
            <a>Oceania</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Search;
