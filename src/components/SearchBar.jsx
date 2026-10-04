import react from 'react'

function SearchBar({searchItem,setSearchItem}){

    return (
        <div className="search-bar bg-gray-300 shadow rounded-lg w-60 p-3">
            
            <span >🔍</span>
            <input type="text"  value={searchItem} onChange={(e)=>setSearchItem(e.target.value)} placeholder='Search for a country..'></input>
            
        </div>
    )
}

export default SearchBar