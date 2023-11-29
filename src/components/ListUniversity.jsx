import React from 'react'
import { useSelector } from 'react-redux'

export default function ListUniversity() {

    const selectedCountry = useSelector(state => state.countries.selectCountry)
    const universities = useSelector(state => state.universities.data)

    const Selectuniversities = universities.filter(c => c.country.toLowerCase() == selectedCountry.toLowerCase())

  return (
    <div>
        {Selectuniversities && <h1>Nombre : {Selectuniversities.length}</h1>}
    </div>
  )
}
