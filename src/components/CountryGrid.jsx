import react from 'react'
import countries from "../data/data.json"
import CountryCard from "./CountryCard"
function CountryGrid({region,searchItem}){
    
    const filteredCountries =countries.filter((country)=>{
        const matchesRegion = region === "" || country.region===region;

        const matchesSearchItem =country.name.toLowerCase().includes(searchItem.toLowerCase());
        return matchesRegion && matchesSearchItem
    })
    return (
        <section className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 p-6">
            {filteredCountries.map((country)=>(
                <CountryCard key={country.alpha3Code} country={country} />
            ))}
        </section>
    )
}

export default CountryGrid