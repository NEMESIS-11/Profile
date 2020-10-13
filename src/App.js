import React from 'react';
import Header from './Header.js';
import Sidebar from './Sidebar.js';
import MainBody from './MainBody.js';
import Footer from './Footer.js';
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
