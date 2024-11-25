import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Countries from './components/Countries.jsx';
import Details from './components/Details.jsx';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Countries />}>
        <Route path="countries" element={<Countries />} />
        <Route path="countries/:cca2" element={<Details />} />
      </Route>
    </Routes>
  );
};

export default App;
