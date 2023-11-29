import React from 'react'
import { useSelector } from 'react-redux'

export default function DetailsCountry() {

    const selectedCountry = useSelector(state => state.countries.selectCountry)
    const countries = useSelector(state => state.countries.data)

    const country = countries.find(c => c.name.common == selectedCountry)
  return (
    <div>
        {country &&
            <img src={country.flags.png} alt="" />
        }
    </div>
  )
}
