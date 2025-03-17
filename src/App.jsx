import React, { useState, useEffect } from "react";
import "./index.css";
import Navbar from "./Components/Navbar";
import Search from "./Components/Search";
import Card from "./Components/Cards/Card";
import Footer from "./Components/Footer";
import ToTop from "./Components/ToTop";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

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
        setFilteredData(sortedData);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const isFiltered = filteredData.length !== data.length;

  return (
    <>
      <div className='flex flex-col items-center justify-center w-full'>
        <Navbar />
        <div className=''>
          <Search data={data} setFilteredData={setFilteredData} />

        <div className="">
          {isFiltered ? (
            <Card filteredData={filteredData} />
          ) : (
            <Card data={data} />
          )} </div>
          
        </div>
        <ToTop />
        <div className='relative bottom-0 py-3'>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
