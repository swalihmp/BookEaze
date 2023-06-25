import React from 'react'
import Navbar from '../../components/user/Navbar'
import { Radio } from "@material-tailwind/react";
import { Link } from 'react-router-dom';
import axios from 'axios'
import { BASE_URL } from '../../utils/config'
import { details } from '../../utils/config'
import { useState,useEffect } from 'react';

export default function ListHotel() {
    const [Property, setProperty] = useState([])


    async function getProperty() {
        const response = await axios.get(`${BASE_URL}/property/getproperty/`)
        setProperty(response.data)
    }

    useEffect(()=>{
        getProperty();
    }, [])



  return (
    <div className='w-full h-screen'>
      <Navbar/>
      <div className='p-5 w-full h-full min-h-screen flex'>
            <div className="shadow-xl w-1/5 h-auto px-5 rounded-xl bg-white flex flex-col gap-5 py-5">
                <div className="w-full flex flex-col">
                    <h2 className='text-lg  font-semibold '>Sort By</h2>
                    <div className='flex-1 flex flex-col pt-4 place-items-start place-content-center px-1'>
                        <select name='places' className="text-black px-5 py-1 border-2 rounded-xl  w-full">
                            <option value="default">Choose City</option>
                            <option value="a">Kozhikkode</option>
                            <option value="b">Malappuram</option>
                        </select>
                    </div>
                </div>
                <h2 className='text-lg font-semibold'>Filter</h2>
              
                
                <div className="w-full flex flex-col">
                    <h2 className='text-lg  font-normal '>Price</h2>
                    <Radio id="free" name="price" label="All" defaultChecked />
                    <Radio id="free" name="price" label="Free" />
                    <Radio id="preemium" name="price" label="Preemium"/>
                </div>
            </div>
            <div className="w-full flex flex-col gap-4 mx-3">
                <div className="w-full mt-10">
                    <h3 className='text-lg font-normal pl-2'>10 results</h3>
                    {
                        Property?.map((property,index)=>(
                        <div className='flex flex-col gap-3'>
                            <Link to={`/singleproperty/${property?.id}`} className="w-full px-3 py-5 rounded-xl shadow-2xl my-2 flex gap-5 cursor-pointer">
                                <div className='w-1/5 h-40'>
                                    <img className='w-full h-full rounded-md' src={details+property.image_one} alt="course_image" />
                                </div>
                            <div className=' w-3/5 flex flex-col place-content-start gap-3'>
                                <h1 className='text-2xl font-semibold'>{property.name}</h1>
                                <h3 className='text-xl font-semibold'>{property.place}</h3>
                                <p className='text-gray-600 font-normal'>Free Cancellation Available till Checkin</p>
                                <div className="w-full flex flex-col gap-2 place-items-center">
                                   <div className="flex gap-3 w-full place-content-start">
                                    {
                                        property.pool_available ?
                                        <p className='text-sm font-semibold'>Pool Available</p>
                                        :
                                        <p className='text-sm font-semibold'>Pool Not Available</p>
                                    }
                                    {
                                        property.wifi_available ?
                                        <p className='text-sm font-semibold'>Wifi Available</p>
                                        :
                                        <p className='text-sm font-semibold'>Wifi Not Available</p>
                                    }
                                   </div>
                                </div>
                            </div>
                            
                            </Link>
                        
                        </div>
                        ))
                    }
                </div>
            </div>
        </div>
      
    </div>
  )
}
