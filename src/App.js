import React from 'react';
import Header from './Components/Header.js';
import Sidebar from './Components/Sidebar.js';
import MainBody from './Components/MainBody.js';
import Footer from './Components/Footer.js';
import './CSS/App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <MainBody />
      <Footer />
    </div>
  );
}

export default App;
