import React from 'react'
import axios from 'axios'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Nav_log_signin from '../components/Nav_log_signin';

const Signup = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e)=>{
        e.preventDefault();
        try{
            // maile axios request lagayera server ma name,email,password send gareko server lai
            const response = await axios.post('http://localhost:3000/api/auth/register',{name,email,password});
            console.log(response); 
            if(response.data.success){
                navigate('/login')
            }   
        }
        catch(error){
            console.log(error);          
        }
    }

  return (
    <>
    <div>
        <Nav_log_signin/>
    </div>
    <div className=' flex justify-center items-center min-h-screen bg-gray-100'>
        <div className=' border shadow p-6 w-80 bg-white'>
        <h2 className=' text-2xl font-bold mb-4'>Signup</h2>
        <form onSubmit={handleSubmit}>
            <div className=' mb-4'>
                <label className=' block text-gray-700' >Name</label>
                <input type="text" 
                onChange={e => setName(e.target.value)}
                placeholder='Enter Name'
                className=' w-full px-3 py-2 border'
                 required/>
            </div>
            <div className=' mb-4'>
                <label className=' block text-gray-700' htmlFor="email">Email</label>
                <input type="email" placeholder='Enter Email'
                onChange={e => setEmail(e.target.value)}
                className=' w-full px-3 py-2 border'
                required/>
            </div>
            <div className=' mb-4'>
                <label className=' block text-gray-700' htmlFor="password">Password</label>
                <input type="password" placeholder='Enter Password'
                onChange={e => setPassword(e.target.value)}
                className=' w-full px-3 py-2 border'
                required/>
            </div>
            <div className=' mb-4'>
            <button type='submit' className=' w-full bg-teal-600 text-white py-2'>Signup</button>
            <p className=' text-center'>
                Already Have Account?  <Link to="/login">Login</Link>
            </p>
            </div>
        </form>

        </div>
    </div>
    </>
  )
}

export default Signup