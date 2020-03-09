import React from 'react';
import '../styles/Home.css'
import Router from './Router/index'
import NavbarSW from 'Layout/Navbar'
function App() {
  return (
    <div className="App">
      <NavbarSW />
      <Router />
    </div>
  );
}
export default App;
