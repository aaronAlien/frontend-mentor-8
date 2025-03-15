import React, { useState, useEffect } from "react";
import { Sun, Moon } from 'lucide-react';

const ThemeSwitch = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div>
      {" "}
      <button
        className='btn btn-ghost text-sm lg:text-lg'
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
       {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
       {theme === "light" ? "Dark Mode" : "Light Mode"}
      </button>
    </div>
  );
};

export default ThemeSwitch;
