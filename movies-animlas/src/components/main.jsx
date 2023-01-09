import React from 'react'
import NavBar from './navBar'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Animals from './animals'
import Register from './register'
import Auth from './auth'

export default function Main() {
  

    return (
    <div>
    <NavBar/>
    <Routes> 
        <Route path="/animals"  element ={ <Animals/>} />         
        <Route path="/register"  element ={ <Register/>} />         
        <Route path="/auth"  element ={ <Auth/>} />         
       
    </Routes>     

    </div>
  )
}
