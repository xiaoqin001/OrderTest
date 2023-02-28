import logo from './logo.svg';
import './App.css';
import { Route, Routes, Switch } from 'react-router-dom';
import React from 'react';
import AsignTable from './components/AsignTable';

function App() {
  return (
    <>
      <Routes>
        <Route  path='/asigntable'>
          <AsignTable />
        </Route>
      </Routes>
    </>
  );
}

export default App;
