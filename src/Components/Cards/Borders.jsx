import React, { useState, useEffect } from "react";

const Borders = ({ borders }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  if (!borders || borders.length === 0) {
    return <p className="text-xs text-gray-500">No border countries</p>;
  }

  useEffect(() => {
    // wrapped in useeffct - sort alphabetically

    const apiUrl = "https://restcountries.com/v3.1/all";

    // fetch from api
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((json) => {
        const sortedData = json.sort((a, b) =>
          a.name.common.localeCompare(b.name.common)
        );
        setData(sortedData);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return (
    <>
        <div className='flex items-center'>
          <p className='font-bold'>Border Countries: </p>
          <div className=''>
            {borders.map((border) => (
                <span 
                key={border}
                className='badge badge-md text-sm'>
                  {border}
                </span>
            ))}
          </div>
        </div>
    </>
  );
};

{
  /**
{data.map((item) => (
  <div key={item.cca3} className="flex items-center gap-2">
    <p className="font-bold">Border Countries: </p>
    <div className="flex flex-wrap gap-1">
      {item.borders.map((border) => (
        <span key={border} className="badge badge-sm py-1.5 px-2">
          {border}
        </span>
      ))}
    </div>
  </div>
    */
}

export default Borders;
