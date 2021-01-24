import React,{useState} from "react"
import Navbar from '../Navbar'
import 'bootstrap'
import AddQuiz2 from './AddQuiz2'


const AddQuiz = () => {
    const [testContent,setTestContent] = useState({
        "question" : "",
        "option1" : "",
        "option2" : "",
        "option3" : "",
        "output4" : ""
    });
    const [testCase,setTestCases] = useState([]);
    const handleChange = (e) => {
        const {name,value} = e.target;
        setTestContent(prevValue => {
            return {...prevValue,[name] : value}
        })
    }
    const addTestCase = () => {
        console.log(testContent);
        setTestCases( prev => [...prev,testContent]);
        //setTestCases([...testContent,testCase]);
        setTestContent({
            "question" : "",
            "option1" : "",
            "option2" : "",
            "option3" : "",
            "option4" : ""
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
        
        <h3 className="Thead addNew">Add Quiz</h3>
        <div className="row">
            <div>
                <div className="input-group">
                <h5 className="Thead">Question:</h5>
                <textarea type="text" name="question" id="" cols="130" rows="2" value = {testContent.question} onChange = {handleChange}/>
                </div>
                <div>
                <h5 className="Thead mt-4">Options:</h5>
                <input type = "input"  name="option1" id="" cols="30" rows="2" value = {testContent.option1} onChange = {handleChange} placeholder="CORRECT ANSWER" className="correctO"/><br/>
                <input type = "input"  name="option2" id="" cols="30" rows="2" value = {testContent.option2} onChange = {handleChange} placeholder="INCORRECT ANSWER" className="incorrectO"/><br/>
                <input type = "input"  name="option3" id="" cols="30" rows="2" value = {testContent.option3} onChange = {handleChange} placeholder="INCORRECT ANSWER" className="incorrectO"/><br/>
                <input type = "input"  name="option4" id="" cols="30" rows="2" value = {testContent.option4} onChange = {handleChange} placeholder="INCORRECT ANSWER" className="incorrectO"/><br/>
                </div>
            <input type = "button" className = "btn btn-primary mb-3 mt-3" onClick = {addTestCase} value = "Add"/>
            <ul style = {{listStyle : "none"}}>
                {
                testCase.map((testcase,index) => (
                    <li> <AddQuiz2 key = {index} index = {index} del = {deleteCourse} question = {testcase.question} option1 = {testcase.option1} option2 = {testcase.option2} option3 = {testcase.option3} option4 = {testcase.option4} /></li>
                ))
                }
            </ul> 
            <button className = "btn btn-outline-success">Submit</button>
            </div>
              
        </div>
        

    </div>
);
}

export default AddQuiz