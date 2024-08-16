import React, { useContext } from 'react'
import { UserContext } from '../Store/Context'
import { Link } from 'react-router-dom'
const Items = ({item}) => {
  
  return (
    <>
      <div className="flex flex-col w-60 overflow-hidden p-2 shadow-2xl gap-2 border-2 rounded-2xl border-white">
        <div className='flex h-44 overflow-hidden justify-center rounded-xl'>
          <img className='object-cover w-full' src={item?.image_url} alt="recipe item" />
        </div>
        <div className='flex flex-col font-bold py-3'>
          <span> {item?.publisher}</span>
          <h2>{item?.title}</h2>
          <Link to={`/recipes/${item.id}`} className='p-2 w-[60%] my-4 rounded-lg bg-black text-white text-center'>Recipe Details</Link>
        </div>
      </div>
    </>
  )
}

export default Items