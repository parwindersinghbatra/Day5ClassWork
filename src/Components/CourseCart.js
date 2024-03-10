import React, { useState } from 'react'
import './Counter.css'

const CourseCart = ({name, hour, key}) => {
    const [hourValue, setHourValue] = useState(hour)

  return (

      <div key={key} >
                    <p>{name} - {hourValue}  Hours
                    <button onClick={() => {setHourValue(hourValue-1)}} className='buttonStyle'>-</button> 
                     <button onClick={() => {setHourValue(hourValue+1)}} className='buttonStyle button3'>+</button>
                    </p>
                </div>
  )
}

export default CourseCart
