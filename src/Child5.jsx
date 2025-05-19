import React from 'react'
import Child6 from './Child6'

const Child5 = ({setNumber}) => {
  return (
    <div>
        <Child6 setNumber={setNumber} />
    </div>
  )
}

export default Child5