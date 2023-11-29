import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getCountries = createAsyncThunk('countries/getCountgries', async () => {
    const res = await axios.get('https://restcountries.com/v3.1/all')
    return res.data;
})

const CountrySlice = createSlice({
    name:'countries',
    initialState:{
        data:[],
        loading:false,
        error:'',
        selectCountry:''
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getCountries.pending, (state, action)=> {
            state.loading = true
        }) 
        builder.addCase(getCountries.fulfilled, (state, action)=> {
            state.loading =false
            state.data = action.payload
        }) 
        builder.addCase(getCountries.rejected, (state, action)=> {
            state.loading =false
            state.error = action.payload
        }) 
    }
})


export const {} = CountrySlice.actions
export default CountrySlice.reducer


