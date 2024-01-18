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

          <input
            className="firstname h-[49px] pl-[11px] pr-[1px] py-[11px] left-[181px] top-[176px] absolute bg-white rounded-[5px] border-2 border-red-400 justify-start items-center inline-flex"
            placeholder="firstname"
          />
          <input
            className="lastname h-[49px] pl-[11px] pr-[10px] py-[11px] left-[365px] top-[176px] absolute bg-white rounded-[5px] border-2 border-red-400 justify-start items-center inline-flex"
            placeholder="lastname"
          />
          <input
            className=" email w-[350px] pl-[11px] pr-[296px] py-[11px] left-[181px] top-[236px] absolute bg-white rounded-[5px] border-2 border-red-400 justify-start items-center inline-flex"
            placeholder="email"
          />

          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              className="w-[350px] p-[11px] left-[181px] top-[356px] absolute bg-white rounded-[5px] border-2 border-red-400 justify-center items-start gap-[173px] inline-flex"
              placeholder="confirm password"
            />
            <img
              className="cursor-pointer absolute right-[10px] top-[10px] w-[20px] h-[20px]"
              src={showConfirmPassword ? UnhideEye : HideEye}
              alt="Toggle Confirm Password Visibility"
              onClick={() => togglePasswordVisibility('confirmPassword')}
            />
          </div>

          <div className="relative">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              className="w-[350px] h-[50px] left-[181px] top-[296px] absolute bg-white rounded-[5px] border-2 border-red-400 justify-center items-start gap-[236px] inline-flex"
              placeholder="password"
            />
            <img
              className="cursor-pointer absolute right-[10px] top-[10px] w-[20px] h-[20px]"
              src={showPassword ? UnhideEye : HideEye}
              alt="Toggle Password Visibility"
              onClick={() => togglePasswordVisibility('password')}
            />
          </div>
          <button
            className=" button_signup w-[350px] bg-red-500 rounded-[5px] h-[41px] left-[181px] top-[416px] absolute"
            type="button"
          >
            <div className="left-[146px] top-[11px] absolute text-center text-white text-base font-bold font-['Raleway']">
              Sign up
            </div>
          </button>

          <div className="text-center h-[19px] pl-1.5 left-[232px] top-[481px] absolute flex items-center text-black text-base font-medium font-['Raleway']">
            Already have an account?
          </div>
          <Link to="/login">
            <div className="text-center h-[19px] pl-1.5 left-[430px] top-[481px] absolute flex items-center w-[350px] text-red-500 text-base font-bold font-['Raleway']">
              Login
            </div>
          </Link>

          <div className="or left-[346px] top-[520px] absolute text-zinc-600 text-[13px] font-bold font-['Raleway']">
            OR
          </div>

          <button
            className="with_google pl-[55px] pr-[83px] pb-0.5 left-[181px] top-[555px] absolute bg-white rounded-[5px] border-2 border-red-400 justify-start items-center gap-[15px] inline-flex"
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
