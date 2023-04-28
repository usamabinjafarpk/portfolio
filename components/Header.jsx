import React from 'react'

export default function Header({setCurrent}) {
  return (
    <div className=' flex justify-between bg-slate-900'>
        <h1 onClick={()=>setCurrent("home")} className='py-9 text-4xl px-48 bg-black text-white'>USAMA BIN JAFAR PK</h1>
        <div className='flex items-center pr-5 space-x-10  text-white '>
            <button onClick={()=>setCurrent("profile")} className='hover:bg-blue-800'>Profile</button>
            <button onClick={()=>setCurrent("about")} className='hover:bg-blue-800'>About</button>
        </div>
    </div>
  )
}
