import Lottie from "lottie-react";
import React, { useContext, useState } from "react";
import registerLottie from "../../assets/Lottie/Register.json";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash, FaRegCheckCircle, FaRegCircle } from "react-icons/fa";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import AuthContext from "../../Context/AuthContext/AuthContext";
function Register() {
  const{createUser, setUser} = useContext(AuthContext);
  const [seePassword, setSeePassword] = useState(true);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const passwordValue = watch("password", "");

  const lowerCaseValidate = /^(?=.*[a-z])/.test(passwordValue);
  const upperCaseValidate = /(?=.*[A-Z])/.test(passwordValue);
  const specialChValidate = /^(?=.*[\W_])/.test(passwordValue);
  const numberValidate = /^(?=.*\d)(?=.{8,})/.test(passwordValue);
  const onSubmit = (data) =>{
    const email = data.email;
    const password = data.password;
    createUser(email, password)
    .then(userCredential=>{
      const user = userCredential.user;
      setUser(user);
      console.log(user);
      
    })
    .catch(error=>{
      console.log(error.message);
      
    })
  }
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center w-[400px]">
          <Lottie animationData={registerLottie}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shadow-2xl p-5">
          <h1 className="text-2xl font-bold text-center font-poppins">Register</h1>
          <form 
          onSubmit={handleSubmit(onSubmit)}
          className="card-body font-lato">
              <div className="form-control">
              {/*user name  */}
                <label className="label">
                  Username
                </label>
                <input
                  type="text"
                  placeholder="Enter your username"
                  className="input input-bordered"
                  {...register("username", {
                    required: "Username is required",
                    minLength: {
                      value: 2,
                      message: "Username must be at least 2 characters",
                    },
                  })}
                />
                {errors.username && (
                  <span className="text-red-500 text-sm">
                    {errors.username.message}
                  </span>
                )}
              </div>
              {/* email */}
              <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email",
                  },
                })}
              />
              {errors.email && (
                <span className="text-red-500 text-sm">
                  {errors.email.message}
                </span>
              )}
            </div>
            {/* password */}
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={seePassword ?  "password":"text" }
                name="password"
                placeholder="password"
                className="input input-bordered"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must contain 8 character",
                  },
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
                    message: "Password must include uppercase, lowercase, number, and special character",
                  },
                })}
              />
              <button
                onClick={() => setSeePassword(!seePassword)}
                type="button"
                className="absolute right-4 top-12 pt-1"
              >
                {seePassword ? <FaEyeSlash />: <FaEye /> }
              </button>
              {errors.password && <span>{errors.password.message}</span>}
              <div className="p-2 mt-3 bg-orange-100 rounded-xl">
              <div className={` ${lowerCaseValidate ? "text-green-600 flex items-center gap-3":"text-black flex items-center gap-3"}`}>
              {lowerCaseValidate ? <FaRegCheckCircle /> : <FaRegCircle/>}
              At least one lowercase</div>
              <div className={` ${upperCaseValidate ? "text-green-600 flex items-center gap-3":"text-black flex items-center gap-3"}`}>
              {upperCaseValidate ? <FaRegCheckCircle /> : <FaRegCircle/>}
              At least one lowercase</div>
              <div className={`${specialChValidate ? "text-green-600 flex items-center gap-3": "text-black flex items-center gap-3"}`}>{specialChValidate ? <FaRegCheckCircle /> : <FaRegCircle/>}At least one special characters</div>
              <div className={`${numberValidate ?"text-green-600 flex items-center gap-3":"text-black flex items-center gap-3"}`}>
              {numberValidate ? <FaRegCheckCircle /> : <FaRegCircle/>}
              At least one number and Length 8 </div>
              </div>
       
            </div>
            <div className="form-control mt-6">
              <Button variant="contained" type="submit" className="btn btn-primary">Register</Button>
            </div>
            <p>Already have an account, Please <Link to="/login" className="text-blue-400">Sign In</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
