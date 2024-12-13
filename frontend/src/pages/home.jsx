import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import NoteModel from '../components/NoteModel'

const Home = () => {
   const [isModalOpen, setModalOpen] = useState(false)

   const closeModal = () => {
    setModalOpen(false)
   }
  return (
    <div className=' bg-gray-100 min-h-screen'>
    <Navbar/>

    <button onClick={() => setModalOpen(true)}
     className=' fixed right-4 bottom-4 text-2xl bg-teal-500 text-white font-bold p-4 rounded-full'>
        +
    </button>
    {isModalOpen && <NoteModel closeModal={closeModal}/>}

    </div>
  )
}

export default Home