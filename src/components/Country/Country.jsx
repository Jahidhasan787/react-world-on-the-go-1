import React, { useState } from 'react';
import './Country.css'

const Country = ({country, handleVisitedCountries,handleVisitedFlag}) => {
    // console.log(country.area.area);
    const [visited, setVisited] = useState(false);
    // console.log(handleVisitedCountries)
    const handleVisited = () =>{
        // alert("clicked")
        if(visited){
           setVisited(false) ; // toggle hobe
        }
        else{
            setVisited(true);
        }
        //ternary ---- setVisited(visited?false:true); 2nd system

        //setVisited(!visited); 3rd system
       handleVisitedCountries(country)
    }

    return (
        
        <div className={`country ${visited && 'country-visited' }`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
           <h3>Name: {country.name.common}</h3> 
           <h5>Population: {country.population.population}</h5>
           <p>Area : {country.area.area} {country.area.area >300000? "big country" :"small country" }</p> 
           <button onClick={handleVisited}>{visited ? 'Visited' : "Not visited"}</button>
           <button onClick={() =>handleVisitedFlag(country.flags.flags.png)}>Added Visited Flags</button>
        </div>
    );
};

export default Country;


