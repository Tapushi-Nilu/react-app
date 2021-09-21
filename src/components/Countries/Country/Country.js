import React from 'react';
import './Country.css'
const Country = (props) => {
    console.log(props.country);
    const {name, flag, capital, population} = props.country;
    return (
        <div className="country">
            <h4>This is {name}</h4>
            <img src={flag} alt=""/>
            <p>Capital: {capital}, Population: {population}</p>
        </div>
    );
};

export default Country;