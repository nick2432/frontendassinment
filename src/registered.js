import React from 'react'
import { useSelector } from 'react-redux';
export default function Registered() {
    const {message} = useSelector(state => state.custom);
  return (
    <div className='registered'>
      Your name {message[3].msg} aged {message[5].msg} has been added to student system. You may now exit.
    </div>
  )
}
