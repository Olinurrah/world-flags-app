import React, { useState } from 'react';
import './Country.css';

const Country = ({country, handleVisitedCountry ,handleVisitedFlag}) => {
    const [visited, setVisited] =useState(false);
    // console.log(country)
    const handleVisited=() => {
        // setVisited(true)
        if(visited){
            setVisited(false)
        }else{
            setVisited(true)
        }
        handleVisitedCountry(Country)
    }


    return (
        // <div className={`country ${visited && 'country-visited'}`}>
        <div className={`country ${visited ? 'country-visited': 'country'}`}>
           
            <img src={country?.flags?.flags?.png} alt="" />
             <h3>Name:{country?.name?.common}</h3>
             <h3>Population:{country?.population?.population} </h3>
            <p>Area: 
                {country?.area?.area} {country?.area?.area > 30000 ? "big country" : "small country" }
            </p>
            <button onClick={handleVisited} className='visited-btn'>{visited ? 'Visited' : 'Not Visited'}</button>
           <button onClick={ ()=> {handleVisitedFlag(country?.flags?.flags?.png)}} className='visited-btn'>Add Visited Flags</button>
        </div>
    );
};

export default Country;

// {
//     "name": {
//         "common": "Singapore",
//         "official": "Republic of Singapore"
//     },
//     "ccn3": {
//         "ccn3": "702"
//     },
//     "currencies": {
//         "currencies": {
//             "SGD": {
//                 "name": "Singapore dollar",
//                 "symbol": "$"
//             }
//         }
//     },

//     "capital": {
//         "capital": [
//             "Singapore"
//         ]
//     },

//     "region": {
//         "region": "Asia"
//     },

//     "languages": {
//         "languages": {
//             "eng": "English",
//             "zho": "Chinese",
//             "msa": "Malay",
//             "tam": "Tamil"
//         }
//     },
//     "area": {
//         "area": 710
//     },
//     "cca3": {
//         "cca3": "SGP"
//     },
//     "population": {
//         "population": 5685807
//     },
//     "continents": {
//         "continents": [
//             "Asia"
//         ]
//     },
//     "flags": {
//         "flags": {
//             "png": "https://flagcdn.com/w320/sg.png",
//             "svg": "https://flagcdn.com/sg.svg",
//             "alt": "The flag of Singapore is composed of two equal horizontal bands of red and white. On the hoist side of the red band is a fly-side facing white crescent which partially encloses five small five-pointed white stars arranged in the shape of a pentagon."
//         }
//     }
// }
