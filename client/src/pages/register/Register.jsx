import React, { useState } from 'react'
import "./register.scss"
import { Link, useNavigate } from 'react-router-dom'
import apirequest from '../../lib/apiRequest';

function Register() {
  const [error,setError]=useState("")
  const [isloading,setIsloading]=useState(false)
  const navigate=useNavigate();
  const handleSubmit=async(e)=>{
    e.preventDefault();
    setIsloading(true)
    setError("")
    const formData=new FormData(e.target);
    const name=formData.get("name")
    const email=formData.get("email")
    const password=formData.get("password")

    try {
      const res=await apirequest.post("/auth/register",{
        name,email,password
    })
    console.log(res.data);
    navigate("/login")
    } catch (error) {
      console.log(error);
      setError(error.response.data.message)
    }finally{
      setIsloading(false)
    }
  }
  return (
    <div className="register">
      <div className="RegisterForm">
        <form className='wrapper' onSubmit={handleSubmit}>
            <h1 className='title'>Create an Account</h1>
            <div>
            <input type="text" name='name' placeholder='Username' /> 
            <input type="email" name='email' placeholder='Email' />
            <input type="password" required minLength={4} maxLength={10} name='password' placeholder='Password' />
            <button disabled={isloading}>Register</button>
            {error && <span style={{color:"red"}}>{error}</span>}
            <Link to="/login" className='login'>Do you an account?</Link>
            </div>
        </form>
      </div>
      <div className="imgcontainer">
        <img src="images/bg.png" alt="" />
      </div>
    </div>
  )
}

export default Register