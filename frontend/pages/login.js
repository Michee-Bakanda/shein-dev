import { Tab } from '@mui/material'
import React from 'react'
import {useState} from 'react'
import BasicTabs from '../components/LoginUtils/Tab'
import PrimarySearchAppBar from '../components/navbar/AppBar'

const Login = () => {

  return (

    <>
       <PrimarySearchAppBar/>
    
    <div style={{ background: '#fff', }}>
            <div style={{display:'flex',justifyContent:'center',padding:10}}>

      <h1 style={{ margin:0, fontSize:"20px" }}>Sign in</h1>
            </div>
        
 
        <BasicTabs/>

     
    </div>
    
    
    </>
  )
}

export default Login