import React, { useContext, useState } from 'react'
import "./Login.scss"
import { Link, useNavigate } from 'react-router-dom';
import apirequest from '../../lib/apiRequest';
import { AuthContext } from '../../context/AuthContext';
function Login() {
  const {updateUser}=useContext(AuthContext)
  const [error,setError]=useState("")
  const [isloading,setIsloading]=useState(false)
  const navigate=useNavigate();
  const handleSubmit=async(e)=>{
    e.preventDefault();
    setIsloading(true)
    setError("")
    const formData=new FormData(e.target);
    const name=formData.get("name")
    const password=formData.get("password")

    try { 
      const res=await apirequest.post("/auth/login",{
        name,password
    })

    updateUser(res.data)

    console.log(res);
    navigate("/")
    } catch (error) {
      console.log(error);
      setError(error.response.data.message)
    }finally{
      setIsloading(false)
    }
  }
  return (
    <div className="login">
      <div className="loginForm">
        <form className='wrapper' onSubmit={handleSubmit}>
            <h1 className='title'>Login your account</h1>
            <div>
            <input type="text" name='name' placeholder='Username' />
            <input type="password" required minLength={4} maxLength={10} name='password' placeholder='Password' />
            <button  disabled={isloading}>Login</button>
            {error && <span style={{color:"red"}}>{error}</span>}
            <Link to="/register" className='register'>Don't have an account?</Link>
            </div>
        </form>
      </div>
      <div className="imgcontainer">
        <img src="images/bg.png" alt="" />
      </div>
    </div>
  )
}

export default Login