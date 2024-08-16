import React, { useContext, useState } from 'react'
import { UserContext } from '../Store/Context'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const {handleSubmit,search,setSearch} = useContext(UserContext)
  return (
    <>
        <div className='flex justify-between w-screen px-12 py-6'>
            <h1 className='text-2xl font-bold'> <NavLink to={'/'}>Food recipe</NavLink></h1>
            <form onSubmit={handleSubmit}>
                <input 
                    
                    className='bg-green-300 font-bold px-6 py-2 rounded-xl shadow-lg outline-none'
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder='Enter fruit name'
                    />
            </form>
            <ul className='flex gap-4 pr-5'>
                <li ><NavLink className={({isActive}) => `font-semibold hover:text-orange-400 ${isActive?'text-orange-600':'text-gray-950'}`} to={'/'}>Home</NavLink></li>
                <li><NavLink className={({isActive}) => `font-semibold hover:text-orange-400 ${isActive?'text-orange-600':'text-gray-950'}`} to={'/favourite'}>Favourites</NavLink></li>
            </ul>
        </div>
    </>
  )
}

export default Navbar