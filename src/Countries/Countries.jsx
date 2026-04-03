import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './countries.css'

const Countries = ({countryPromise}) => {
  
    const [visitedCountry, setVisitedCountry] = useState([])
    const [visitedFlags,setVisitedFlags] = useState()
    
    const handleVisitedCountry=(country)=>{
        // console.log('visitedCountry clicked',country);
        const newVisitedCountry = [...visitedCountry,country];
        setVisitedCountry(newVisitedCountry);
        console.log(newVisitedCountry);
               

    }
    const handleVisitedFlag = (flags) => {
        const newVisitedFlags = [...visitedFlags, flags]
        setVisitedFlags(newVisitedFlags)
        // console.log('flag need to be added', flags)
    }
      const countriesData = use(countryPromise);
    const countries =countriesData.countries;

    
    return (
        <div>
            <h1>All Country: {countries.length}</h1>
            <h3>Visited Country: {visitedCountry.length}</h3>
            {/* <h3>Visited Flags: {visitedFlags.length}</h3> */}
            <ol>
                {
                    visitedCountry.map(country => <li key={country?.ccn3?.ccn3}>{country}</li>)
                    
                }
            </ol>
       <div className='countries'>
             {
                countries.map(country =>
                     <Country
                  
                     key={country?.ccn3?.ccn3}
                      country={country}
                      handleVisitedCountry={handleVisitedCountry}
                      handleVisitedFlag= {handleVisitedFlag}
                      ></Country>)
            }
       </div>
        </div>
    );
};

export default Countries;


