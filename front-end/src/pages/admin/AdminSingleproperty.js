import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../utils/config';
import axios from 'axios'
import Sidebar from '../../components/admin/Sidebar';
import { details } from '../../utils/config';
import { Tabs, TabsHeader, Tab, TabPanel, TabsBody } from '@material-tailwind/react'


export default function AdminSingleproperty() {
    const navigate = useNavigate()
    const property_id = useParams()
    const [SingleProperty, setSinglePropertye] = useState({})


    useEffect(() => {
        getProperty();
    }, [])

    async function getProperty() {
        const response = await axios.get(`${BASE_URL}/property/singleproperty/${property_id.id}`)
        setSinglePropertye(response.data)
        console.log(response.data)

    }

  return (
    <div className='w-full h-screen'>
      <div className='w-full flex flex-row place-content-center'>
        <div class="grid mt-5 ml-5 w-3/6 place-content-center place-items-center gap-4">
            <div>
                <img class="h-80 max-w-full rounded-lg" src={details+SingleProperty.image_one} alt=""/>
            </div>
            <div class="grid grid-cols-4 gap-4">
                <div>
                    <img class="h-28 w-48 rounded-lg" src={details+SingleProperty.image_one} alt=""/>
                </div>
                <div>
                    <img class="h-28 w-48 rounded-lg" src={details+SingleProperty.image_two} alt=""/>
                </div>
                <div>
                    <img class="h-28 w-48 rounded-lg" src={details+SingleProperty.image_three} alt=""/>
                </div>
                <div>
                    <img class="h-28 w-48 rounded-lg" src={details+SingleProperty.image_four} alt=""/>
                </div>
            </div>
        </div>
        <div className='h-4/5 flex flex-col mt-5 ml-10 pl-5 w-1/4'>
            <div className='flex flex-col pb-10'>
                <p className='text-2xl font-bold pt-5'>{SingleProperty.name}</p>
                <p className='text-2xl font-bold pt-5'>₹{SingleProperty.price}/-</p>

            </div>
            <div className='flex flex-col pb-10'>
                <p className='text-md pt-2'>{SingleProperty.address}</p>
                <div className='flex gap-4 flex-col w-full  pt-8'>
                    <button className='bg-blue-50 rounded-lg text-center px-5 py-2 text-black font-bold'>Pool Available</button>
                    <button className='bg-blue-50 rounded-lg text-center px-5 py-2 text-black font-bold'>WiFi Available</button>
                </div>
            </div>
        </div>
      </div>
      <div className='w-full flex pt-8 flex-col place-content-center place-items-center'>
        <div className='flex pr-4 w-4/5 h-full'>         
            <div className="w-full flex gap-3">
                <Tabs value="overview" className="w-full h-auto mr-4">
                    <TabsHeader className="bg-transparent" indicatorProps={{className: "bg-blue-500/10 shadow-none text-blue-500",}}>
                        <Tab key="overview" value="overview" className=' font-normal font-poppins py-3'>Overview</Tab>
                        <Tab key="reviews" value="reviews" className='font-normal font-poppins py-3'>Reviews</Tab>
                    </TabsHeader>
                    <TabsBody>
                        <TabPanel key="overview" value="overview">
                            <div className="w-full shadow-xl p-5  h-auto rounded-2xl">
                                <h1 className='text-xl font-semibold pt-2 text-black font-poppins'>Details About The Property</h1>
                                <p className='text-lg font-bold text-black pt-2 pb-2'>{SingleProperty.place}</p>
                                <p className='pb-2 font-bold text-black'>{SingleProperty.address}</p>
                                <p className='pb-2'>Owner : {SingleProperty.owner}</p>
                                <p className='pb-2'>Phone : {SingleProperty.phone_number}</p>
                                <p className='pb-2'>{SingleProperty.description}</p>
                                <p className='pb-2 font-bold text-black'>Room Type</p>
                                <p className='pb-2'>2BHK, The BHK full form is bedroom, hall and kitchen. It is used to convey the number of rooms in a property. For example, a 2BHK means that the particular property has two bedrooms, one hall and a kitchen. A 1 BHK means that the property has one bedroom, one hall and a kitchen.</p>
                                <p className='pb-2 font-bold text-black'>No. of Room</p>
                                <p className='pb-2'>{SingleProperty.rooms_available}</p>
                            </div>
                        </TabPanel>
                        <TabPanel key="reviews" value="reviews">
                            <div className="w-full shadow-lg p-5  h-36 rounded-xl">
                                <h1 className='text-xl font-semibold text-black font-poppins'>Property Reviews</h1>
                                <p className='text-gray-700'></p>
                            </div>
                        </TabPanel>
                    </TabsBody>
                </Tabs>
            </div>
        </div>
      </div>
    </div>
  )
}
