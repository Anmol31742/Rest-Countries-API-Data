import React, { useEffect, useState } from "react";
import CountryCard from "./CountryCard";

function CountriesList({filterData}) {
  const [countriesData, setCountriesData] = useState([]);
  //  console.log(countriesData)

  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = async () => {
    try {
      const response = await fetch("https://restcountries.com/v3.1/independent?status=true");
      const data = await response.json();
      setCountriesData(data);
    } catch (error) {
      console.log('error here', error);
    }
  };

  return (
    <>
      <div className="country-list">
        {countriesData.filter((country) => country.name.common.toLowerCase().includes(filterData) || country.region.toLowerCase().includes(filterData))
        .map((country) => {
          return (
            <CountryCard
              key={country.name.common}
              name={country.name.common}
              flag={country.flags.svg}
              population={country.population.toLocaleString()}
              region={country.region}
              capital={country.capital}
            />
          );
        })}
      </div>
    </>
  );
}

export default CountriesList;
