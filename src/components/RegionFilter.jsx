import react from 'react'

function RegionFilter({region,setRegion}){

    return (
        <div className="bg-gray-300 text-xl  rounded-lg shadow w-50 p-2 ">
            <select value={region} onChange={(e)=>setRegion(e.target.value)}>
                <option value="">Filter By Region</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </div>
    )
}

export default RegionFilter