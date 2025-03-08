import React, { useEffect, useState } from 'react'
import { assets } from '../../assets/assets'

const DarkMode = () => {

    const [ theme,setTheme ] = useState(localStorage.getItem("theme")||"light");

    useEffect(() => {
        if (theme === "dark"){
            document.documentElement.classList.add("dark")
        localStorage.setItem("theme","light");
        }else {
            document.documentElement.classList.remove("dark")
        localStorage.setItem("theme","light");
        }
    },[theme]);


  return (
    <div className='relative'>
        <div className=''>
            <img src={assets.light_mode} alt="" className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.5)] transition-all duration-300 absolute right-0 z-10 ${
                theme === "dark"?"opacity-0":"opacity-100"
            }`} onClick={()=>setTheme(theme==="dark"?"light":"dark")}/>
            
            <img src={assets.dark_mode} alt="" className='w-12 cursor-pointer drop-shadow-[1px_1px_2px_rgba(0,0,0,0.5)] duration-300' onClick={()=> setTheme(theme==="dark"?"light":"dark")}/>
        </div>
    </div>
  )
}

export default DarkMode