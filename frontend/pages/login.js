import { Tab } from '@mui/material'
import React from 'react'
import {useState} from 'react'
import BasicTabs from '../components/LoginUtils/Tab'

const Login = () => {
const [content , setContent] = useState([
  {name:'schadrack', surname:'botombe'},
  {name:'tom', surname:'verdant'},
])


  return (
    <div style={{ background: '#fff',height: '800px' }}>
        
      <h1 style={{ margin: '0 740px', fontSize:"24px" }}>Sign in</h1>

        <BasicTabs/>

     
    </div>
  )
}

export default Login