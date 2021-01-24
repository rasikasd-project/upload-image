import React, { useState } from 'react';
import Nav from "./Navbar";
import Register from './Register';
import './Form.css';
import Login from './Login';



const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
    <nav>
            <Nav />
        </nav>
      <div className='form-container'>

        <span className='close-btn'>×</span>
        <div className='form-content-left'>
        <img src={process.env.PUBLIC_URL + "/hero-b.png"} />
        </div>
        {!isSubmitted ? (
          <Register submitForm={submitForm} />
        ) : (
          <Login />
        )}
      </div>
    </>
  );
};

export default Form;