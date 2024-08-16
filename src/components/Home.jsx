import React, { useContext } from 'react'
import { UserContext } from '../Store/Context'
import Items from './Items';

const Home = () => {
  const {recipes, loading} = useContext(UserContext);
  if(loading) {
    <div>Loading! Please wait</div>
  }
  return (
    <>
      <div className='flex flex-wrap gap-10 py-10 px-4 mx-auto  w-screen '>
        {
          recipes && recipes.length>0 ? recipes.map(item => <Items item={item}/>) : <div className='flex items-center justify-center text-2xl font-bold'>Nothing to show</div>
        }
      </div>
    </>
  )
}

export default Home