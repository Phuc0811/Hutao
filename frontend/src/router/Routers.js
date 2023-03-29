import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'

import Home from "./../pages/Home";
import Figures from "./../pages/Figures";
import FiguresDetails from "./../pages/FiguresDetails";
import Login from "./../pages/Login";
import Register from "./../pages/Register";
import SearchResultList from "./../pages/SearchResultList";
import ThankYou from '../pages/ThankYou';
import About from '../pages/About';
import Admin from '../pages/Admin/Admin';
import ShowAccount from '../pages/Admin/ShowAccount';
import SearchResultListAdmin from '../pages/Admin/SearchResultListAdmin';
import Delete from '../pages/Admin/Delete';
import Create from '../pages/Admin/Create';
import Update from '../pages/Admin/Upadte';
import ShowFigureAdmin from '../pages/Admin/ShowFigureAdmin';
import Test from '../pages/Admin/Test';
import QC from '../pages/Admin/QC';
const Routers = () => {
  return(
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home/>} />
      <Route path="/figure" element={<Figures/>} />
      <Route path="/figure/:id" element={<FiguresDetails/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/thank-you" element={<ThankYou/>} />
      <Route path="/figure/search" element={<SearchResultList/>} />
      <Route path="/figure/searchadmin" element={<SearchResultListAdmin/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/admin" element={<Admin/>} />
      <Route path="/showaccount" element={<ShowAccount/>} />
      <Route path="/delete/:id" element={<Delete/>} />
      <Route path="/create" element={<Create/>} />
      <Route path="/update/:id" element={<Update/>} />
      <Route path="/showfigureadmin/:id" element={<ShowFigureAdmin/>} />
      <Route path="/test" element={<Test/>} />
      <Route path="/qc" element={<QC/>} />
    </Routes>
  );
};

export default Routers;
