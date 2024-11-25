import React, { useEffect, useState } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/name/kingdom')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setCountries(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleSelect = (event) => {
    const selectedCountry = countries.find(country => country.cca2 === event.target.value);
    if (selectedCountry) {
      navigate(`/countries/${selectedCountry.cca2}`, { state: { data: selectedCountry } });
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>World Kingdoms</h1>
      <select onChange={handleSelect} defaultValue="" style={styles.dropdown}>
        <option value="" disabled>Select a country</option>
        {countries.map(country => (
          <option key={country.cca2} value={country.cca2}>
            {country.name.common}
          </option>
        ))}
      </select>
      <Outlet />
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    textAlign: 'center',
    backgroundColor: '#f0f4f8',
  },
  header: {
    fontSize: '2.5rem',
    marginBottom: '1.5rem',
    color: '#333',
  },
  dropdown: {
    width: '300px',
    height: '50px',
    fontSize: '1.2rem',
    padding: '0.5rem',
    margin: '1rem 0',
    borderRadius: '10px',
    border: '2px solid #444',
    backgroundColor: '#fff',
  },
};

export default Countries;
