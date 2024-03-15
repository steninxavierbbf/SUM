import React from 'react'
import Header from './Components/Header'
import  { useState,useEffect, useRef,useCallback } from 'react'

import Footer from './Components/Footer'
import DetailsPage from './Components/DetailsPage';
import { Route, Routes } from 'react-router-dom';
import Impressum from './Components/Impressum';
import Dataprotection from './Components/Dataprotection';

const App = () => {
  
  return (
    <div>

<Routes>
  <Route path='/' element={<DetailsPage/>}/>
  <Route path='/datenschutz' element={<Dataprotection/>}/>
  <Route path='/impressum' element={<Impressum/>}/>
</Routes>
<Footer/>
    </div>
  )
}

export default App