import react, { use } from 'react'

function Header({darkMode,setDarkMode}){
    return (
        <div className="flex items-center justify-between bg-white text-black dark:bg-gray-900 dark:text-white px-12 py-6 shadow">
            <h1 className="font-bold text-xl">Where is the World?</h1>
            <button className="flex items-center gap-2 bg-gray-200 border-b rounded-lg p-2" onClick={()=>{
                setDarkMode(!darkMode)
            }}>{darkMode ? "☀️ LightMode ":" 🌙 DarkMode" }</button>

        </div>
    )
}

export default Header