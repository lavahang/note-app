import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import NoteModel from '../components/NoteModel'
import axios from 'axios'

const Home = () => {
   const [isModalOpen, setModalOpen] = useState(false)

   const closeModal = () => {
    setModalOpen(false)
   }

   const addNote = async ( title, description) => {
    try{
      // maile axios request lagayera server ma title, description send gareko server lai
      const response = await axios.post('http://localhost:3000/api/note/add',{ title, description },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        }
      );
      console.log(response); 
      if(response.data.success){
          // navigate('/')
          closeModal()
      }   
  }
  catch(error){
      console.log(error);          
  }
   }

  return (
    <div className=' bg-gray-100 min-h-screen'>
    <Navbar/>

    <button onClick={() => setModalOpen(true)}
     className=' fixed right-4 bottom-4 text-2xl bg-teal-500 text-white font-bold p-4 rounded-full'>
        +
    </button>
    {isModalOpen && <NoteModel closeModal={closeModal} addNote={addNote}/>}

    </div>
  )
}

export default Home