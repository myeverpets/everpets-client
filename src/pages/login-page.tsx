import { useState } from 'react';
import { Link } from 'react-router-dom';
import Parrot from '../assets/login_parrot.png';
import Logo from '../assets/logo.png';
import Google from '../assets/google.png';
import HideEye from '../assets/hide_eye.png';
import UnhideEye from '../assets/unhide_eye.png';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  // const [setDisplayText] = useState<string | null>(null);
  // const [email] = useState<string>('');

  const togglePasswordVisibility = (field: string) => {
    if (field === 'password') {
      setShowPassword((prevState) => !prevState);
    }
  };

  // const handleButtonClick = () => {
  //   if (email.trim() === '') {
  //     setDisplayText('Email field cannot be empty.');
  //   } else if (!validateEmail(email)) {
  //     setDisplayText('Invalid email address.');
  //   } else {
  //     setDisplayText(null);
  //   }
  // };

  // const validateEmail = (email: string) => {
  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   return emailRegex.test(email);
  // };

  return (
    <div className="login w-1/2">
      <div className="left_side bg-rede ">
        <div className="welcome_text flex-col justify-center items-center flex">
          <p className="text-white text-[64px] font-bold font-['Raleway']">
            Welcome back!
          </p>
          <p className="text-white text-base font-medium font-['Raleway'] tracking-wide">
            Glad to see you again!
          </p>
        </div>
        <img className="w-[666px] h-[640px]" src={Parrot} alt="Login Parrot" />
        <div className="right_side">
          <Link to="/">
            <img
              className="w-[248px] h-[85px] pl-[9px] left-[900px] top-[66px] absolute justify-end items-center inline-flex"
              src={Logo}
              alt="Logo"
            />
          </Link>
          <form action="">
            <input
              className=" email w-[350px] pl-[11px] pr-[11px] py-[11px] left-[870px] top-[180px] absolute bg-white rounded-[5px] border-2 border-red-400 justify-start items-center inline-flex font-bold font-['Raleway']"
              placeholder="email"
            />

            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                className="w-[350px] h-[50px] left-[870px] bottom-[470px] absolute bg-white rounded-[5px] border-2 border-red-400 justify-center items-start inline-flex font-bold font-['Raleway']"
                placeholder="password"
              />
              <img
                className="cursor-pointer absolute left-[1190px] bottom-[485px] w-[20px] h-[20px] z-[1]"
                src={showPassword ? UnhideEye : HideEye}
                alt="Toggle Password Visibility"
                onClick={() => togglePasswordVisibility('password')}
              />
            </div>
            <Link to="/forgot-password">
              <div className="text-center font-medium h-[19px] pl-1.5 left-[870px] top-[325px] absolute flex items-center text-base  font-['Raleway']">
                Forgot password?
              </div>
            </Link>
            <button
              className=" button_signup w-[350px] bg-red-500 rounded-[5px] h-[41px] left-[870px] top-[360px] absolute"
              type="button"
            >
              <div className="left-[146px] top-[11px] absolute text-center text-white text-base font-bold font-['Raleway']">
                Sign up
              </div>
            </button>
            <div className="text-center  font-medium font-['Raleway'] h-[19px] pl-1.5 left-[885px] top-[415px] absolute flex items-center text-black text-base">
              Does have an account?
            </div>
            <Link to="/signup">
              <div className="text-center h-[19px] pl-1.5 left-[1060px] top-[415px] absolute flex items-center text-red-500 text-base font-bold font-['Raleway']">
                Sign up for free
              </div>
            </Link>
          </form>

          <div className="or left-[1030px] top-[445px] absolute text-zinc-600 text-[13px] font-bold font-['Raleway']">
            OR
          </div>

          <button
            className="with_google pl-[55px] pr-[83px] pb-0.5 absolute bg-white rounded-[5px] border-2 border-red-400 justify-start items-center gap-[15px] inline-flex left-[870px] top-[470px] absolute]"
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

export default Login;
