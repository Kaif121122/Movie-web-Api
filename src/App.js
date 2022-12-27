import React from 'react'
import Home from './components/Home'
import SinglePage from './components/SinglePage'
import Error from './components/Error'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (<>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='movie/:id' element={<SinglePage />} />
      <Route path='*' element={<Error />} />
    </Routes>


  </>
  )
}

export default App;