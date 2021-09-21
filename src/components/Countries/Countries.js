import React, { useEffect, useState } from 'react';
import './Countries.css';
import Country from './Country/Country';

const Countries = () => {

   const [countries, setCountries] = useState([]);

   useEffect( () => {
       fetch('https://restcountries.eu/rest/v2/all')
       .then(res => res.json())
       .then(data => setCountries(data))
   }, []);

    return (
        <div>
            <h1>Hello from countries {countries.length}</h1>

            <div className="cuntries">
            {
                countries.map(country => console.log(country))
            }
            {
                countries.map( country => <Country 
                    key={country.capital}
                    country={country}
                    ></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;