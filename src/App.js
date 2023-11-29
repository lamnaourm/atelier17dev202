import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { useEffect } from 'react';
import { getCountries } from './redux/CountrySlice';
import { getUniversities } from './redux/UniversitySlice';
import ListCountry from './components/ListCountry';
import DetailsCountry from './components/DetailsCountry';
import ListUniversity from './components/ListUniversity';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCountries())
    dispatch(getUniversities())
  }, [])

  return (
    <div className="container">
      <ListCountry />
      <DetailsCountry />
      <ListUniversity />
    </div>
  );
}

export default App;
