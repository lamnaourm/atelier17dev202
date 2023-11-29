import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { modifCountry } from '../redux/CountrySlice'

export default function ListCountry() {

    const countries = useSelector(state => state.countries.data)
    const selectedCountry = useSelector(state => state.countries.selectCountry)
    const dispatch = useDispatch()

    return (
        <div>
            <select name="country" id="country" value={selectedCountry} onChange={(e) => dispatch(modifCountry(e.target.value))}>
                {countries.map(c => 
                    <option value={c.name.common}>{c.name.official}</option>
                    )}
            </select>
        </div>
    )
}
