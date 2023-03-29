import React, { useState, useEffect } from 'react';
import Layout from './components/Layout/Layout';
import aImg from './assets/images/loading.gif'
import "./App.css";
import './shared/Admin/showaccount.css'

const App = () => {
  const [showLayout, setShowLayout] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLayout(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {!showLayout &&
      <div className="containeracc">
          <img src={aImg} alt="" className="center" />
          <h2 className="welcome-text">Chào mừng bạn đến Figure Fantasy</h2> 
      </div>}
      {showLayout && <Layout />}
    </>
  );
};

export default App;
