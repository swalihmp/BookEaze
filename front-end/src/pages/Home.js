import React from 'react'
import Navbar from '../components/user/Navbar'
import { Link } from 'react-router-dom'
import Service1 from '../images/service1.png'
import Service2 from '../images/service2.png'
import Service3 from '../images/service3.png'
import Service4 from '../images/service4.png'
import Resort1 from '../images/resort22.webp'
import Footer from '../components/user/Footer'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../utils/config'
import { details } from '../utils/config'
import SingleProperty from './user/SingleProperty'

function Home() {
  const [Property, setProperty] = useState([])


  async function getProperty() {
      const response = await axios.get(`${BASE_URL}/property/getproperty/`)
      setProperty(response.data?.slice(0,4))
  }

  useEffect(()=>{
      getProperty();
  }, [])




  return (
    <div className='w-full h-screen'>
      <Navbar/>
      <div className='h-full m-5'>
        <div className="w-full rounded-2xl flex place-content-center place-items-center bg-black bg-opacity-50 bg-blend-overlay h-4/5 font-poppins bg-[url('images/hero.png')]">
            <div className="w-3/5 p-5 flex-col flex place-content-center place-items-center gap-5">
              <h1 className='text-6xl text-white w-full leading-snug py-3'>
                Vaccation To Be Remembered.
              </h1>
              <p className='text-md text-white'>Find the best hotels and places to visit near you in a single click with atractive price and offers.</p>
              <div className="w-full place-content-center flex py-2">
                <Link to="/listhotels" className='bg-blue-50 text-black font-semibold py-3 px-8 lg:px-5 lg:py-2 shadow-xl rounded-lg '>Properties</Link>
              </div>
            </div>
        </div>
        <div className='flex justify-between pt-7 pb-5'>
          <div className='w-80 h-60 shadow-xl bg-blue-50 rounded-2xl'>
            <div className='w-60 mt-10 ml-8 flex flex-col'>
              <img className='w-8 pb-4' alt='' src={Service1}/>
              <p className='pb-4'>Get Best Prices</p>
              <p className='pb-4'>Pay through our application and save thousands and get amazing rewards.</p>
            </div>
          </div>
          <div className='w-80 h-60 shadow-xl bg-blue-50 rounded-2xl'>
            <div className='w-60 mt-10 ml-8 flex flex-col'>
              <img className='w-8 pb-4' alt='' src={Service2}/>
              <p className='pb-4'>Healthly Safe</p>
              <p className='pb-4'>We have all the incubated hotels that have all the precaution for a better health and safe environment.</p>
            </div>
          </div>
          <div className='w-80 h-60 shadow-xl bg-blue-50 rounded-2xl'>
            <div className='w-60 mt-10 ml-8 flex flex-col'>
              <img className='w-8 pb-4' alt='' src={Service3}/>
              <p className='pb-4'>Flexible Payment</p>
              <p className='pb-4'>Enjoy the flexible payment through our app and get rewards on every payment.</p>
            </div>
          </div>
          <div className='w-80 h-60 shadow-xl bg-blue-50 rounded-2xl'>
            <div className='w-60 mt-10 ml-8 flex flex-col'>
              <img className='w-8 pb-4' alt='' src={Service4}/>
              <p className='pb-4'>Find The Best Near You</p>
              <p className='pb-4'>Find the best hotels and places to visit near you in a single click.</p>
            </div>
          </div>
        </div>
        <div className='flex place-content-center place-items-center pb-6 pt-6'>
          <p className=' text-2xl font-bold'>Featured Properties</p>
        </div>



        <div className='flex place-content-center place-items-center gap-8 pl-8 pr-8 pt-5 pb-5'>
        {
          Property?.map((property,index)=>(
          <div className='w-72 h-96 shadow-xl p-3 bg-bgcard2 rounded-2xl'>
            <div className='w-full place-content-center place-items-center'>
              <img className='w-full h-36 rounded-t-xl' alt='' src={details+property.image_one}/>
            </div>
            <div className='w-60 mt-5 ml-3 flex flex-col'>
              <p className='pb-4 font-bold'>{property.name}</p>
              <div className='h-24'>
                <p className='pb-4'>{property.address}</p>
              </div>
              
              <div className='flex font-bold justify-between'>
                <p className='pb-4'>Pool , WiFi</p>
                <p className='pb-4'>${property.price}/-</p>
              </div>
            </div>
          </div>
          ))
        }



        </div>
        <Footer/>
      </div>
      
    </div>
    
  )
}

export default Home