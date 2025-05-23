import React, { useRef, useState } from "react";
import Header from "./Header";
import { validateForm } from "../utils/validate";
const Login=()=>{
    const[isSignInForm ,setIsSignInForm]=useState(true);
    const[errorMessage,SetErrorMessage]=useState(null);
    const toggleSignInForm=()=>{
        setIsSignInForm(!isSignInForm);
    }
    const email=useRef(null);
    const password=useRef(null);

    const handleBtnClick=()=>{
        
     const message=  validateForm(email.current.value,password.current.value)
     console.log(message);
     SetErrorMessage(message);
        // console.log(email.current.value);for checking current value syntax
    }


    return(
        <div>
        <Header/>
        <div className="absolute">
            <img alt="logo" src="https://assets.nflxext.com/ffe/siteui/vlv3/202ac35e-1fca-44f0-98d9-ea7e8211a07c/web/IN-en-20250512-TRIFECTA-perspective_688b8c03-78cb-46a6-ac1c-1035536f871a_small.jpg"/>
        </div>
        <form  onSubmit={(e)=>e.preventDefault()} className=" w-3/12 bg-black absolute p-12 my-40 mx-auto left-0 right-0 text-white bg-opacity-80">
            <h1 className="font-bold text-3xl py-4">{isSignInForm? "Sign In": "Sign Up"}</h1>
            {!isSignInForm&&(<input type="text" placeholder="Full Name" className="p-2 my-2 w-full bg-gray-700 rounded-lg"/>)}
            <input type="text"ref={email} placeholder="EmailAddress" className="p-2 my-2 w-full bg-gray-700 rounded-lg"/>
            <input ref={password} type="password" placeholder="Password" className="p-2 my-2 w-full bg-gray-700 rounded-lg"/>
            <button className="p-4 my-4 w-full bg-red-500 rounded-lg"  onClick={handleBtnClick} >{isSignInForm? "Sign In": "Sign Up"}</button>
            <p className="text-red-500 my-4 p-4">{errorMessage}</p>
            <p className="pl-0 cursor-pointer my-4" onClick={toggleSignInForm}>{isSignInForm? "New to Netflix?Sign up now.":"Already Registered User? Sign In Now"}</p>
        </form>

        </div>
   
    )
    
}

export default Login;
