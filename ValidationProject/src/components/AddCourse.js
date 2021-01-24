import React,{Profiler, useState} from 'react'
import Navbar from '../Navbar'
import 'bootstrap'
import AddCourse2 from './AddCourse2'
import Delete1 from './Delete1'

const AddCourse = () => {
    const [courseContent,setCourseContent] = useState({
        "input" : "",
        "output" : ""
    });
    const [testCase,setTestCases] = useState([]);
    const handleChange = (e) => {
        const {name,value} = e.target;
        setCourseContent(prevValue => {
            return {...prevValue,[name] : value}
        })
    }
    const addCourse = () => {
        console.log(courseContent);
        setTestCases( prev => [...prev,courseContent]);
        //setTestCases([...testContent,testCase]);
        setCourseContent({
            "input" : "",
            "output" : ""
        });
        //setTestCases([]);
        console.log(testCase);
    }

    const deleteCourse = (id) => {
        setTestCases(prev => {
            return prev.filter((testcase,index) => {
                return index !== id;
            })
        })
    }

    


    return(
        <div className="container">
            <Navbar />
            
            <h3 className="Thead addNew">Add New Course</h3>
            <div className="row">
                <div>
                    <h5 className="Thead">New Course Name:</h5>
                    <textarea name="input" id="" cols="30" rows="2" value = {courseContent.input} onChange = {handleChange}/>
                    <Delete1 />
                


                <input type = "button" className = "btn btn-primary mb-3 mt-3" onClick = {addCourse} value = "Add"/>
                <ul style = {{listStyle : "none"}}>
                    {
                    testCase.map((testcase,index) => (
                        <li> <AddCourse2 key = {index} index = {index} del = {deleteCourse} input = {testcase.input} output = "" /></li>
                    ))
                    }
                </ul> 
                <button className = "btn btn-success">Submit</button>
                </div>
                  
            </div>
            



        </div>
    );
}

export default AddCourse