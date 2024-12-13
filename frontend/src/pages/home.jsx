import React, { useState } from 'react'
import Navbar from '../components/Navbar'

const Home = () => {
   const [isModalOpen, setModalOpen] = useState(false)
  return (
    <div className=' bg-gray-100 min-h-screen'>
    <Navbar/>

    <button className=' fixed right-4 bottom-4 text-2xl bg-teal-500 text-white font-bold p-4 rounded-full'>
        +
    </button>
    

    </div>
  )
}

export default Home