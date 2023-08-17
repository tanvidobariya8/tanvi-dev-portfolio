import React from 'react'
import AddtoCart from './Components/Api.jsx/AddtoCart'
import LocalStorge  from './Components/Api.jsx/LocalStorge'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './Components/Login/Homepage'
import UserList from './Components/Login/UserList'
import Loginpage from './Components/Login/Loginpage'
import Navbar from './Components/Login/Navbar'

const App = () => {
  return (
    <div>
      <AddtoCart/>
      <LocalStorge/>

      {/* <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/loginpage' element={<Loginpage />} />
          <Route path='/userlist' element={<UserList />} />
        </Routes>
      </BrowserRouter> */}
    </div>
  )
}

export default App
