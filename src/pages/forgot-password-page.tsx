import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';
import backToLogin from '../assets/left-arrow.png';

export default function ForgotPassword() {
  const [displayText, setDisplayText] = useState<string | null>(null);
  const [email, setEmail] = useState<string>('');

  const handleButtonClick = () => {
    if (email.trim() === '') {
      setDisplayText('Email field cannot be empty.');
    } else if (!validateEmail(email)) {
      setDisplayText('Invalid email address.');
    } else {
      setDisplayText(null);
      window.location.href = '/verification-code';
    }
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="">
      <div className="w-[1440px] h-[844px] relative bg-white">
        <Link to={'/'}>
          <img
            className="w-[248px] h-[85px] left-[599px] top-[65px] absolute"
            src={Logo}
            alt="Logo"
          />
        </Link>

        <div className="left-[543px] top-[178px] absolute text-black text-[32px] font-bold font-['Raleway']">
          Password reset.
        </div>
        <div className="left-[543px] top-[230px] absolute text-black text-base font-medium font-['Raleway']">
          Please enter the email address you'd like your <br />
          password reset information sent to.
        </div>
        <div className="email w-[350px] h-10 left-[541px] top-[282px] absolute">
          <input
            className="w-full h-full bg-white rounded-[5px] border-2 border-red-400 pl-[11px] pr-[11px] text-base font-bold font-['Raleway']"
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value.trim())}
          />
        </div>

        <div className="text_after left-[541px] top-[336px] absolute text-center text-red-600 text-base font-bold font-['Raleway']">
          {displayText}
        </div>
        <button
          className="button_signup w-[350px] bg-red-500 rounded-[5px] h-[41px] left-[543px] top-[381px] absolute flex justify-center items-center"
          type="button"
          onClick={handleButtonClick}
        >
          <div className="text-white text-base font-bold font-['Raleway']">
            Reset Password
          </div>
        </button>

        <div className="w-[140px] left-[639px] top-[488px] absolute">
          <Link to={'/login'}>
            <div className="w-[104px] h-[9.76px] left-[36px] top-[7px] absolute text-center text-black text-base font-medium font-['Raleway']">
              Back to log in
            </div>
            <img
              className="w-6 h-6 left-0 top-0 absolute"
              src={backToLogin}
              alt="Back to login"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
