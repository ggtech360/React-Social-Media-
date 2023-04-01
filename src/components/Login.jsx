import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    let history = useNavigate();
    const navigate = ()=>{
        history('/');
    }

  return (
    <div className="">
      <section className="bg-blue-300 text-black flex items-center justify-center w-[100%] h-[100vh]">
        <div className="form bform bg-white rounded-[20px] border-2 backdrop-blur-[10px] font-poppins flex items-center justify-center w-[400px] h-[450px] bg-transparent">
          <form action="#" onSubmit={navigate}>
            <h2 className="text-3xl font-bold text-center">Login to GBook</h2>
            <div className="inputbox">
              <input type="email" required />
              <label htmlFor="Email">Email</label>
            </div>
            <div className="inputbox">
              <input type="password" required />
              <label htmlFor="Password">Password</label>
            </div>
            <button className="buttonlogin border-none outline-none font-bold text-base w-[100%] text-white rounded-[20px] h-[45px]">
              Login
            </button>
            <div className="forgot text-center my-4">
              <a className="hover:decoration-2 transition-all duration-100 ease-out hover:scale-150 hover:text-blue-400">
                Forgot Password?
              </a>
            </div>
            <div className="register text-center">
              <label htmlFor="#">Don't have an account?</label>
              <br />
              <a href="/" className="hover:text-red-500">
                Create New Account
              </a>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Login;
