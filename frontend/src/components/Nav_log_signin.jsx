// this navbar is for login and signup pages
import React from 'react'
import { Link } from 'react-router-dom'

const Nav_log_signin = () => {
  return (
   <nav className=' bg-gray-800 p-4 text-white flex justify-between items-center' >
    <div className=' text-xl font-bold'>
        <Link to="/" >NoteApp</Link>
    </div>
    <input type='text'  className='  bg-gray-800 px-4 py-2 rounded' disabled />
    <div>
        {/* <span className=' mr-4'>user name</span>
        <Link to="/login" className=' bg-blue-500 px-4 py-2 rounded mr-4'>
            Login
        </Link>
        <Link to="/register" className=' bg-blue-500 px-4 py-2 rounded mr-4'>
            Signup
        </Link> */}

        {/* <button className='px-4 py-2 rounded' >
            
        </button> */}
    </div>

   </nav>


  )
}

export default Nav_log_signin 
