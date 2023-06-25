import React from 'react'
import { updatecreateproperty } from '../../../redux/createPropertySlice'
import { useDispatch, useSelector } from 'react-redux'

export default function PropertyForm2() {
  const dispatch = useDispatch()
  const {createproperty,pool_available,wifi_available} = useSelector(state=>state.createproperty)


  return (
    <div className="flex items-center w-full  rounded-2xl shadow-xl px-4 py-8">
      <form className="font-poppins w-full h-full flex flex-col place-content-start place-items-start ">
      <div className="flex w-full  place-content-around">
        <div  className='w-3/5 flex flex-col place-items-start place-content-center px-3'>
            <label htmlFor="image_one" className="text-primaryBlue font-semibold text-xl py-2">Image 1</label>
              <input
              class="relative  m-0 block w-full min-w-0 flex-auto cursor-pointer rounded border border-solid border-neutral-300 bg-clip-padding py-[0.32rem] px-3 font-normal leading-[2.15] text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[margin-inline-end:0.75rem] file:[border-inline-end-width:1px] focus:border-primary focus:text-neutral-700 focus:shadow-[0_0_0_1px] focus:shadow-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100"
              id="formFileLg"
              type="file"
              name="image_one" onChange={(e)=>dispatch(updatecreateproperty({...createproperty,image_one:e.target.files[0]}))}/>
        </div>
        <div  className='w-3/5 flex flex-col place-items-start place-content-center px-3'>
            <label htmlFor="image_two" className="text-primaryBlue font-semibold text-xl py-2">Image 2</label>
              <input
                class="relative  m-0 block w-full min-w-0 flex-auto cursor-pointer rounded border border-solid border-neutral-300 bg-clip-padding py-[0.32rem] px-3 font-normal leading-[2.15] text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[margin-inline-end:0.75rem] file:[border-inline-end-width:1px] focus:border-primary focus:text-neutral-700 focus:shadow-[0_0_0_1px] focus:shadow-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100"
                id="formFileLg"
                type="file" 
                name="promovideo" onChange={(e)=>dispatch(updatecreateproperty({...createproperty,image_two:e.target.files[0]}))}/>
        </div>
    </div>

    <div className="flex pt-8 w-full place-content-around">
        <div  className='w-3/5 flex flex-col place-items-start place-content-center px-3'>
            <label htmlFor="image_three" className="text-primaryBlue font-semibold text-xl py-2">Image 3</label>
              <input
              class="relative  m-0 block w-full min-w-0 flex-auto cursor-pointer rounded border border-solid border-neutral-300 bg-clip-padding py-[0.32rem] px-3 font-normal leading-[2.15] text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[margin-inline-end:0.75rem] file:[border-inline-end-width:1px] focus:border-primary focus:text-neutral-700 focus:shadow-[0_0_0_1px] focus:shadow-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100"
              id="formFileLg"
              type="file"
              name="image_three" onChange={(e)=>dispatch(updatecreateproperty({...createproperty,image_three:e.target.files[0]}))}/>
        </div>
        <div  className='w-3/5 flex flex-col place-items-start place-content-center px-3'>
            <label htmlFor="image_four" className="text-primaryBlue font-semibold text-xl py-2">Image 4</label>
              <input
                class="relative  m-0 block w-full min-w-0 flex-auto cursor-pointer rounded border border-solid border-neutral-300 bg-clip-padding py-[0.32rem] px-3 font-normal leading-[2.15] text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[margin-inline-end:0.75rem] file:[border-inline-end-width:1px] focus:border-primary focus:text-neutral-700 focus:shadow-[0_0_0_1px] focus:shadow-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100"
                id="formFileLg"
                type="file" 
                name="image_four" onChange={(e)=>dispatch(updatecreateproperty({...createproperty,image_four:e.target.files[0]}))}/>
        </div>
    </div>
    <div className="flex w-full pt-8 place-content-around">
        <div  className='w-3/5 flex flex-col pl-7 place-items-start place-content-center px-3'>
            <input checked={pool_available} onChange={(e)=>dispatch(updatecreateproperty(
              {...createproperty,pool_available:!pool_available}))} type='checkbox'/>Pool Available

        </div>
        <div  className='w-3/5 flex flex-col place-items-start pl-7 place-content-center px-3'>
            <input type='checkbox' checked={wifi_available} onChange={(e)=>dispatch(updatecreateproperty(
              {...createproperty,wifi_available:!wifi_available}))}/>WiFi Available

        </div>
    </div>
        
    </form>
  </div>
  )
}
