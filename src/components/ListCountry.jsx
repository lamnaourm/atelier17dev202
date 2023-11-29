import React from 'react'
import { useSelector } from 'react-redux'

export default function ListCountry() {

    const countries = useSelector(state => state.countries.data)

    return (
        <div>
            <select name="" id="">
                {countries.map(c => 
                    <option value={c.name.common}>{c.name.official}</option>
                    )}
            </select>
        </div>
    )
}
