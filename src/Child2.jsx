import React from 'react'
import Child3 from './Child3'

const Child2 = ({number}) => {
  return (
    <div>
        <Child3 number={number} />
    </div>
  )
}

export default Child2