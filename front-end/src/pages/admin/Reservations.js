import React from 'react'
import Sidebar from '../../components/admin/Sidebar'
import { Toaster } from 'react-hot-toast'
import {BiHomeAlt2} from 'react-icons/bi'
import {BsBook} from 'react-icons/bs'
import axios from 'axios'
import { BASE_URL } from '../../utils/config'
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom'
import { BsEye } from 'react-icons/bs'


export default function Reservations() {
    const [Order, setOrder] = useState([])
  
  
    async function getProperty() {
        const response1 = await axios.get(`${BASE_URL}/payment/getorders/`)
        setOrder(response1.data.slice(0,4))
    }
  
    useEffect(()=>{
        getProperty();
    }, [])

  return (
    <div className='flex bg-acontent'>
    <Sidebar/>
        <div className='px-5 w-full h-full min-h-screen mx-5 mt-2  py-5 font-poppins flex flex-col place-content-start place-items-center bg-white shadow-xl rounded-2xl'>
        <div className=" h-20 w-full flex place-content-start place-items-center px-5">
            <h3 className='font-semibold text-primaryViolet text-2xl text-start'>All Reservations</h3>
        </div>
        <div class="overflow-hidden  m-5 w-full">
        <Toaster position='top-center' reverseOrder='false' ></Toaster>

            <div className="w-full flex place-content-between pb-10 pt-10">
            <div className="w-full h-full mt-10">
                    
            <div class="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5 w-auto">
            <table class="w-full border-collapse bg-white text-left text-sm text-gray-500">
            <thead class="bg-gray-50">
            <tr>
                <th scope="col" class="px-6 py-4 font-medium text-gray-900">SI No.</th>
                <th scope="col" class="px-6 py-4 font-medium text-gray-900">Booking Id</th>
                <th scope="col" class="px-6 py-4 font-medium text-gray-900">Property</th>
                <th scope="col" class="px-6 py-4 font-medium text-gray-900">Customer</th>
                <th scope="col" class="px-6 py-4 font-medium text-gray-900 ">Date</th>
                <th scope="col" class="px-6 py-4 font-medium text-gray-900">Status</th>
                <th scope="col" class="px-6 py-4 font-medium text-gray-900">View</th>
            </tr>
            </thead>
            <tbody class="divide-y divide-gray-100 border-t border-gray-100">
            {
                Order?.map((order,index)=>(
                <tr class="hover:bg-gray-50">
                    <th class="flex gap-3 px-6 py-4 font-normal text-gray-900">
                    <div class="px-6 py-4">
                        <p>{index+1}</p>
                    </div>
                    </th>
                    <td class="px-6 py-4">
                    <p>{order.order_id}</p>
                    </td>
                    <td class="px-6 py-4">
                        <p>{order.property?.name}</p>
                    </td>
                    <td class="px-6 py-4">
                        <p>{order.order_user?.username}</p>
                    </td>
                    <td class="px-6 py-4">
                        <p>{order.order_date}</p>
                    </td>
                    <td class="px-6 py-4">
                        <p>Success</p>
                    </td>  
                    <td class="px-6 py-4">
                        <div className="flex place-content-around gap-5">
                            <Link to={`/invoice/${order.order_payment_id
                                }`}  className="flex flex-col place-items-center cursor-pointer">
                            <BsEye size={20}></BsEye>
                            <p className="font-semibold ">View</p>
                            </Link>
                        </div>
                    </td>                
                </tr>
                ))
            }
            </tbody>
            </table>
                
            </div>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}
