import react from 'react'
import { Link } from 'react-router-dom'

function CountryCard({country}){

    return (
        <Link to={`country/${country.alpha3Code}`}>
            <article className="overflow-hidden rounded-lg bg-white shadow-md">
                <img src={country.flags.svg} alt={`Flag of ${country.name}`} className='w-full h-48 object-cover' />
                <div className="p-6">
                    <h2 className="mb-4 text-xl font bold">{country.name}</h2>
                    <p>Population:{country.population}</p>
                    <p>Region:{country.region}</p>
                </div>
            </article>
        </Link>
    )
}

export default CountryCard