import React, { Component } from 'react'
import axios from 'axios';

import ApiService from '../services/ApiService'


export class uploadcomponent extends Component {
    constructor(props){
        super(props)

        this.state ={
           photo: null,
           CourseName: '',
           
        }
        this.changeCourseNameHandler = this.changeCourseNameHandler.bind(this);
        
    }

    handleFile(e){
        let photo = e.target.files[0]
        this.setState({photo: photo})
    }


    // handleUpload = e => {
         
    //     e.preventDefault();

    //     let photo = this.state.photo;

    //     let CourseName = this.state.CourseName;

    //     const formdata = new FormData();

    //     formdata.append('photo', photo);

    //     formdata.append('CourseName',CourseName);
        
    //     // ApiService.upload(formdata)
    //     //     .then(res => {
    //     //             console.log(res.data);
    //     //             alert("File uploaded successfully.")
    //     //     }).catch(err => {
    //     //         console.log(err);
    //     //     })

    //     // axios.post('http://localhost:8080/api/upload/images', d {
    //     //     headers: {
    //     //       'Content-Type': 'multipart/form-data',
              
    //     //     }
    //     // })
    //     // let headers = new Headers();

    //     // headers.append('Content-Type', 'multipart/form-data');
    //     // headers.append('Accept', 'multipart/form-data');
    //     // headers.append('Origin','http://localhost:8080');


    //     // fetch('http://localhost:8080/api/upload/images', {
    
    //     //         mode: 'cors',
    //     //         credentials: 'include',
    //     //         method: 'POST',
    //     //         body: formdata,
    //     //         headers: headers
            
            
    //     // }).then(res => {
    //     //     if(res.ok) {
    //     //         console.log(res.data);
    //     //         alert("File uploaded successfully.")
    //     //     }
    //     // });
    // };


        handleUpload = async () => {
        try {
         
             let photo = this.state.photo;
             let CourseName = this.state.CourseName;
             const formdata = new FormData();
             formdata.append('photo', photo);
             formdata.append('CourseName',CourseName);
             const API_URL = "http://localhost:8080/files";
             const response = await axios.put(API_URL, formdata, {
             onUploadProgress: (progressEvent) => {
              const percentCompleted = Math.round(
                (progressEvent.loaded * 100) / progressEvent.total
              );
             
            },
          });
      
         
        } catch (err) {
          alert(err.message);
        }
      };


    changeCourseNameHandler= (event) => {
        this.setState({CourseName: event.target.value});
    }

   

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> CourseName: </label>
                                            <input placeholder="CourseName" name="CourseName" className="form-control" 
                                                value={this.state.CourseName} onChange={this.changeCourseNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Upload File </label>
                                            <input type="file" name="photo" onChange={(e)=> this.handleFile(e)} />
                                        </div>
                                       
                                        <button className="btn btn-success" onClick={(e)=> this.handleUpload(e)} >Upload</button>
                                       
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default uploadcomponent
