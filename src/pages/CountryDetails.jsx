import react from  'react'
import {Link, useParams } from 'react-router-dom'
import countries from "../data/data.json"
import Header from '../components/Header'

function CountryDetails({darkMode,setDarkMode}){
    const {code}=useParams()
    const country = countries.find((country)=>country.alpha3Code===code)
    if (!country){
        return <h1>Country not Found</h1>
    }
    return(
        <>
            <Header darkMode={darkMode}  setDarkMode={setDarkMode} />
            <main className="min-h-screen bg-grayy-100 dark:bg-gray-900 dark:text-white px-12 py-10">
                <Link to="/" className=" inlie-block w-50 rounded-md bg-gray-200 px-6 py-2">Back</Link>
                <div className="grid gap-12 lg:grid-cols-2 mt-3">
                    <div>
                        <img src={country.flags.svg} alt={`Flag of ${country.name}`} className="w-full max-w-xl" />
                    </div>
                    <div className="py-4">
                        <h1 className="mb-6 text-3xl font-bold">{country.name}</h1>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                        <p><strong>Native Name: </strong>{country.nativeName}</p>
                        <p><strong>Population: </strong>{country.population.toLocaleString()}</p>
                        <p><strong>Region: </strong>{country.region}</p>
                        <p><strong>Sub Region: </strong>{country.subregion}</p>
                        <p><strong>Capital: </strong>{country.capital}</p>
                        <p><strong>Top Level Domain: </strong>{" "}{country.topLevelDomain?.join(", ")}</p>
                        <p><strong>Currencies: </strong>{" "}{country.currencies?.map((currency)=>currency.name).join(", ")}</p>
                        <p><strong>Languages: </strong>{" "}{country.languages?.map((language)=>language.name).join(" ,")}</p>
                    </div>
                </div>

            </main>
        </>
    )
}
export default CountryDetails