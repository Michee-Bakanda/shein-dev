import { Tab } from '@mui/material'
import React from 'react'
import {useState} from 'react'
import BasicTabs from '../components/LoginUtils/Tab'
import PrimarySearchAppBar from '../components/navbar/AppBar'

const Login = () => {

  return (

    <>
       <PrimarySearchAppBar/>
    
    <div style={{ background: '#fff', border: '1px solid red', height: '200px' }}>
          
      <h1 style={{ margin: '0 740px', fontSize:"24px" }}>Sign in</h1>
        

        <BasicTabs/>

     
    </div>
    
    
    </>
  )
}

export default Login