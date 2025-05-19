import React, { useContext } from 'react'
import CountContext from './context/CountContext'

const Child4 = ({number}) => {
    const {count} = useContext(CountContext);
  return (
    <div>
        Child 4 Component Count - {count}
        Child 4 Component Number - {number}
    </div>
  )
}

export default Child4