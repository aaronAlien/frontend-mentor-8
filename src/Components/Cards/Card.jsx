import React, { useEffect, useState } from "react";
import CardTemplate from "./CardTemplate";
import DetailCardTemplate from "./DetailCardTemplate";
import { X } from "lucide-react";
import Borders from "./Borders";

const Card = ({ data }) => {

  return (
    <div className="flex flex-col">
      <div className='grid grid-cols-1 mx-6 md:mx-auto md:grid-cols-2 lg:grid-cols-4 gap-14'>
        {data.map((item) => (
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
            <dialog
              id={`my_modal_2-${item.name.common}`}
              className='modal'
              onClick={(e) => {
                if (e.target === e.currentTarget) {
                  document
                    .getElementById(`my_modal_2-${item.name.common}`)
                    .close();
                }
              }}
            >
              <div className='modal-box w-11/12 h-11/12 md:h-6/12 md:max-w-5xl md:max-h-2xl lg:max-w-7xl lg:max-h-3xl mx-auto'>
              <div className='modal-action'>
                  <form method='dialog'>
                    <button
                      className='btn btn-sm btn-soft rounded-lg drop-shadow-xl absolute left-6 top-2 lg:top-10'
                      onClick={() =>
                        document
                          .getElementById(`my_modal_2-${item.name.common}`)
                          .close()
                      }
                    >
                      <X />
                    </button>
                  </form>
                </div>
                <DetailCardTemplate item={item}>
      
                  <figure className='flex items-center justify-center w-full mx-auto lg:w-2/3 rounded-lg drop-shadow-xl'>
                    <img
                      src={item.flags?.svg}
                      alt={item.name.common}
                      className='object-cover w-full'
                    />
                  </figure>
                  <div className='flex flex-col w-full mx-auto space-y-8 lg:py-8 lg:pl-12'>
                    <h2 className='card-title font-bold text-3xl text-center mt-8 lg:mt-0'>
                      {item.name.common}
                    </h2>
                    <div className='flex w-full flex-col lg:flex-row gap-8'>
                      <div className='flex flex-col w-1/2 text-sm lg:text-base space-y-2'>
                        <p>Native Name: {item.nativename}</p>
                        <p>Population: {item.population}</p>
                        <p>Region: {item.region}</p>
                        <p>Sub Region: {item.subregion}</p>
                        <p>Capital: {item.capital}</p>
                      </div>
                      <div className='flex flex-col w-1/2 text-sm lg:text-base space-y-2'>
                        <p>Top Level Domain: {item.tld}</p>
                        <p>Currencies:</p>
                        <p>Languages:</p>
                      </div>
                    </div>
                    <Borders data={data} borders={item?.borders} />
                  </div>
                </DetailCardTemplate>
              </div>
            </dialog>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
