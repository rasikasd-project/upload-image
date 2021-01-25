import { useState , useEffect } from 'react';
import validate from './validateInfo'

const useForm = (callback , validate) => {

    const [user,setUser] = useState({
        "firstName" : "",
        "lastName" : "",
        "emailId" : "",
        "mobileNo" : "",
        "password" : "",
        "cfpwd": ""
});

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
  
    // const reqBody = {
    //     method : 'POST',
    //     headers : { 'Content-type': 'application/json',
    //     'Access-Control-Allow-Origin' : '*'},
    //     // body : JSON.stringify({
    //     //     "firstName" : user.firstName,
    //     //     "lastName" : user.lastName,
    //     //     "emailId" : user.emailId,
    //     //     "mobileNo" : user.mobileNo,
    //     //     "password" : user.password
    //     // })
    //     body : JSON.stringify(user)
    // };
   
    const handleChange = (e) => {
        const {name,value} = e.target;

        setUser( prevValue => {
            return {
                ...prevValue,
                [name] : value
            }
        })
    };


    const postUser =  (e) => {
        // const response = await fetch('http://localhost:8080/create_user',reqBody);
        // const data = await response;
        // console.log(user);
        e.preventDefault();
        setErrors(validate(user));
        setIsSubmitting(true);

        //return {postUser};

    }

    useEffect(
        () => {
          if (Object.keys(errors).length === 0 && isSubmitting) {
            callback();
          }
        },
        [errors]
      );

    return { handleChange , postUser, user, errors };

};

export default useForm;


