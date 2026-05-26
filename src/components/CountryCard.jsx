import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


function CountryCard({name, flag, population, region, capital}) {
  // const navigate = useNavigate();
  // const handleClick = () => {
  //   navigate(`/country/${name}`)
  // }
  return (
    <Link className="country-card" to={`/${name}`}>
      <img src={flag} alt={name + ' Flag'}/>
      <div className='card-text'>
            <h3 >{name}</h3>
            <p><b>Population:</b> {population}</p>
            <p><b>Region:</b> {region}</p>
            <p><b>Capital:</b> {capital}</p>
        </div>
    </Link>
  )
}

export default CountryCard

