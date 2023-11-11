import React from 'react'
import WriteInput from '../components/WriteInput/WriteInput';
import ABButton from '../components/ABButton';
import { Link } from 'react-router-dom';


export default function Signup() {
  return (
    <>

<div style={{height:'100vh'}} className=" bg-black d-flex justify-content-center align-items-center ">
        <div style={{width:'500px'}} className='signupBox p-12 m-3 text-center'>
          <div className='p-5'>
            <p className='fs-1  text-white fw-bold'>Sign Up</p>
          </div>
          <div className='my-4 px-4 login-input-box'>
            <WriteInput label='Full Name'
              // value={model.fullName}
              // onChange={(e) => { fillModel("fullName", e.target.value) }}
               />
          </div>
          <div className='my-4 px-4 login-input-box'>
            <WriteInput label='User Name'
              // value={model.userName}
              // onChange={(e) => { fillModel("userName", e.target.value) }}
               />
          </div>
          <div className='my-4 px-4 login-input-box'>
            <WriteInput label='Email'
              // value={model.email}
              // onChange={(e) => { fillModel("email", e.target.value) }}
               />
          </div>
          <div className='my-4 px-4 login-input-box'>
            <WriteInput label='Password'
              type='password'
              // value={model.password}
              // onChange={(e) => { fillModel("password", e.target.value) }}
               />
          </div>
          <div className='my-4 px-4 '>
            <ABButton 
            // onClick={signUpUser} 
            className='m-4 ' label='Sign Up' />
          </div>
          <div className='py-3 pb-5'>
            <span className='text-white'>Already have an account?</span>
            <Link className='font-bold text-lg loginBtn' to={'/login'}>  Log in</Link>
          </div>
        </div>
      </div>
    
    </>
  )
}
