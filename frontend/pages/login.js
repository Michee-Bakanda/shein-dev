import { Tab } from '@mui/material'
import React from 'react'
import {useState} from 'react'
import BasicTabs from '../components/LoginUtils/Tab'
import PrimarySearchAppBar from '../components/navbar/AppBar'



const Login = () => {
const [content , setContent] = useState([
  {name:'schadrack', surname:'botombe'},
  {name:'tom', surname:'verdant'},
])


  return (
    <>
       <PrimarySearchAppBar/>
    
    <div style={{ background: '#fff', border: '1px solid red', height: '200px' }}>
          
      <h1 style={{ margin: '0' }}>Login here</h1>
        
        <BasicTabs/>

     
    </div>
    
    
    </>
  )
}

export default Login