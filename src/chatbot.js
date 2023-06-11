import React from 'react'
import { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
export default function Chatbot() {
  const navigate=useNavigate();
  const dispatch = useDispatch();
  const [second,setsecond]=useState(5);
    if(second===0){
        navigate('/registered');
    }
  const {message} = useSelector(state => state.custom);
  const addgotit=()=>{
    const x = document.getElementById('btn');
    x.style.display="none"
    dispatch({
      type: "gotit",
    });
  };
  const addname=(event,value)=>{
    if(event.key==='Enter'){
    var hasNumber = /\d/;   
    const x=hasNumber.test(`${value}`);  
    console.log(x);
    if(x===false){
    dispatch({
      type: "name",
      payload: `${value}`
    });
  }
  else{
    dispatch({
      type: "age",
      payload: `${value}`
    });
    const y=document.getElementById('second');
    y.style.display='block';
    const interval= setInterval(()=>{
      setsecond(prev=> prev-=1);
      },1000)
      return ()=> clearInterval(interval);
  }
  }
  };
  return (
           <div id='chatbot'>
        {message.map(msg => (  
          <div className='chat'>
           {msg.handler==='bot'?(
            <p>{msg.handler}</p>
           ):(
            <div className='paragraph1'>{msg.msg}</div>  )}
              {msg.handler==='bot'?(
             <div className='paragraph'>{msg.msg}</div>
           ):(
            <p>{msg.handler}</p>  )}
          </div>
          ))}  
          <button onClick={addgotit} id='btn'>Got it</button>
          <p id='second'>{second}</p>
          <input className='input'  onKeyDown={event => addname(event, event.target.value)} type='text'/>
      </div>
  )
}
