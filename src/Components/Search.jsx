import React, { useEffect, useState } from "react";
import { ChevronDown } from 'lucide-react';
import CardTemplate from "./Cards/CardTemplate";
import DetailCardTemplate from "./Cards/DetailCardTemplate";
import { X } from 'lucide-react';

const Search = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error('Error fetching data: ', error));
  }, []);

  // filter for text search and dropdown

  const filteredCountries = data.filter((country) => {
    const matchesSearch = country.name.common.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRegion = selectedRegion ? country.region === selectedRegion : true;
    return matchesSearch && matchesRegion;
  });

    // show if there is a filter or search term
    const filteredCards = searchTerm || selectedRegion;

  return (
    <div className='flex flex-col lg:flex-row w-full items-center justify-between my-8 gap-8'>

      {/* text input filter */}
      <label className='input input-lg py-2 text-lg border-none rounded-lg drop-shadow-xl w-2/3 lg:w-1/3'>
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
        <input type='search' className="" placeholder='Search' onChange={(e) => setSearchTerm(e.target.value)} />
      </label>

      {/* dropdown filter */}
      <div className='dropdown dropdown-bottom dropdown-center'>
        <div tabIndex={0} role='button' className='btn m-1 py-2 bg-transparent border-none rounded-lg drop-shadow-xl'>
          Filter By Region <ChevronDown />
        </div>
        <ul
          tabIndex={0}
          className='dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm'
        >
          <li>
            <a onClick={() => setSelectedRegion('Africa')}>Africa</a>
          </li>
          <li>
            <a onClick={() => setSelectedRegion('Americas')}>America</a>
          </li>
          <li>
            <a onClick={() => setSelectedRegion('Asia')}>Asia</a>
          </li>
          <li>
            <a onClick={() => setSelectedRegion('Europe')}>Europe</a>
          </li>
          <li>
            <a onClick={() => setSelectedRegion('Oceania')}>Oceania</a>
          </li>
          <li>
            <a onClick={() => setSelectedRegion('')}>All</a>
          </li>
        </ul>
      </div>

      {/* filtered cards */}

      {filteredCards ? (
      <div className='grid grid-cols-1 mx-6 md:mx-auto md:grid-cols-2 lg:grid-cols-4 gap-14'>
      {filteredCountries.map((item) => (
        <div key={item.cca3}>
          {/* main cards */}
          <CardTemplate
            item={item}
            onClick={() =>
              document
                .getElementById(`my_modal_2-${item.name.common}`)
                .showModal()
            }
          >
            <figure>
              <img
                src={item.flags?.svg}
                alt={item.name.common}
                className='object-cover w-full h-40'
              />
            </figure>
            <div className='card-body'>
              <h2 className='card-title font-bold'>{item.name.common}</h2>
              <p>Population: {item.population}</p>
              <p>Region: {item.region}</p>
              <p>Capital: {item.capital}</p>
            </div>
          </CardTemplate>

          {/* modal intead of page */}
          <dialog id={`my_modal_2-${item.name.common}`} 
          className='modal'
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              document.getElementById(`my_modal_2-${item.name.common}`).close();
            }
          }}
          >
            <div className='modal-box w-11/12 h-11/12 md:h-6/12 md:max-w-5xl md:max-h-2xl mx-auto'>
              <DetailCardTemplate item={item}>
                <figure>
                  <img
                    src={item.flags?.svg}
                    alt={item.name.common}
                    className='object-cover lg:w-full lg:h-40'
                  />
                </figure>
                <h2 className='card-title font-bold'>{item.name.common}</h2>
                <p>Population: {item.population}</p>
                <p>Region: {item.region}</p>
                <p>Capital: {item.capital}</p>
              </DetailCardTemplate>
              <div className='modal-action'>
                <form method='dialog'>
                  <button className='btn'
                  onClick={() =>
                    document.getElementById(`my_modal_2-${item.name.common}`).close()
                  }
                  ><X /></button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      ))}
    </div>
) : searchTerm && (
  <p className="text-xs">None found.</p>
)}
    </div>
  );
};

export default Search;
