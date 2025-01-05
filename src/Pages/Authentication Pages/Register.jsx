import Lottie from "lottie-react";
import React, { useState } from "react";
import registerLottie from "../../assets/Lottie/register.json";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Button } from "@mui/material";
import { MdDone } from "react-icons/md";
function Register() {
  const [seePassword, setSeePassword] = useState(true);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const passwordValue = watch("password", "");

  const characterValidate = /^(?=.*[a-z])(?=.*[A-Z])/.test(passwordValue);
  const specialChValidate = /^(?=.*[\W_])/.test(passwordValue);
  const numberValidate = /^(?=.*\d)(?=.{8,})/.test(passwordValue);
  const onSubmit = (data) =>{
    console.log(data);
  }
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse lg:ml-36">
        <div className="text-center lg:text-left">
          <Lottie animationData={registerLottie}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shadow-2xl p-5">
          <h1 className="text-2xl font-bold text-center">Register</h1>
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
              <div className={` ${characterValidate ? "text-green-600 flex":"text-black"}`}>
              {characterValidate&&<MdDone className="mt-1" />}
              At least one uppercase and lowercase</div>
              <div className={`${specialChValidate ? "text-green-600 flex": "text-black"}`}>{specialChValidate && <MdDone className="mt-1" />}At least one special characters and one numbers</div>
              <div className={`${numberValidate ?"text-green-600 flex":"text-black"}`}>
              {numberValidate && <MdDone className="mt-1" />}
              At least 8 character </div>
              </div>
       
            </div>
            <div className="form-control mt-6">
              <Button variant="contained" type="submit" className="btn btn-primary">Register</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
