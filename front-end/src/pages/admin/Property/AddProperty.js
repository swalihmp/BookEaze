import React from 'react'
import { useState } from 'react';
import PropertyFrom1 from './PropertyFrom1';
import PropertyForm2 from './PropertyForm2';
import { Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Sidebar from '../../../components/admin/Sidebar';
import { useSelector } from 'react-redux'
import { BASE_URL } from '../../../utils/config';
import axios from 'axios'
import { toast} from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'


export default function AddProperty() {
    const [activeStep,setActiveStep] = useState(0);
    const {createproperty} = useSelector(state=>state.createproperty)

    const history = useNavigate()

    function handleBack(){
        setActiveStep((prev)=>prev-1)
    }
   function handleNext(){
        setActiveStep((prev)=>prev+1)
    }


    const formContent = (step)=>{
        switch(step){
            case 0:
                return <PropertyFrom1 />
            case 1:
                return <PropertyForm2 />
            default:
                return <Navigate to="/ahotel"/>
        }
    }

    const Submitdata = async (e) => {
        e.preventDefault()

        const form = new FormData()
        form.append('owner',createproperty.owner)
        form.append('name', createproperty.name)
        form.append('place', createproperty.place)
        form.append('location', createproperty.location,)
        form.append('price',createproperty.price)
        form.append('address',createproperty.address)
        form.append('description',createproperty.description)
        form.append('phone_number',createproperty.phone_number)
        form.append('zipcode',createproperty.zipcode)
        form.append('rooms_available',createproperty.rooms_available)
        form.append('room_type',createproperty.room_type)
        form.append('image_one',createproperty.image_one)
        
        form.append('image_two',createproperty.image_two)
        form.append('image_three',createproperty.image_three)
        form.append('image_four',createproperty.image_four)
        form.append('pool_available',createproperty.pool_available)
        form.append('wifi_available',createproperty.wifi_available)

        console.log(form.data)
  
        const res = await axios({
          method: 'post',
          url: `${BASE_URL}/property/createproperty/`,
          data: form
        })
        console.log(res);
        if (res.status === 200) {
          history('/ahotel',{state:{msg:"Course Created"}})
          
        } else {
          toast.success("Somthing Wrong")
        }
      }

  return (
<div className='flex w-full h-auto'>
        <Sidebar/>
        <div className="w-full h-auto flex flex-col place-content-center shadow-xl rounded-md m-5">
            <Toaster position='top-center' limit={3}></Toaster>
            <div className='w-full h-auto flex flex-col place-content-start place-items-start px-20'>
                {formContent(activeStep)}
            </div>
            <div className='w-full py-4 flex pb-5 pt-5 place-content-center px-20'>
                    <div className={activeStep>0 ? "flex place-content-between w-full" : "flex place-content-end w-full"}>
                        {activeStep>0 ? 
                            <button className='bg-cards rounded-xl px-4 py-3 text-center text-white font-semibold w-[25%]' onClick={handleBack} >Back</button>
                            : null
                        }

                        {activeStep!==1 ? <button className='bg-cards rounded-xl px-4 py-3 text-center text-white font-semibold w-[25%]' onClick={handleNext} >Next</button>
                       
                        :
                        <button type='button' className='bg-cards rounded-xl px-4 py-3 text-center text-white font-semibold w-[25%]'  onClick={Submitdata}>Submit</button>
                        }
                        
                    </div>
                       
            </div>
        </div>
        
    </div>
  )
}
