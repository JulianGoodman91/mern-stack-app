import React from 'react';
import './App.css';
import Navigation from './components/nav';
import PageRoutes from './Routes';
 
function App() {
  return (
    <>
      <Navigation />
      <PageRoutes />
    </>
  );
}

export default App;

// USE REACTSTRAP TO RENDER DOM STRUCTURE