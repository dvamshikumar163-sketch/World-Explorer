import react, { useState } from 'react'
import Header from '../components/Header'
import RegionFilter from '../components/RegionFilter'
import CountryGrid from '../components/CountryGrid'
import SearchBar from '../components/SearchBar'

function Home({darkMode,setDarkMode}){
    const [region,setRegion]=useState("")
    const [searchItem,setSearchItem] =useState("")
    return(
        <div className="bg-grayy-100 dark:bg-gray-900 dark:text-white">
            <Header darkMode={darkMode} setDarkMode={setDarkMode} />
            <main className="mt-3 bg-grayy-100 dark:bg-gray-900 dark:text-white px-12 py-8">
                <div className="flex items-center justify-between ">
                    <SearchBar  searchItem={searchItem} setSearchItem={setSearchItem}/>
                    <RegionFilter region={region} setRegion={setRegion}/>
                    
                </div>
                <CountryGrid region={region} searchItem={searchItem}/>
            </main>

        </div>
    )
}

export default Home