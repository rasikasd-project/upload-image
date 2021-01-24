import React from "react";
import Navbar from "../Navbar";
import Footer from '../footer';
import 'bootstrap';
import './Tutorial.css';
import { BsBook } from "react-icons/bs";
import { FcAddressBook } from "react-icons/fc";
import { FaLaptopCode } from "react-icons/fa";
import Editor from './Editor'
import { VscOutput } from "react-icons/vsc";
import { Link } from "react-router-dom";
import TabNav from './TabNav';
import { AiFillPropertySafety } from "react-icons/ai";


function Tutorial(props){
    return(
        <div className="container-fluid">
                <Navbar />
                <TabNav LanguageIcon={props.icon2} LanguageName={props.name} />
            <div className="row sticky-top">
                <div className="col-4 mt-5">
                    <div>
                    <div class="overflow-auto con_height borderT">
                        
                        <div className="headL sticky-top">
                            <span className = "mx-2" style = {{fontSize : "2.5em"}}><img src={props.icons} height="40px" width="40px"/></span>
                            <span className="ml-2 font-weight-bold">{props.name}</span>
                        </div>
                        <div>
                            {props.theoryContent} 
                        </div>
                    </div>
                    </div>
                </div>
                <div className = "col-8 mt-5">
                    <Editor language = {props.language} icon2={props.icon2}/>
                </div>
            </div>

            <div>
                <Link to={props.next}><button type="button" class="btn btn-info mt-3">NEXT</button></Link>
            </div>
            
            <div className="container-fluid foot">
                <div className="row">
                    <Footer />
                </div>
            </div>

                      
        </div>   
    )

}

export default Tutorial;