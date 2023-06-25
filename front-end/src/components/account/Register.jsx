import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './account.css'
import { toast, Toaster } from 'react-hot-toast'
import { BASE_URL } from '../../utils/config'

import Background from '../../images/trylogin.jpg'
import Travels from '../../images/travel-login.png'

export default function Register() {
  const [first_name, setFirstname] = useState('')
  const [last_name, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [phone_number, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')

  

  const signupSubmit = async (e) => {
    e.preventDefault()
    if(first_name==="" || last_name==="" || email==="" || phone_number==="" || password==="" || password2===""){
      toast.error("Pls Fill All Data")
    }
    else{
      if (password === password2) {
        const response = await fetch(`${BASE_URL}/api/register/`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            first_name,
            last_name,
            email,
            username: email.split('@')[0],
            phone_number,
            password,
          })
        })
        // console.log(response);
        if (response.status === 200) {
          toast.success("Account Created, Please Activate..!")
        } else {
          toast.error("Something went wrong")
          e.target.reset()
        }
      }
      else {
        toast.error("Password did't match")
      }
    }


  }


  return (
    <div className='main-div-signup'>
      <Toaster position='top-center' reverseOrder='false' ></Toaster>
      <div className="register-background-contain">
        <img src={Background} alt="" />
      </div>
      <div className="absolute top-4 left-10 flex flex-col py-8 w-5/6 lg:top-32 lg:left-52 lg:w-3/4 lg:h-auto lg:flex-row items-center bg-white bg-opacity-60 rounded-3xl">
        <div className='register-content'>
          <h1 className='font-bold text-3xl mb-1 login-text'>SignUp</h1>
          <p className='w-full'>Please Enter Your SignUp Details</p>
          <form className='register-input' onSubmit={signupSubmit} >
            <input className='h-10 w-96 text-black mt-1 bg-transparent border-[3px] border-blue-900 rounded-sm pl-5 outline-none placeholder:text-blue-900' type="text" name='firstname' placeholder='firstname'
              onChange={e => setFirstname(e.target.value)}
            />
            <input className='h-10 w-96 text-black mt-1 bg-transparent border-[3px] border-blue-900 rounded-sm pl-5 outline-none placeholder:text-blue-900' type="text" name='lastname' placeholder='lastname'
              onChange={e => setLastname(e.target.value)}
            />
            <input className='h-10 w-96 text-black mt-1 bg-transparent border-[3px] border-blue-900 rounded-sm pl-5 outline-none placeholder:text-blue-900' type="email" name='email' placeholder='email'
              onChange={e => setEmail(e.target.value)}
            />
            <input className='h-10 w-96 text-black mt-1 bg-transparent border-[3px] border-blue-900 rounded-sm pl-5 outline-none placeholder:text-blue-900' type="text" name='phone_number' placeholder='phone'
              onChange={e => setPhone(e.target.value)}
            />
            <input className='h-10 w-96 text-black mt-1 bg-transparent border-[3px] border-blue-900 rounded-sm pl-5 outline-none placeholder:text-blue-900' type="password" name='password' placeholder='password'
              onChange={e => setPassword(e.target.value)}
            />
            <input className='h-10 w-96 text-black mt-1 bg-transparent border-[3px] border-blue-900 rounded-sm pl-5 outline-none placeholder:text-blue-900' type="password" name='password2' placeholder='confirm password'
              onChange={e => setPassword2(e.target.value)}
            />
            <input className='h-10 w-96 text-blue-900 font-bold text-lg border-[3px] border-blue-900 rounded-sm' type="submit" value='SIGNUP' />
            <div className='w-96 font-bold'>
              <p className='hidden lg:flex'>Alredy a member..?</p>
              <p><Link className='lo-sign' to='/login'>Login</Link></p>
            </div>
          </form>
        </div>
        <div className="register-image-full-container">
        {/* travel-img-container */}
          <div className="w-75 lg:w-[80%]">
            <img className='travel-img' src={Travels} alt="" />
          </div>
        </div>
      </div>


    </div>
  )
}
