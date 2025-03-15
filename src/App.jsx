import { useContext, useState } from "react";
import "./index.css";
import Navbar from "./Components/Navbar";
import Search from "./Components/Search";
import Card from "./Components/Cards/Card";
import Footer from "./Components/Footer";
import ToTop from "./Components/ToTop";

function App() {
  return (
    <>
      <div className='flex flex-col items-center justify-center w-full'>
        <Navbar />
        <div className=''>
          <Search />
          <div className=''>
            <Card />
          </div>
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
