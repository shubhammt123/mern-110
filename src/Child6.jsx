import React, { useContext } from 'react'
import CountContext from './context/CountContext'

const Child6 = ({setNumber}) => {
    const {handleIncCount} = useContext(CountContext);
  return (
    <div>
        Child 6 component
        <button onClick={handleIncCount}>Inc Count</button>
        <button onClick={()=>{
            setNumber((prev)=>{return prev+1})
        }}>Inc Number</button>
    </div>
  )
}

export default Child6