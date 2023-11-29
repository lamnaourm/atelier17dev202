import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getUniversities = createAsyncThunk('countries/getUniversities', async () => {
    const res = await axios.get('http://universities.hipolabs.com/search?country=')
    return res.data;
})

const UniversitySlice = createSlice({
    name:'universities',
    initialState:{
        data:[],
        loading:false,
        error:''
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getUniversities.pending, (state, action)=> {
            state.loading = true
        }) 
        builder.addCase(getUniversities.fulfilled, (state, action)=> {
            state.loading = false
            state.data = action.payload
        }) 
        builder.addCase(getUniversities.rejected, (state, action)=> {
            state.loading = false
            state.error = action.payload
        }) 
    }
})


export const {} = UniversitySlice.actions
export default UniversitySlice.reducer


