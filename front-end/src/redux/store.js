import createpropertySlice from "./createPropertySlice"
import { configureStore } from "@reduxjs/toolkit"


export default configureStore({
    reducer: {
      createproperty: createpropertySlice,
    },
})