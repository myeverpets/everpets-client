import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Cat from '../assets/signup_cat.png';
import Logo from '../assets/logo.png';
import Google from '../assets/google.png';
import HideEye from '../assets/hide_eye.png';
import UnhideEye from '../assets/unhide_eye.png';

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = (field: string) => {
    if (field === 'password') {
      setShowPassword((prevState) => !prevState);
    } else if (field === 'confirmPassword') {
      setShowConfirmPassword((prevState) => !prevState);
    }
  };

  return (
    <div className="signup">
      <div className="w-[1440px] h-[844px] bg-white justify-start items-center inline-flex">
        <div className="left_side w-[720px] pt-[66px] bg-rede flex-col justify-end items-center gap-[31px] inline-flex">
          <div className="welcome_text flex-col justify-center items-center flex">
            <p className="text-white text-[64px] font-bold font-['Raleway']">
              Welcome!
            </p>
            <p className="text-white text-base font-medium font-['Raleway'] tracking-wide">
              Enter your details to create an account and get started.
            </p>
          </div>
          <img className="w-[832px] h-[682px]" src={Cat} alt="Signup Cat" />
        </div>

        <div className="w-[720px] h-[844px] relative bg-white">
          <Link to="/">
            <img
              className="w-[248px] h-[85px] pl-[9px] left-[227px] top-[66px] absolute justify-end items-center inline-flex"
              src={Logo}
              alt="Logo"
            />
          </Link>
          <div className="grid grid-cols-2  left-[181px] top-[176px] absolute bg-white justify-start items-center w-[350px] gap-4">
            <input
              className="firstname col-span-1  rounded-[5px] border-2 border-red-400 h-[49px] pl-[11px] pr-[1px] py-[11px] font-bold font-raleway"
              placeholder="firstname"
            />
            <input
              className="lastname col-span-1  rounded-[5px] border-2 border-red-400 h-[49px] pl-[11px] pr-[1px] py-[11px] font-bold font-raleway"
              placeholder="lastname"
            />
          </div>
          <input
            className=" email w-[350px] pl-[11px] pr-[11px] py-[11px] left-[181px] top-[236px] absolute bg-white rounded-[5px] border-2 border-red-400 justify-start items-center inline-flex font-bold font-raleway"
            placeholder="email"
          />
          <input
            className=" number w-[350px] pl-[11px] pr-[11px] py-[11px] left-[181px] top-[296px] absolute bg-white rounded-[5px] border-2 border-red-400 justify-start items-center inline-flex font-bold font-raleway"
            placeholder="number"
          />
          <div className="relative top-[355px]">
            <input
              type={showPassword ? 'text' : 'password'}
              className="w-[350px] h-[50px] left-[181px]  absolute bg-white rounded-[5px] border-2 border-red-400 justify-center items-start inline-flex font-bold font-raleway "
              placeholder="password"
            />
            <img
              className="cursor-pointer absolute right-[200px] top-[15px] w-[20px] h-[20px] z-[1]"
              src={showPassword ? UnhideEye : HideEye}
              alt="Toggle Password Visibility"
              onClick={() => togglePasswordVisibility('password')}
            />
          </div>

          <div className="relative top-[416px]">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              className="w-[350px] p-[11px] left-[181px] absolute bg-white rounded-[5px] border-2 border-red-400 justify-center items-start gap-[173px] inline-flex font-bold font-raleway"
              placeholder="confirm password"
            />
            <img
              className="cursor-pointer absolute right-[200px] top-[15px] w-[20px] h-[20px]"
              src={showConfirmPassword ? UnhideEye : HideEye}
              alt="Toggle Confirm Password Visibility"
              onClick={() => togglePasswordVisibility('confirmPassword')}
            />
          </div>
          <button
            className=" button_signup w-[350px] bg-red-500 rounded-[5px] h-[41px] left-[181px] top-[480px] absolute"
            type="button"
          >
            <div className="left-[146px] top-[11px] absolute text-center text-white text-base font-bold font-['Raleway']">
              Sign up
            </div>
          </button>

          <div className="text-center h-[19px] pl-1.5 left-[232px] top-[540px] absolute flex items-center text-black text-base font-medium font-['Raleway']">
            Already have an account?
          </div>
          <Link to="/login">
            <div className="text-center h-[19px] pl-1.5 left-[430px] top-[540px] absolute flex items-center w-[350px] text-red-500 text-base font-bold font-['Raleway']">
              Login
            </div>
          </Link>

          <div className="or left-[346px] top-[565px] absolute text-zinc-600 text-[13px] font-bold font-['Raleway']">
            OR
          </div>

          <button
            className="with_google pl-[55px] pr-[83px] pb-0.5 left-[181px] top-[600px] absolute bg-white rounded-[5px] border-2 border-red-400 justify-start items-center gap-[15px] inline-flex"
            type="button"
          >
            <img className="w-[31px] h-[39px]" src={Google} alt="Google Logo" />
            <div className="text-center text-black text-base font-bold font-['Raleway']">
              Continue with Google
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
