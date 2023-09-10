import { useState } from 'react';
import './countries.css'
const Country = ({information,handleVisitedCountries,flagHandleVisitedCountries}) => {
    const {name,flags,capital,population,area,continents,cca3} = information
    const [visited,setVisited] = useState(false)
    const handleClick = () =>{
        setVisited(!visited)
    }
    console.log(handleVisitedCountries);
    return (
        <div className={`box ${visited? 'visited': ""}`}>
            <h3>Name : {name?.common} </h3>
            <img src={flags.png} alt="" />
            <p>Capital : {capital}</p>
            <p> population: {population}</p>
            <p>Area : {area}</p>
            <p>Continents : {continents}</p>
            <p>Code : {cca3}</p>
            <button onClick={()=> handleVisitedCountries(information)}>Mark Visited</button>
            <br />
            <button onClick={()=> flagHandleVisitedCountries(information.flags.png)}>Add Flag</button>
            <br />
            <button onClick={handleClick}>{visited? 'Visited' : 'Going' } </button>
            {visited? 'I have visited this country' : 'I want to visit '}
        </div>
    );
};

export default Country;