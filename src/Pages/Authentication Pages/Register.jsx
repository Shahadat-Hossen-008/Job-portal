import Lottie from "lottie-react";
import React from "react";
import registerLottie from "../../assets/Lottie/register.json"
function Register() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse lg:ml-36">
        <div className="text-center lg:text-left">
          <Lottie animationData={registerLottie}></Lottie>
          
        </div>
        <div className="card bg-base-100 w-full max-w-sm shadow-2xl p-5">
        <h1 className="text-2xl font-bold text-center">Register</h1>
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
             
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
