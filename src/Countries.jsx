import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country";
import './container.css'



const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries,setVisitedCountries] = useState([]);
    const [flagVisitedCountries,setFlagVisitedCounter] = useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=> res.json())
        .then(data => setCountries(data))
    },[])

    const handleVisitedCountries = (going) =>{
        const newVisitedCountries = [...visitedCountries,going]
        setVisitedCountries(newVisitedCountries);
    }
    const flagHandleVisitedCountries = (flag) => {
        const newFlagVisited = [...flagVisitedCountries,flag];
        setFlagVisitedCounter(newFlagVisited);
    }
    return (
        <div>
            {/* Visited Countries */}
            <h3>Countries : {countries.length}</h3>
            <div>
                <h5>Visited Countries : {visitedCountries.length}</h5>
                <ul>
                    {
                        visitedCountries.map(going => <li style={{listStyle:"none"}}
                        key={going.cca3}
                        >{going.name.common}</li>)
                    }
                </ul>
            </div>
            <div className="flag-container">
                {
                  flagVisitedCountries.map((flag,idk) => <img key={idk} src={flag}></img>)
                }
            </div>
            {/* Display Show Data */}
           <div className="countries-container">
           {
                countries.map(country => <Country key={country.cca3} 
                    handleVisitedCountries ={handleVisitedCountries}
                    flagHandleVisitedCountries = {flagHandleVisitedCountries}
                    information={country} ></Country>)
            }
           </div>
        </div>
    );
};

export default Countries;