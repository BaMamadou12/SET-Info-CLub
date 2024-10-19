import React from 'react'
import '../App.css'; 
import VerifyCode from './Auth/VerifyCode';
import 'bootstrap/dist/css/bootstrap.min.css';


function Home() {
  return (
    <div>
        <VerifyCode />
    </div>
  )
}

export default Home