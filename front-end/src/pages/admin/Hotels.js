import React from 'react'
import { Toaster,toast } from 'react-hot-toast'
import Sidebar from '../../components/admin/Sidebar'
import Resort1 from '../../images/resort22.webp'
import { Link } from 'react-router-dom'
import { BsEye } from 'react-icons/bs'
import {CiEdit} from 'react-icons/ci'
import { useState,useEffect } from 'react'
import { useNavigate,useLocation } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../../utils/config'
import { details } from '../../utils/config'
import EditProperty from './EditProperty'
import { AiOutlineDelete } from 'react-icons/ai';
import Swal from 'sweetalert2';


export default function Hotels() {
    const navigate = useNavigate()
    const [Property, setProperty] = useState([])
    const location = useLocation()
    const history = useNavigate()
    const [toggle,setToggle] = useState({edit:false});

    let state = location.state


    async function getProperty() {
        const response = await axios.get(`${BASE_URL}/property/getproperty/`)
        setProperty(response.data)
        console.log(response.data)
    }

    useEffect(()=>{
        getProperty();
        if (state?.msg){
            toast.success(state?.msg)
            history(state=>({...state,msg:null}))
        }
        if (state?.msgerror){
            toast.error(state?.msgerror)
        }
    }, [])


    function deleteItem(id){
        Swal.fire({
            title: 'Are you sure?',
            text: "Remove Property..!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`${BASE_URL}/property/delete/${id}`).then(
                    getProperty()
                )
                getProperty();
                toast.success("Removed")
            }
          })
    }



    function goTocreate() {
        navigate('/addproperty')    
    }


  return (
    <div className='flex h-full bg-acontent'>
            <Toaster position='top-center' reverseOrder='false' ></Toaster>
            <Sidebar/>
            <div className='px-5 w-full h-auto min-h-screen mx-5 mt-2  py-8 font-poppins flex flex-col place-content-start place-items-center bg-white shadow-xl rounded-xl'>
                <div className=" h-20 w-full flex justify-between place-content-start place-items-center">
                    <h3 className='font-semibold text-primaryViolet text-2xl '>All Hotels</h3>
                    <button className='bg-cards rounded-lg text-center px-5 py-2 text-white text-light' onClick={()=>goTocreate()}>New Hotel</button>
                </div>
            

            <div class="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5 w-full">
            <table class="w-full border-collapse bg-white text-left text-sm text-gray-500">
                <thead class="bg-gray-50">
                <tr>
                <th scope="col" class="px-6 py-4 font-medium text-gray-900">SI No.</th>
                <th scope="col" class="px-6 py-4 font-medium text-gray-900">Hotel Image</th>
                <th scope="col" class="px-6 py-4 font-medium text-gray-900">Hotel Name</th>
                <th scope="col" class="px-6 py-4 font-medium text-gray-900">Place</th>
                <th scope="col" class="px-6 py-4 font-medium text-gray-900">Phone</th>
                <th scope="col" class="px-6 py-4 font-medium text-gray-900">Availability</th>
                <th scope="col" class="px-6 py-4 font-medium text-gray-900 text-center">Action</th>
                <th scope="col" class="px-6 py-4 font-medium text-gray-900 text-center">Edit</th>
                <th scope="col" class="px-6 py-4 font-medium text-gray-900 text-center">Delete</th>
            </tr>
            </thead>
            <tbody class="divide-y divide-gray-100 border-t border-gray-100">
            {
                Property?.map((property,index)=>(
                <tr class="hover:bg-gray-50" >
                    <th class="flex gap-3 px-6 py-4 font-normal text-gray-900">
                    <div class="px-6 py-4">
                        <p>{index+1}</p>
                    </div>
                    </th>
                    <td class="px-6 py-4">
                        <div className="w-40">
                            <img src={details+property.image_one}  alt="course_image" className=' rounded-lg w-full h-full'/>
                        </div>
                    </td>
                    <td class="px-6 py-4">
                        <p>{property.name}</p>
                    </td>
                    <td class="px-6 py-4">
                        <p>{property.place}</p>
                    </td>
                    <td class="px-6 py-4">
                        <p>{property.phone_number}</p>
                    </td>
                    <td class="px-6 py-4">
                        <p>{property.rooms_available}</p>
                    </td>
                    <td class="px-6 py-4">
                        <div className="flex place-content-around gap-5">
                            <Link to={`/Adminsingleproperty/${property?.id}`}  className="flex flex-col place-items-center cursor-pointer">
                            <BsEye size={20}></BsEye>
                            <p className="font-semibold ">View</p>
                            </Link>
                        </div>
                    </td>
                    <td class="px-6 py-4">
                        <div className="flex flex-col place-items-center rounded-2xl shadow-md shadow-gray-100 p-2 cursor-pointer" onClick={()=>setToggle({edit:property.id})}>
                            <CiEdit size={25}></CiEdit>
                        </div>
                    </td>
                    <td class='px-6 py-4'>
                        <div className="flex flex-col place-items-center rounded-2xl shadow-md shadow-gray-100 p-2 cursor-pointer" onClick={()=>deleteItem(property.id)}>
                                <AiOutlineDelete size={25}></AiOutlineDelete> 
                        </div>
                    </td>
                    
                </tr>  
                ))
            }
            </tbody>
            </table>
            
            </div>
            {
                toggle.edit ? <EditProperty setToggle={setToggle} toggle={toggle}/>: null
            }
            </div>
        </div>
  )
}
