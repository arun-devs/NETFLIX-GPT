import React from "react";
import Header from "./Header";
const Login=()=>{
    return(
        <div>
        <Header/>
        <div className="absolute">
            <img alt="logo" src="https://assets.nflxext.com/ffe/siteui/vlv3/202ac35e-1fca-44f0-98d9-ea7e8211a07c/web/IN-en-20250512-TRIFECTA-perspective_688b8c03-78cb-46a6-ac1c-1035536f871a_small.jpg"/>
        </div>
        <form className=" w-3/12 bg-black absolute p-12 my-40 mx-auto left-0 right-0">
            <input type="text" placeholder="Email" value="Email " className="p-2 m-2"/>
            <input type="password" placeholder="Password" value="Password" className="p-2 m-2"/>
            <button className="p-4 m-4">Log In</button>
        </form>

        </div>
   
    )
    
}

export default Login;
