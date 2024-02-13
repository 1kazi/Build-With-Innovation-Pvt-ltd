import React from "react";
import '../assets/css/login.scss';
import { postApiData } from "../server/Api";
import { useNavigate } from "react-router-dom";
export default function Login() {
console.log("Login Details:=>",{
    "username": "kminchelle",
    "password": "0lelplR"
})
const navigate= useNavigate()
  const submitHandler=async(e)=>{
    e.preventDefault();
    const data={
        username: 'kminchelle',
        password: '0lelplR'
      }
    const res= await postApiData('https://dummyjson.com/auth/login',data);
    console.log("Login page",res)
    localStorage.setItem('producttoken',JSON.stringify(res.token));
    navigate('/')

  }
  return (
    <div className="login-section">
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form className="form"  onSubmit={submitHandler}>
        <h3>Login Here</h3>

        <label htmlFor="username">Username</label>
        <input type="text" placeholder="Email or Phone" required id="username" />

        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Password" required id="password" />

        <button>Log In</button>
        {/* <div class="social">
          <div class="go">
            <i class="fab fa-google"></i> Google
          </div>
          <div class="fb">
            <i class="fab fa-facebook"></i> Facebook
          </div>
        </div> */}
      </form>
    </div>
  );
}
