import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import NoteModel from '../components/NoteModel'
import axios from 'axios'
import NoteCard from '../components/NoteCard'
import {toast} from 'react-toastify'

const Home = () => {
   const [isModalOpen, setModalOpen] = useState(false)
   const [notes, setNotes] = useState([])
   // for edit
   const [currentNote, setCurrentNote] = useState(null)
   // for filtering notes
   const [filteredNotes, setfilteredNotes] = useState([])
   const [query, setQuery] = useState('')

   useEffect(() => {
    
    fetchNotes()
   }, [])

   useEffect( () => {
    setfilteredNotes(
      notes.filter((note) =>
      note.title.toLowerCase().includes(query.toLocaleLowerCase()) ||
      note.description.toLowerCase().includes(query.toLocaleLowerCase()))
    )
   }, [query,notes])

   const fetchNotes = async () => {
    try {
      const {data} = await axios.get("http://localhost:3000/api/note",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          }
        })
      setNotes(data.notes)
    } catch (error) {
      console.log(error);
      
    }
  }

   const closeModal = () => {
    setModalOpen(false)
   }

   // for edit
   const onEdit = (note) => {
    setCurrentNote(note)
    setModalOpen(true)
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
          fetchNotes()
          // navigate('/')
          closeModal()
      }   
  }
  catch(error){
      console.log(error);          
  }
   }

   const editNote = async (id, title, description) => {
    try{
      // maile axios request lagayera server ma title, description send gareko server lai
      const response = await axios.put(`http://localhost:3000/api/note/${id}`,{ title, description },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        }
      );
      console.log(response); 
      if(response.data.success){
          fetchNotes()
          // navigate('/')
          closeModal()
      }   
  }
  catch(error){
      console.log(error);          
  }

   }

   const deleteNote = async (id) => {

    try{
      // maile axios request lagayera server ma title, description send gareko server lai
      const response = await axios.delete(`http://localhost:3000/api/note/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        }
      );
      console.log(response); 
      if(response.data.success){
        toast.success('Note deleted')
          fetchNotes()
          // navigate('/')
          // closeModal()
      }   
  }
  catch(error){
      console.log(error);          
  }

   }

  return (
    <div className=' bg-gray-100 min-h-screen'>
    <Navbar setQuery={setQuery}/>

    <div className=' px-8 pt-4 grid grid-cols-1 md:grid-cols-3 gap-6'>
      {filteredNotes.length > 0 ? filteredNotes.map((note) => (
        <NoteCard
          note={note} key={note._id} 
          onEdit={onEdit}
          deleteNote={deleteNote}
        />
      )) : <h1 className=' text-red-600 text-xl'>Note Not Found</h1>}
    </div>

    <button onClick={() => setModalOpen(true)}
     className=' fixed right-4 bottom-4 text-2xl bg-teal-500 text-white font-bold p-4 rounded-full'>
        +
    </button>
    {isModalOpen && <NoteModel closeModal={closeModal} addNote={addNote} currentNote={currentNote} editNote={editNote}/>}

    </div>
  )
}

export default Home