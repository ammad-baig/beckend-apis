import { Link } from 'react-router-dom';
import ABButton from '../components/ABButton'
// import { useState } from "react";
import WriteInput from '../components/WriteInput/WriteInput';


export default function Login() {
  return (
    <>
    
    <div style={{height:'100vh'}} className=" bg-black d-flex justify-content-center align-items-center ">
        <div style={{width:'400px'}} className='loginBox p-12 m-3  text-center'>
          <div className='p-5'>
            <p className='fs-1 text-white fw-bold'>Login</p>
          </div>
           <div className='my-4 px-4 login-input-box'>
            <WriteInput label='Email'
            //   value={model.email}
            //   onChange={(e) => { fillModel("email", e.target.value) }}
            />
          </div>
          <div className='my-4 px-4 login-input-box'>
            <WriteInput label='Password'
              type='password'
              //   value={model.password}
              //   onChange={(e) => { fillModel("password", e.target.value) }}
              />
          </div>
          <div className='my-12 '>
            <ABButton
            //   onClick={loginUser}
              className='m-5'
              label='Login' />
          </div>
          <div className='py-3 pb-5'>
            <span className=' text-white'>Don't have an account?</span>
            <Link className='font-bold text-lg signupBtn' to={'/signup'}>  Sign Up</Link>
          </div> 
        </div>
      </div>
    
    </>
  )
}
