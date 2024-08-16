
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import UserContexProvider from './Store/Context'


function App() {

  return (

    <>
    <UserContexProvider>
      <Navbar/>
      <Outlet/>

    </UserContexProvider>
    </>

  )
}

export default App
