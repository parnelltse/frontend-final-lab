import React from 'react';
import { useLocation } from 'react-router-dom';

const Details = () => {
  const { state } = useLocation();
  const country = state?.data;

  if (!country) return <p style={{ textAlign: 'center', fontSize: '1.5rem' }}>No country data available.</p>;

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Kingdom of {country.name.common}</h2>
      <img 
        src={country.flags.svg} 
        alt={`Flag of ${country.name.common}`} 
        style={styles.flag} 
      />
      <div style={styles.infoContainer}>
        <p><strong>Capital:</strong> {country.capital?.[0]}</p>
        <p><strong>Region:</strong> {country.region}</p>
        <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
        <p><strong>Area:</strong> {country.area.toLocaleString()} km²</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '2rem',
    backgroundColor: '#f0f4f8',
    minHeight: '100vh',
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '1.5rem',
    color: '#333',
  },
  flag: {
    width: '350px',
    height: 'auto',
    marginBottom: '2rem',

  },
  infoContainer: {
    fontSize: '1.5rem',
    lineHeight: '2.2rem',
    color: '#555',
  },
};

export default Details;
