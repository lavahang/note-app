import React, { useState } from 'react'

const NoteModel = ({closeModal}) => {
    const [title,setTitle] = useState("")
    const [description, setDescription] = useState("")

    const handleSubmit = async (e)=>{
        e.preventDefault();
        try{
            // maile axios request lagayera server ma title, description send gareko server lai
            const response = await axios.post('http://localhost:3000/api/note/add',{title, description});
            console.log(response); 
            if(response.data.success){
                navigate('/')
                closeModal()
            }   
        }
        catch(error){
            console.log(error);          
        }
    }
  return (
    <div className=' fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center'>
        <div className=' bg-white p-8 rounded'>
            <h2 className=' text-xl font-bold mb-4'>Add New Note</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}
                placeholder='Note Title' className=' border p-2 w-full mb-4' />
                <textarea 
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder='Note Description'
                    className=' border p-2 w-full mb-4'
                />
                <button type='submit' className=' bg-blue-500 text-white px-4 py-2 rounded'>
                    Add Note
                </button>
              
            </form>
            <button className=' mt-4 text-red-500' onClick={closeModal}>Cancel</button>
        </div>


    </div>
  )
}

export default NoteModel