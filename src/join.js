import React from 'react'
import {useNavigate} from 'react-router-dom';

export default function Join() {
    
    const navigate=useNavigate();
    const goto=()=>{
        navigate('./chatbot');
    }
  return (
  <div id='enroll'>
    <h1>Enter into Student Info System</h1>
    <button type='submit' onClick={goto} className='btnl' >Enroll Now</button>
  </div>
  )
}
