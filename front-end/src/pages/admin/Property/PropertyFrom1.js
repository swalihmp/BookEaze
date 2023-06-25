import React from 'react';
import { updatecreateproperty } from '../../../redux/createPropertySlice'
import { useDispatch, useSelector } from 'react-redux'

export default function PropertyFrom1() {
    const dispatch = useDispatch()
    const {createproperty} = useSelector(state=>state.createproperty)


  return (
  <div className="flex items-center w-full  rounded-2xl shadow-xl px-4 py-8">
    <form encType="multipart/form-data" className="font-poppins w-full gap-8 flex flex-col place-content-evenly px-5 pb-10">

        <div className="flex w-full place-content-around">
            <div className='flex-1 flex flex-col place-items-start place-content-center px-1'>
                <label htmlFor="title" className="text-primaryBlue font-semibold text-xl ppy-2">Property Name</label>
                <input type="text" name="name" placeholder="Enter the Property Name" className="text-black px-5 py-1 border-b-2 focus:outline-none focus:border-primaryBlue w-full" onChange={(e)=>dispatch(updatecreateproperty({...createproperty,name:e.target.value}))} required/>
            </div>
            <div className='flex-1 flex flex-col place-items-start place-content-center px-1'>
                <label htmlFor="title" className="text-primaryBlue font-semibold text-xl ppy-2">Place</label>
                <input type="text" name="place" placeholder="Enter the Place" className="text-black px-5 py-1 border-b-2 focus:outline-none focus:border-primaryBlue w-full" onChange={(e)=>dispatch(updatecreateproperty({...createproperty,place:e.target.value}))} required/>
            </div>
        </div>

        <div className="flex w-full place-content-around">
            <div className='flex-1 flex flex-col place-items-start place-content-center px-1'>
                <label htmlFor="title" className="text-primaryBlue font-semibold text-xl ppy-2">Price</label>
                <input type="text" name="price" placeholder="Enter the Price" className="text-black px-5 py-1 border-b-2 focus:outline-none focus:border-primaryBlue w-full" onChange={(e)=>dispatch(updatecreateproperty({...createproperty,price:e.target.value}))} required/>
            </div>
            <div className='flex-1 flex flex-col place-items-start place-content-center px-1'>
                <label htmlFor="location" className="text-primaryBlue font-semibold text-xl py-2">Location</label>
                <select name="location"  placeholder="Select course category" className="text-black px-5 py-1 border-b-2 focus:outline-none focus:border-primaryBlue w-full" onChange={(e)=>dispatch(updatecreateproperty({...createproperty,location:e.target.value}))} required>
                    <option value="select">Select</option>
                    <option value="Kozhikkode" className=' first-letter:uppercase'>Kozhikkode</option>  
                    <option value="Malappuram" className=' first-letter:uppercase'>Malappuram</option>  
                    <option value="Kochi" className=' first-letter:uppercase'>Kochi</option>       
                </select>
            </div>
        </div>
        <div className='w-full flex flex-col place-items-start place-content-center'>
            <label htmlFor="owner" className="text-primaryBlue font-semibold text-xl py-2">Owner Name</label>
            <textarea name="owner" placeholder="Enter the Owner" className="text-black px-5 py-1 border-b-2 focus:outline-none focus:border-primaryBlue w-full" onChange={(e)=>dispatch(updatecreateproperty({...createproperty,owner:e.target.value}))} required/>
        </div>
        <div className='w-full flex flex-col place-items-start place-content-center'>
            <label htmlFor="address" className="text-primaryBlue font-semibold text-xl py-2">Address</label>
            <textarea name="address" placeholder="Enter the Address" className="text-black px-5 py-1 border-b-2 focus:outline-none focus:border-primaryBlue w-full" onChange={(e)=>dispatch(updatecreateproperty({...createproperty,address:e.target.value}))} required/>
        </div>

        <div className='w-full flex flex-col place-items-start place-content-center'>
            <label htmlFor="description" className="text-primaryBlue font-semibold text-xl py-2">Description</label>
            <textarea name="description" placeholder="Enter the course description" className="text-black px-5 py-1 border-b-2 focus:outline-none focus:border-primaryBlue w-full" onChange={(e)=>dispatch(updatecreateproperty({...createproperty,description:e.target.value}))} required/>
        </div>

        <div className="flex w-full place-content-around">
            <div className='flex-1 flex flex-col place-items-start place-content-center px-1'>
                <label htmlFor="phone_number" className="text-primaryBlue font-semibold text-xl ppy-2">Phone Nubmer</label>
                <input type="text" name="phone_number" placeholder="Enter Phone Number" className="text-black px-5 py-1 border-b-2 focus:outline-none focus:border-primaryBlue w-full" onChange={(e)=>dispatch(updatecreateproperty({...createproperty,phone_number:e.target.value}))} required/>
            </div>
            <div className='flex-1 flex flex-col place-items-start place-content-center px-1'>
                <label htmlFor="zipcode" className="text-primaryBlue font-semibold text-xl ppy-2">Zipcode</label>
                <input type="text" name="zipcode" placeholder="Enter the course title" className="text-black px-5 py-1 border-b-2 focus:outline-none focus:border-primaryBlue w-full" onChange={(e)=>dispatch(updatecreateproperty({...createproperty,zipcode:e.target.value}))} required/>
            </div>
        </div>

        <div className="flex w-full place-content-around">
            <div className='flex-1 flex flex-col place-items-start place-content-center px-1'>
                <label htmlFor="rooms_available" className="text-primaryBlue font-semibold text-xl ppy-2">No.of Rooms</label>
                <input type="text" name="rooms_available" placeholder="Enter the course title" className="text-black px-5 py-1 border-b-2 focus:outline-none focus:border-primaryBlue w-full" onChange={(e)=>dispatch(updatecreateproperty({...createproperty,rooms_available:e.target.value}))} required/>
            </div>
            <div className='flex-1 flex flex-col place-items-start place-content-center px-1'>
                <label htmlFor="room_type" className="text-primaryBlue font-semibold text-xl ppy-2">Room Type</label>
                <input type="text" name="room_type" placeholder="Enter the course title" className="text-black px-5 py-1 border-b-2 focus:outline-none focus:border-primaryBlue w-full" onChange={(e)=>dispatch(updatecreateproperty({...createproperty,room_type:e.target.value}))} required/>
            </div>
        </div>
    </form>
  </div>
  )
}
