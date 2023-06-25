import React from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineSearch} from 'react-icons/ai'
import {BsCart3} from 'react-icons/bs'
import { MdHomeWork } from 'react-icons/md'
import { BsFillBuildingFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { getLocal } from '../../helpers/auth'
import jwtDecode from 'jwt-decode'

export default function Navbar() {
  const navigate = useNavigate()

  const user_auth = getLocal('authToken');
  let user_name;
  if(user_auth){
    user_name = jwtDecode(user_auth)
    
  }

  const logout = () => {
    localStorage.removeItem('authToken')
    navigate('/login')
  }




  return (
    <div className='w-100 h-18  m-5 rounded-2xl shadow-2xl flex font-poppins px-5 p-4 place-items-center place-content-center gap-8'>
      <div className="flex flex-1 place-items-center place-content-start gap-12">
          <h1 className='font-semibold text-2xl text-black'>BookEaze</h1>
          <div className="flex px-6 rounded-3xl border-2 border-black py-1 place-items-center ms-3">
            <AiOutlineSearch className='text-black' size={20}></AiOutlineSearch>
            <input type="text" className='focus:outline-none ms-2 bg-transparent placeholder:text-black' placeholder='search for Hotel'/>
          </div>
      </div>
      
        <div className='flex gap-8 place-items-center'>
            
            <Link to="/"><MdHomeWork size={23}/><li className='px-1 list-none text-black'>Home</li></Link>
            
            <Link to="/listhotels"><BsFillBuildingFill size={23}/><li className='px-1 list-none text-black'>Properties</li></Link>

        </div> 

 
        <div className='flex flex-row'>
          {user_auth ? 
              
            <div className='flex gap-2'>
              <li className='px-1 list-none'></li><button onClick={logout} className='px-4 py-2 bg-red-400 mx-2 text-white shadow-xl rounded-xl'>Logout</button>

            </div> 
            :
            <div className='flex gap-2'>
              <Link to="/login"><li className='px-1 list-none'></li><button className='px-6 py-2 bg-red-400 mx-2 text-white shadow-xl rounded-xl'>Login</button></Link>

            </div> 
          }
            
        </div> 
           
    </div>
  )
}
