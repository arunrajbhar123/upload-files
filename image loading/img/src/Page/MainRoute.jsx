import React from 'react'
import Image from './Image';
import {Routes,Route} from "react-router-dom"
import Home from './Home';
import Upload from './Upload';
const MainRoute = () => {
  return (
    <Routes>
          <Route path="/" element={<Home />} />
      <Route path="/img" element={<Image />} />
      <Route path="/upload" element={<Upload />}/>
    </Routes>
  )
}

export default MainRoute