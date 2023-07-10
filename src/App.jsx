// App.tsx
import './App.css'
import React from 'react';
import Navbar from './comps/Navbar';
import Footer from './comps/Footer';
import Home from './Pages/Home'

const App = () => {
  const links = [
    { label: 'Home', url: '' },
    { label: 'About', url: '/about' },
    { label: 'Contact', url: '/contact' },
  ];
  

  return (
    <div>
      <Navbar links={links} />
      <Home/>
      <Footer text="Copyright © 2023. All rights reserved." />
    </div>
  );
};

export default App;