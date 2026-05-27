import {useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import FilterBar from "./components/FilterBar";
import CountriesList from "./components/CountriesList";
import Header from "./components/Header";
import { ThemeContext } from "./components/contexts/ThemeContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CountryDetails from "./components/CountryDetail";

function App() {
  const [filterData, setFilterData] = useState("");
  const [isDrak, setIsDark] = useState(localStorage.getItem('data'))
  
  return (
    <>
    <BrowserRouter>
    <ThemeContext.Provider value={[isDrak, setIsDark]}>
        <Header />
      <Routes>
        <Route path="/" element={
          <div className="app-container">            
            <div className="bar-container">
              <SearchBar setFilterData={setFilterData} />
              <FilterBar setFilterData={setFilterData} />
            </div>
          <CountriesList filterData={filterData} />
          </div>
        }/>
        <Route path="/:country" element={<CountryDetails/>}/>
      </Routes>
    </ThemeContext.Provider>
    </BrowserRouter>
    </>
  );
}

export default App;
