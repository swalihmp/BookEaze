import { createSlice } from "@reduxjs/toolkit";


const createpropertySlice = createSlice({
    name:"property",
    initialState:{
        createproperty:{
            owner:"",
            name:"",
            place:"",
            location:"",
            price:"",
            address:"",
            description:"",
            phone_number:"",
            zipcode:"",
            rooms_available:"",
            room_type:"",
            image_one:'',
            image_two:'',
            image_three:'',
            image_four:'',
            pool_available:false,
            wifi_available:false,
        }
    },
    reducers:{
        updatecreateproperty:(state,action)=>{
            state.createproperty=action.payload
        }
    }
})

export const {updatecreateproperty} = createpropertySlice.actions
export default createpropertySlice.reducer

// export const {updatecreateproperty}=createpropertySlice.actions
// export default createpropertySlice.reducer