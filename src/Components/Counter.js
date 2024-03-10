// import React from 'react'
import {useState} from "react";
import CourseCart from "./CourseCart";
import './Counter.css'

const Counter = () => {
   

    
    let [courseData, setCourseData] = useState([]);
    // let [coursehour, setCoursehour] = useState(0); 

    const addData = ()=>{
        const courseName = document.getElementById('course-name').value;
        const courseHours = document.getElementById('course-hours').value;

        const newCourseData = {
            name: courseName,
            hour: parseInt(courseHours),
        }
        setCourseData([...courseData, newCourseData])
    }

    
  return (
    <>
    <div className="container">
      <h3> Counter</h3>

        <input type='text' id='course-name'/>
        <input type='number' id='course-hours' style={{width:'10%'}} />
        <br/>
        <button onClick={addData} className="btn">Add</button>
        </div>
        <div className="displayData">
          {
          courseData.map((course,index)=>(
                   <CourseCart 
                   name  = {course.name}
                   hour  = {course.hour}
                   key={index}
                   />
               )
           )
          
          }     
        </div>
</>
  )
}

export default Counter
