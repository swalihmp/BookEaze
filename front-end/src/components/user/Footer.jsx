import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='w-full bg-black p-5 rounded-2xl '>
        <div className="flex gap-3 place-content-center">
            <Link to="/" className='text-white list-none text-xl'>Home</Link>
            <Link to="/listhotels" className='text-white list-none text-xl'>Hotels</Link>
        </div>
        <div className="w-full flex place-content-center">
            <p className='text-md text-gray-600'>© 2023 BookEaze. Private Limited. All rights reserved</p>
        </div>
    </div>
  )
}

export default Footer