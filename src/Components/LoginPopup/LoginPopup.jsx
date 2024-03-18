import React, { useState } from 'react';
import "./LoginPopup.css";
import { assets } from '../../assets/assets';

const LoginPopup = ({setShowLogin}) => {

    const [currentState, setCurrentState] = useState("Sign Up");

  return (
    <div className='login-popup'>

        <form className="login-popup-container">

            <div className="login-popup-title">
                    <h2>
                        {currentState}
                    </h2>
                    <img src={assets.cross_icon} alt=""
                    onClick={()=>{
                        setShowLogin(false);
                    }} />
            </div>

            <div className="login-popup-input">
                
                {
                    currentState==="Login" ? <></> : <input type="text" placeholder='Your name' required />
                }

                <input type="email" placeholder='Your Email' required />

                <input type="
                password" placeholder='Password' required />
            </div>

            <button>
                {
                    currentState==="Sign Up"?"Create Account":"Login"
                }
            </button>

            <div className="login-popup-condition">
                <input type="checkbox" required />
                <p>
                    By continuing, i agree to the term of use & privacy policy.
                </p>
            </div>

            {
                currentState==="Login"?<p>
                    Create a new account?&nbsp; 
                    <span onClick={()=>{
                        setCurrentState("Sign Up");
                    }}>
                        Click here
                    </span>
                </p> : <p>
                    Already have an account?&nbsp;
                    <span onClick={()=>{
                        setCurrentState("Login");
                    }}>
                        Login here
                    </span>
                </p>
            }

        </form>
    </div>
  )
}

export default LoginPopup