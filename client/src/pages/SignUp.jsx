import React from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {
  return (
    <div className='p-3 max-w-lg center mx-auto'>
      <h1 className='text-3xl my-7 text-center font-semibold'> sign up</h1>
      <form className='flex flex-col gap-3'>
        <input  type="text" placeholder='Username' className='border rounded-lg p-3' id='username'/>
        <input  type="text" placeholder='Email' className='border rounded-lg p-3' id='email'/>
        <input  type="text" placeholder='Password' className='border rounded-lg p-3' id='password'/>
        <button className='uppercase bg-slate-700 p-3 text-white rounded-lg hover:opacity-95 disabled:opacity-80'>sign up</button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Have an account</p>
        <Link to={'/sign-in'}>
        <span className='text-blue-700'>sign-in</span>
        </Link>
      </div>
    </div>
  )
}
