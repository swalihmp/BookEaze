import React from 'react'
import { Toaster } from 'react-hot-toast'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import { useState,useEffect } from 'react';
import axios from 'axios'
import { BASE_URL } from '../../utils/config'
import { details } from '../../utils/config';
import SingleProperty from '../user/SingleProperty';
import { toast } from 'react-hot-toast';

export default function EditProperty({toggle,setToggle}) {

    const [singleProperty, setsingleProperty] = useState({});
    const [owner,setOwner] = useState('')
    const [name,setName] = useState('')
    const [place,setPlace] = useState('')
    const [location,setLocation] = useState('')
    const [price,setPrice] = useState('')
    const [address,setAddress] = useState('')
    const [description,setDescription] = useState('')
    const [phone_number,setPhone_number] = useState('')
    const [zipcode, setZipcode] = useState('')
    const [rooms_available, setRoom_available] = useState('')
    const [room_type,setRoom_type] = useState('')


    useEffect(() => {
        getProperty();
    }, [])

    async function getProperty() {
        const response = await axios.get(`${BASE_URL}/property/singleproperty/${toggle.edit}`)
        console.log(response.data)
        setsingleProperty(response.data)

        setOwner(response.data.owner)
        setName(response.data.name)
        setPlace(response.data.place)
        setLocation(response.data.location)
        setPrice(response.data.price)
        setAddress(response.data.address)
        setDescription(response.data.description)
        setPhone_number(response.data.phone_number)
        setZipcode(response.data.zipcode)
        setRoom_available(response.data.rooms_available)
        setRoom_type(response.data.room_type)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

    
        const form = new FormData()

        form.append('owner',singleProperty.owner)
        form.append('name',name)
        form.append('place',place)
        form.append('location',location)
        form.append('price',price)
        form.append('address',address)
        form.append('description',description)
        form.append('phone_number',phone_number)
        form.append('zipcode',singleProperty.zipcode)
        form.append('rooms_available',singleProperty.rooms_available)
        form.append('room_type',singleProperty.room_type)
        




    
        const res = await axios({
          method: 'patch',
          url: `${BASE_URL}/property/updateproperty/${toggle.edit}`,
          data: form
        })
        console.log(res);
        if (res.status === 200) {
          toast.success('Success')
          setToggle({add:false})
        } else {
          toast.error(res.statusText)
        }
      }





  return (
    <div className='p-3 absolute z-50'>
    <Toaster position='top-center' limit={3}></Toaster>
     <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="fixed inset-0 w-full h-full bg-black opacity-40"></div>
        <div className="flex items-center min-h-screen px-4 py-8">
            <div className="relative w-full border-2 max-w-lg h-full p-4 mx-auto bg-white rounded-xl shadow-xl">
                <h2 className='text-center font-semibold text-2xl text-primaryBlue'>Edit Property</h2>
                <AiOutlineCloseCircle size={20} className="absolute top-0 right-0 m-2 cursor-pointer" onClick={() => setToggle(false)}></AiOutlineCloseCircle>
                <div className="mt-3 sm:flex place-content-center">
                <form className="font-poppins w-full h-full flex flex-col place-content-around"  encType="multipart/form-data" onSubmit={e => handleSubmit(e)} >
                    <div className='w-full flex place-items-start flex-col place-content-center py-2'>
                        <label htmlFor="Name" className="text-primaryBlue font-semibold text-lg ppy-2">Property Name</label>
                        <input type="text" name="Name" defaultValue={singleProperty?.name} className="text-black px-5 py-1 border-b-2 focus:outline-none focus:border-primaryBlue w-full" onChange={e => setName(e.target.value)}/>                        
                    </div>
                    <div className='w-full flex place-items-start flex-col place-content-center py-2'>
                        <label htmlFor="Name" className="text-primaryBlue font-semibold text-lg ppy-2">Property Place</label>
                        <input type="text" name="Name" defaultValue={singleProperty?.place} className="text-black px-5 py-1 border-b-2 focus:outline-none focus:border-primaryBlue w-full" onChange={e => setPlace(e.target.value)}/>                        
                    </div>
                    <div className='w-full flex place-items-start flex-col place-content-center py-2'>
                        <label htmlFor="description" className="text-primaryBlue font-semibold text-lg py-2">Location</label>
                        <select name="session" onChange={e => setLocation(e.target.value)} id="category"  className="text-black px-5 py-1 border-b-2 focus:outline-none focus:border-primaryBlue w-full">
                            <>
                            <option value={singleProperty.location}>{singleProperty.location}</option>
                            <option value="Kozhikkode">Kozhikkode</option>
                            <option value="Malappuram">Malappuram</option>
                            <option value="Kochi">Kochi</option>
                            
                            </>
                        </select>  
                    </div>
                    <div className='w-full flex place-items-start flex-col place-content-center py-2'>
                        <label htmlFor="Name" className="text-primaryBlue font-semibold text-lg ppy-2">Property Owner</label>
                        <input type="text" name="Name" defaultValue={singleProperty?.owner} className="text-black px-5 py-1 border-b-2 focus:outline-none focus:border-primaryBlue w-full" onChange={e => setOwner(e.target.value)}/>                        
                    </div>
                    <div className='w-full flex place-items-start flex-col place-content-center py-2'>
                        <label htmlFor="Name" className="text-primaryBlue font-semibold text-lg ppy-2">Property Price</label>
                        <input type="text" name="Name" defaultValue={singleProperty?.price} className="text-black px-5 py-1 border-b-2 focus:outline-none focus:border-primaryBlue w-full" onChange={e => setPrice(e.target.value)}/>
                    </div>
                    <div className='w-full flex place-items-start flex-col place-content-center py-2'>
                        <label htmlFor="Name" className="text-primaryBlue font-semibold text-lg ppy-2">Address</label>
                        <input type="text" name="Name" defaultValue={singleProperty?.address} className="text-black px-5 py-1 border-b-2 focus:outline-none focus:border-primaryBlue w-full" onChange={e => setAddress(e.target.value)}/>                       
                    </div>
                    <div className='w-full flex place-items-start flex-col place-content-center py-2'>
                        <label htmlFor="Name" className="text-primaryBlue font-semibold text-lg ppy-2">Property Discription</label>
                          
                        <textarea name="description" defaultValue={singleProperty?.description} className="text-black px-5 py-1 border-b-2 focus:outline-none focus:border-primaryBlue w-full" onChange={e => setDescription(e.target.value)} />                      
                    </div>
                    <div className='w-full flex place-items-start flex-col place-content-center py-2'>
                        <label htmlFor="Name" className="text-primaryBlue font-semibold text-lg ppy-2">Phone Number</label>
                        <input type="text" name="Name" defaultValue={singleProperty.phone_number} onChange={e => setPhone_number(e.target.value)} className="text-black px-5 py-1 border-b-2 focus:outline-none focus:border-primaryBlue w-full"/>                        
                    </div>


                    <div className='w-full flex place-items-start flex-col place-content-center py-2'>
                        <label htmlFor="Name" className="text-primaryBlue font-semibold text-lg ppy-2">Zip Code</label>
                        <input type="text" name="Name" defaultValue={singleProperty.zipcode} onChange={e => setZipcode(e.target.value)} className="text-black px-5 py-1 border-b-2 focus:outline-none focus:border-primaryBlue w-full"/>                        
                    </div>
                    <div className='w-full flex place-items-start flex-col place-content-center py-2'>
                        <label htmlFor="Name" className="text-primaryBlue font-semibold text-lg ppy-2">Rooms Available</label>
                        <input type="text" name="Name" defaultValue={singleProperty.rooms_available} onChange={e => setRoom_available(e.target.value)} className="text-black px-5 py-1 border-b-2 focus:outline-none focus:border-primaryBlue w-full"/>                        
                    </div>
                    <div className='w-full flex place-items-start flex-col place-content-center py-2'>
                        <label htmlFor="Name" className="text-primaryBlue font-semibold text-lg ppy-2">Room Type</label>
                        <input type="text" name="Name" defaultValue={singleProperty.room_type} onChange={e => setRoom_type(e.target.value)} className="text-black px-5 py-1 border-b-2 focus:outline-none focus:border-primaryBlue w-full"/>                        
                    </div>





                    <div className='py-2 px-3 flex place-content-center rounded-xl w-full'>
                        <button className='bg-cards rounded-lg text-center px-5 py-2 text-white text-light'>Update</button>
                    </div>
                   
                </form>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}